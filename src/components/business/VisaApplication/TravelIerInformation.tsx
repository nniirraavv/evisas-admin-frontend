import AddNewVisaApplicationTraveller from '@/components/Forms/Visa/AddNewVisaApplicationTraveller';
import Step_Two from '@/components/Forms/Visa/VisaApplicationSteps/AddDocuments_Step_Two';
import { TravellerDetailsFormFields } from '@/components/Forms/Visa/VisaApplicationSteps/TripAndTravellerDetails_Step_One';
import { ResponseStatus } from '@/constants';
import { mapAntFileToServerFile } from '@/lib/uploadUtils';
import { getTravellerName } from '@/lib/utils';
import { mapPassportOcr, mapVisaApplicantToForm } from '@/lib/visaUtils';
import { PassportOcrItem } from '@/services/upload/typings';
import { TravellerFormData } from '@/services/visaApplication/typings';
import {
  deleteVisaApplicant,
  getVisaApplicant,
  updateVisaApplicant,
} from '@/services/visaApplication/VisaApplicantController';
import { ProForm } from '@ant-design/pro-components';
import { useParams } from '@umijs/max';
import { Button, Drawer, Flex, Form, Spin } from 'antd';
import { FC, useState } from 'react';

interface TravellerDetailsFormProps {
  onCancel?: () => void;
  onFinish?: ((formData: any) => Promise<boolean | void> | void) | undefined;
  initialValues?: any;
}
export const TravellerDetailsForm: FC<TravellerDetailsFormProps> = ({
  onCancel,
  onFinish,
  initialValues,
}) => {
  const [form] = Form.useForm();

  const handleNewOcrData = async (data: PassportOcrItem) => {
    // patch the received passport details onto the form
    const passportOcr = mapPassportOcr(data);
    form.setFieldsValue(passportOcr);
  };

  return (
    <ProForm
      form={form}
      onFinish={onFinish}
      initialValues={initialValues}
      submitter={{
        render: (props) => (
          <Flex justify="end">
            <Button htmlType="button" onClick={onCancel}>
              Cancel
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              className="ms-2"
              onClick={(e) => {
                e?.preventDefault();
                e?.stopPropagation();
                props?.submit();
              }}
            >
              Save
            </Button>
          </Flex>
        ),
      }}
    >
      <TravellerDetailsFormFields handleNewOcrData={handleNewOcrData} />
    </ProForm>
  );
};

interface Props {
  onTravellerUpdate?: () => void;
  onTravellerDelete?: () => void;
  onTravellerCreate?: () => void;
  readonly?: boolean;
}
const TravelIerInformation: FC<Props> = ({
  onTravellerUpdate,
  onTravellerDelete,
  onTravellerCreate,
  readonly,
}) => {
  const { applicationNo } = useParams();
  const [spinning, setSpinning] = useState(false);
  const [open, setOpen] = useState<TravellerFormData>();
  const openModal = (traveller: TravellerFormData) => setOpen(traveller);
  const closeModal = () => setOpen(undefined);
  const handleTravellerEdit = async (travellerNo: string) => {
    if (!applicationNo) return;
    try {
      setSpinning(true);
      // Fetch traveller details
      const response = await getVisaApplicant(applicationNo, travellerNo);
      if (response?.status === ResponseStatus.ok) {
        console.log(
          'Edit traveller : ',
          applicationNo,
          travellerNo,
          response?.item,
        );
        const traveller = mapVisaApplicantToForm(response?.item);
        openModal(traveller);
      }
    } catch (error) {
      console.log('Error on applicant fetch : ', error);
    } finally {
      setSpinning(false);
    }
  };
  const handleTravellerDelete = async (travellerNo: string) => {
    if (!applicationNo) return;
    try {
      setSpinning(true);
      // Delete traveller
      const response = await deleteVisaApplicant(applicationNo, travellerNo);
      if (response?.status === ResponseStatus.ok) {
        onTravellerDelete?.();
      }
    } catch (error) {
      console.log('Error on applicant fetch : ', error);
    } finally {
      setSpinning(false);
    }
  };
  const handleFinish = (values: any, traveller?: TravellerFormData) => {
    if (!applicationNo || !traveller) return;

    setSpinning(true);
    console.log('Form Submitted : ', values);

    const payload = {
      ...values,
    };
    if (payload?.passportFrontPage?.length) {
      payload['passportFrontPage'] = mapAntFileToServerFile(
        payload?.passportFrontPage[0],
      );
    }
    if (payload?.passportBackPage?.length) {
      payload['passportBackPage'] = mapAntFileToServerFile(
        payload?.passportBackPage[0],
      );
    }
    if (payload?.photo?.length) {
      payload['photo'] = mapAntFileToServerFile(payload?.photo[0]);
    }

    // TODO: update traveller details
    updateVisaApplicant(applicationNo, traveller?.travellerNo, payload)
      .then((response) => {
        if (response?.status === ResponseStatus.ok) {
          closeModal();
          onTravellerUpdate?.();
        }
      })
      .finally(() => setSpinning(false));
  };
  return (
    <>
      <Step_Two
        readonly={readonly}
        showTravellerEdit={!readonly}
        showTravellerDelete={!readonly}
        handleTravellerEdit={handleTravellerEdit}
        handleTravellerDelete={handleTravellerDelete}
      />
      {readonly ? null : (
        <AddNewVisaApplicationTraveller onTravellerCreate={onTravellerCreate} />
      )}
      {readonly ? null : (
        <Drawer
          title={`Traveller Details ${
            open ? ' - ' + getTravellerName(open) : ''
          }`}
          style={{ top: 20 }}
          open={!!open}
          onClose={closeModal}
          width={1000}
          footer={false}
          maskClosable={false}
        >
          <Spin spinning={spinning}>
            <TravellerDetailsForm
              onCancel={closeModal}
              onFinish={(data) => handleFinish(data, open)}
              initialValues={open}
            />
          </Spin>
        </Drawer>
      )}
    </>
  );
};

export default TravelIerInformation;
