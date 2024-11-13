import useModalHelper from '@/hooks/useModalHelper';
import { Visa } from '@/services/visa/typings';
import { ShareVisaInfoListTypes } from '@/types';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import {
  Button,
  Flex,
  Form,
  Input,
  message,
  Modal,
  Space,
  Table,
  Tabs,
  Tooltip,
  Typography,
} from 'antd';
import { FC, useState } from 'react';

const { Text } = Typography;

interface DataType {
  key: React.Key;
  name: string;
}

enum ShareTabs {
  Email = 'email',
  Whatsapp = 'mobile',
}

interface Props {
  visa: Visa;
  title?: string;
  buttonType?: 'link' | 'text' | 'default' | 'primary' | 'dashed';
  className?: string;
}

const ShareVisaInfoList: DataType[] = Object.values(ShareVisaInfoListTypes).map(
  (v) => ({ name: v, key: v }),
);

const ShareVisaInfo: FC<Props> = ({ title, buttonType, className }) => {
  const [emailForm] = Form.useForm();
  const [mobileForm] = Form.useForm();
  const { open, openModal, onCancel } = useModalHelper();
  const [activeTabKey, setActiveTabKey] = useState<string>(ShareTabs.Email);
  const [allowedFields, setAllowedFields] =
    useState<ShareVisaInfoListTypes[]>();

  return (
    <>
      <Button
        onClick={openModal}
        type={buttonType || 'primary'}
        className={className}
      >
        {title || 'Share'}
      </Button>
      <Form.Provider
        onFormFinish={(name, info) => {
          if (allowedFields?.length === 0) {
            message.error('Please select atleast one field to share!');
          }
          try {
            switch (name) {
              case ShareTabs.Email:
                console.log('submit form  with : ', info.values, allowedFields); // TODO: call api
                break;
              case ShareTabs.Whatsapp:
                console.log('submit form with : ', info.values, allowedFields); // TODO: call api
                break;

              default:
                break;
            }
          } catch (error) {
            console.log('Error on email : ', error);
          }
        }}
      >
        <Modal
          title={
            <div>
              Share information{' '}
              <Tooltip title="This UI is not functional! Development yet to be scheduled">
                <ExclamationCircleOutlined style={{ color: '#ff4d4f' }} />
              </Tooltip>
            </div>
          }
          open={open}
          classNames={{ body: 'mt-4' }}
          footer={false}
          onCancel={() => {
            setAllowedFields([]);
            if (emailForm?.getFieldValue('email')) emailForm.resetFields();
            if (mobileForm?.getFieldValue('mobile')) mobileForm?.resetFields();
            onCancel();
          }}
          style={{ top: 20 }}
        >
          <Space
            direction="vertical"
            className="mb-4"
            style={{ width: '100%' }}
          >
            <Text>Select from the list of fields you want to send</Text>
            <Table
              scroll={{ y: 400 }}
              pagination={false}
              dataSource={ShareVisaInfoList}
              columns={[{ title: 'Item', dataIndex: 'name' }]}
              rowSelection={{
                type: 'checkbox',
                selectedRowKeys: allowedFields,
                onChange: (_: React.Key[], selectedRows: DataType[]) => {
                  setAllowedFields(
                    selectedRows.map((r) => r.key) as ShareVisaInfoListTypes[],
                  );
                },
              }}
            />
          </Space>
          <Space direction="vertical" style={{ width: '100%' }}>
            <Text strong>Share via</Text>
            <Tabs
              activeKey={activeTabKey}
              items={[
                {
                  key: ShareTabs.Email,
                  label: 'Email',
                  children: (
                    <Form name={ShareTabs.Email} form={emailForm}>
                      <Form.Item
                        label="Email Address"
                        name={ShareTabs.Email}
                        layout="vertical"
                        rules={[
                          { required: true, message: 'Email is required' },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Form>
                  ),
                },
                {
                  key: ShareTabs.Whatsapp,
                  label: 'Whatsapp',
                  children: (
                    <Form name={ShareTabs.Whatsapp} form={mobileForm}>
                      <Form.Item
                        label="Mobile Number"
                        name={ShareTabs.Whatsapp}
                        layout="vertical"
                        rules={[
                          {
                            required: true,
                            message: 'Mobile number is required',
                          },
                          {
                            pattern: /^[789]\d{9}$/,
                            message: 'Please enter a valid mobile number',
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Form>
                  ),
                },
              ]}
              onChange={setActiveTabKey}
            ></Tabs>
          </Space>
          <Flex justify="end" align="center" className="mt-4">
            <Button onClick={onCancel}>Cancel</Button>
            <Button
              type="primary"
              className="ml-2"
              onClick={(e) => {
                e.preventDefault();
                switch (activeTabKey) {
                  case ShareTabs.Email:
                    emailForm.submit();
                    break;
                  case ShareTabs.Whatsapp:
                    mobileForm.submit();
                    break;

                  default:
                    break;
                }
              }}
            >
              Share
            </Button>
          </Flex>
        </Modal>
      </Form.Provider>
    </>
  );
};

export default ShareVisaInfo;
