import { ProForm, ProFormText } from '@ant-design/pro-components';
import { FC } from 'react';
export interface INewPassword {
  password: string;
}
interface Props {
  onFinish?:
    | ((formData: INewPassword) => Promise<boolean | void> | void)
    | undefined;
}

const NewPasswordRequireForm: FC<Props> = ({ onFinish }) => {
  return (
    <ProForm
      submitter={{
        searchConfig: { submitText: 'Submit' },
        resetButtonProps: false,
        submitButtonProps: { type: 'primary', block: true },
      }}
      onFinish={onFinish}
    >
      <ProFormText.Password
        width="md"
        name="password"
        label="Password"
        placeholder="enter a strong password"
        fieldProps={{ type: 'password' }}
        rules={[{ required: true, message: 'Please enter a password' }]}
      />
    </ProForm>
  );
};

export default NewPasswordRequireForm;
