import TravellerPassportDetails from '@/components/Forms/Visa/TravellerPassportDetails';
import TravellerFileUploadCard from '@/components/Forms/Visa/Upload/TravellerFileUploadCard';
import { mapPassportOcr, mapVisaApplicationDataToForm } from '@/lib/visaUtils';
import { PassportOcrItem } from '@/services/upload/typings';
import { getVisaApplication } from '@/services/visaApplication/VisaApplicationController';
import { DeleteOutlined } from '@ant-design/icons';
import {
  FormListActionType,
  ProCard,
  ProFormList,
  ProFormSelect,
} from '@ant-design/pro-components';
import { useModel, useParams } from '@umijs/max';
import { useMount } from 'ahooks';
import {
  Button,
  Collapse,
  ConfigProvider,
  Flex,
  Form,
  Spin,
  Typography,
} from 'antd';
import { FC, useRef, useState } from 'react';
const { Text } = Typography;

interface Props {
  handleNewOcrData: (data: PassportOcrItem) => void;
}
export const TravellerDetailsFormFields: FC<Props> = ({ handleNewOcrData }) => {
  return (
    <TravellerFileUploadCard onNewOcrData={handleNewOcrData}>
      <TravellerPassportDetails />
    </TravellerFileUploadCard>
  );
};

const Step_One = () => {
  const { applicationNo } = useParams();
  const { data: visa } = useModel('visa');
  const { setData: setVisaApplication } = useModel('visaApplication');
  const [spinning, setSpinning] = useState(false);
  const form = Form.useFormInstance();

  const fetchVisaApplicationInfo = async () => {
    if (!applicationNo) return;
    try {
      setSpinning(true);
      const response = await getVisaApplication(applicationNo);
      if (response) setVisaApplication(response.item);
      return response;
    } finally {
      setSpinning(false);
    }
  };

  const handleNewOcrData = async (
    data: PassportOcrItem,
    travellerIndex: number,
  ) => {
    try {
      const passportOcr = mapPassportOcr(data);

      // patch the received passport details onto the form
      const formValues = form.getFieldsValue();
      const travellers = (formValues?.travellers || []) as any[];
      if (travellers?.length) {
        const index = travellers?.findIndex(
          (_, index) => index === travellerIndex,
        );
        if (index > -1) {
          travellers[index] = { ...travellers[index], ...passportOcr };
          form.setFieldsValue({ travellers });
        }
      }
    } catch (error) {
      console.log('Error : ', error);
    }
  };

  useMount(async () => {
    // Auto fill the form data for traveller details
    // Fetch visa info
    const response = await fetchVisaApplicationInfo();
    const visaApplication = mapVisaApplicationDataToForm(response?.item);
    if (visaApplication) form.setFieldsValue({ ...visaApplication });
  });

  const actionRef = useRef<
    FormListActionType<{
      name: string;
    }>
  >();

  return (
    <Spin spinning={spinning}>
      <ProCard className="mb-3">
        <ProFormSelect
          width={'md'}
          bordered={false}
          name="consulate"
          label="Consulate"
          placeholder={''}
          options={visa?.visaInfo?.visaInfoObject?.consulateData}
          rules={[
            {
              required: true,
              message: 'Please select consulate',
            },
          ]}
        />
      </ProCard>
      <ProFormList
        label="Travellers"
        name={'travellers'}
        actionRef={actionRef}
        creatorButtonProps={{ creatorButtonText: 'Add new traveller' }}
        actionRender={() => [null]}
        containerStyle={{ width: '100%' }}
        alwaysShowItemLabel
      >
        {(
          // Basic information of the current row {name: number; key: number}
          meta,
          // current line number
          index,
        ) => {
          return (
            <ConfigProvider
              key={meta?.key}
              theme={{
                components: {
                  Collapse: {
                    headerBg: 'white',
                  },
                },
              }}
            >
              <Collapse
                className="w-full"
                items={[
                  {
                    key: index,
                    label: (
                      <Flex justify="space-between">
                        <Text strong className="text-xl">
                          Traveller {index + 1}
                        </Text>
                        <Button
                          shape="circle"
                          type="text"
                          title="Delete traveller"
                          icon={<DeleteOutlined />}
                          onClick={() => actionRef.current?.remove(index)}
                        />
                      </Flex>
                    ),
                    children: (
                      <TravellerDetailsFormFields
                        handleNewOcrData={(data) =>
                          handleNewOcrData(data, index)
                        }
                      />
                    ),
                  },
                ]}
              />
            </ConfigProvider>
          );
        }}
      </ProFormList>
    </Spin>
  );
};

export default Step_One;
