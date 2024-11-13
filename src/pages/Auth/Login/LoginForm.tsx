import { SigninUserCredentials } from '@/types';
import { ProForm, ProFormText } from '@ant-design/pro-components';
import { useNavigate } from '@umijs/max';
import { Button, Flex } from 'antd';
import { FC } from 'react';

interface Props {
  onFinish?:
    | ((formData: SigninUserCredentials) => Promise<boolean | void> | void)
    | undefined;
}
const LoginForm: FC<Props> = ({ onFinish }) => {
  const navigate = useNavigate();

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
      <Flex justify="right">
        <Button type="link" onClick={() => navigate('/sign-up')}>
          Don&apos;t havee an account? Sign up!
        </Button>
      </Flex>
    </ProForm>
  );
};

export default LoginForm;
