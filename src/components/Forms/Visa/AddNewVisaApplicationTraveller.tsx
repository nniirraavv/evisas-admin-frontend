import { TravellerDetailsForm } from '@/components/business/VisaApplication/TravelIerInformation';
import { ResponseStatus } from '@/constants';
import { mapAntFileToServerFile } from '@/lib/uploadUtils';
import { createVisaApplicant } from '@/services/visaApplication/VisaApplicantController';
import { PlusCircleOutlined } from '@ant-design/icons';
import { useParams } from '@umijs/max';
import { Button, Drawer, Spin } from 'antd';
import { FC, useState } from 'react';

interface Props {
  onTravellerCreate?: () => void;
}
const AddNewVisaApplicationTraveller: FC<Props> = ({ onTravellerCreate }) => {
  const { applicationNo } = useParams();
  const [open, setOpen] = useState(false);
  const [spinning, setSpinning] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const handleFinish = (values: any) => {
    if (!applicationNo) return;

    setSpinning(true);

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

    // TODO: create new traveller
    createVisaApplicant(applicationNo, payload)
      .then((response) => {
        if (response?.status === ResponseStatus.ok) {
          closeModal();
          onTravellerCreate?.();
        }
      })
      .finally(() => setSpinning(false));
  };

  const handleTravellerAdd = () => openModal();

  return (
    <>
      <Button
        type="dashed"
        block
        icon={<PlusCircleOutlined />}
        onClick={(e) => {
          e?.preventDefault();
          e?.stopPropagation();
          handleTravellerAdd();
        }}
      >
        Add New Traveller
      </Button>
      <Drawer
        title={'Add New Traveller'}
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
            onFinish={handleFinish}
            initialValues={open}
          />
        </Spin>
      </Drawer>
    </>
  );
};

export default AddNewVisaApplicationTraveller;
