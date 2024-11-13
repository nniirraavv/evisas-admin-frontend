import { SigninUserCredentials } from '@/types';
import { ProForm, ProFormText } from '@ant-design/pro-components';
import { FC } from 'react';

interface Props {
  onFinish?:
    | ((formData: SigninUserCredentials) => Promise<boolean | void> | void)
    | undefined;
}
const LoginForm: FC<Props> = ({ onFinish }) => {
  return (
    <ProForm
      autoFocusFirstInput
      submitter={{
        searchConfig: { submitText: 'Login' },
        resetButtonProps: false,
        submitButtonProps: { type: 'primary', block: true },
      }}
      onFinish={onFinish}
    >
      <ProFormText
        width="md"
        name="username"
        label="Username"
        placeholder="enter a username"
        rules={[{ required: true, message: 'Please enter a username' }]}
      />
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

export default LoginForm;
