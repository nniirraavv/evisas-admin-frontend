import {
  ProFormDateTimePicker,
  ProFormRadio,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
  StepsForm,
} from '@ant-design/pro-components';
import { Modal } from 'antd';
import React from 'react';

export interface FormValueType extends Partial<API.UserInfo> {
  target?: string;
  template?: string;
  type?: string;
  time?: string;
  frequency?: string;
}

export interface UpdateFormProps {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => Promise<void>;
  updateModalVisible: boolean;
  values: Partial<API.UserInfo>;
}

const UpdateForm: React.FC<UpdateFormProps> = (props) => (
  <StepsForm
    stepsProps={{
      size: 'small',
    }}
    stepsFormRender={(dom, submitter) => {
      return (
        <Modal
          style={{ top: 20 }}
          width={640}
          bodyStyle={{ padding: '32px 40px 48px' }}
          destroyOnClose
          title="Rule configuration"
          open={props.updateModalVisible}
          footer={submitter}
          onCancel={() => props.onCancel()}
        >
          {dom}
        </Modal>
      );
    }}
    onFinish={props.onSubmit}
  >
    <StepsForm.StepForm
      initialValues={{
        name: props.values.name,
        nickName: props.values.nickName,
      }}
      title="Basic Information"
    >
      <ProFormText
        width="md"
        name="name"
        label="Rule name"
        rules={[{ required: true, message: 'Please enter a rule name!' }]}
      />
      <ProFormTextArea
        name="desc"
        width="md"
        label="Rule description"
        placeholder="Please enter at least five characters"
        rules={[
          {
            required: true,
            message:
              'Please enter a rule description of at least five characters!',
            min: 5,
          },
        ]}
      />
    </StepsForm.StepForm>
    <StepsForm.StepForm
      initialValues={{
        target: '0',
        template: '0',
      }}
      title="Configure rule properties"
    >
      <ProFormSelect
        width="md"
        name="target"
        label="Monitoring object"
        valueEnum={{
          0: 'Table I',
          1: 'Table II',
        }}
      />
      <ProFormSelect
        width="md"
        name="template"
        label="Rule template"
        valueEnum={{
          0: 'Rule template one',
          1: 'Rule template two',
        }}
      />
      <ProFormRadio.Group
        name="type"
        width="md"
        label="Rule type"
        options={[
          {
            value: '0',
            label: 'powerful',
          },
          {
            value: '1',
            label: 'weak',
          },
        ]}
      />
    </StepsForm.StepForm>
    <StepsForm.StepForm
      initialValues={{
        type: '1',
        frequency: 'month',
      }}
      title="Set scheduling period"
    >
      <ProFormDateTimePicker
        name="time"
        label="Starting time"
        rules={[{ required: true, message: 'Please select a start time!' }]}
      />
      <ProFormSelect
        name="frequency"
        label="Monitoring object"
        width="xs"
        valueEnum={{
          month: 'moon',
          week: 'week',
        }}
      />
    </StepsForm.StepForm>
  </StepsForm>
);

export default UpdateForm;
