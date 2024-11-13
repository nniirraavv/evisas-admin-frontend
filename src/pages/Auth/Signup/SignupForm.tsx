import { SignupUserCredentials } from '@/types';
import {
  ProForm,
  ProFormDependency,
  ProFormSwitch,
  ProFormText,
} from '@ant-design/pro-components';
import { Button, Flex } from 'antd';
import { FC } from 'react';

interface Props {
  onGoToLogin?: () => void;
  onFinish?:
    | ((formData: SignupUserCredentials) => Promise<boolean | void> | void)
    | undefined;
}

const SignupForm: FC<Props> = ({ onGoToLogin, onFinish }) => {
  return (
    <ProForm
      submitter={{
        searchConfig: { submitText: 'Sign Up' },
        resetButtonProps: false,
        submitButtonProps: { type: 'primary', block: true },
      }}
      onFinish={onFinish}
    >
      <ProFormText
        width="md"
        name="name"
        label="Name"
        placeholder="enter a name"
        rules={[{ required: true, message: 'Please enter a name' }]}
      />
      <ProFormText
        width="md"
        name="username"
        label="Username"
        placeholder="enter an username"
        rules={[
          { required: true, message: 'Please enter username' },
          { type: 'email' },
        ]}
      />
      <ProFormText.Password
        width="md"
        name="password"
        label="Password"
        placeholder="enter a strong password"
        fieldProps={{ type: 'password' }}
        rules={[{ required: true, message: 'Please enter a password' }]}
      />
      {/*  ProFormDependency will be automatically injected and compared with shouldUpdate  */}
      <ProFormDependency name={['password']}>
        {({ password }) => {
          return (
            <ProFormText
              width="md"
              name="confirmPassword"
              label="Confirm Password"
              placeholder="confirm your password"
              rules={[
                {
                  validator(__, value) {
                    if (value === password) {
                      return Promise.resolve();
                    } else {
                      return Promise.reject('The passwords do not match!');
                    }
                  },
                },
              ]}
            />
          );
        }}
      </ProFormDependency>
      <ProFormSwitch
        width="md"
        name="isIndividual"
        label="Is Individual"
        initialValue={false}
      />
      <ProFormDependency name={['isIndividual']}>
        {({ isIndividual }) => {
          return isIndividual ? null : (
            <ProFormText
              width="md"
              name="companyName"
              label="Company Name"
              placeholder="enter company name"
              rules={[
                {
                  required: true,
                  message: 'Please enter a company name',
                },
              ]}
            />
          );
        }}
      </ProFormDependency>
      <Flex justify="right">
        <Button type="link" onClick={onGoToLogin}>
          Have an account? login!
        </Button>
      </Flex>
    </ProForm>
  );
};

export default SignupForm;
