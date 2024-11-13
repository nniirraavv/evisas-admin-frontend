import { SigninUserCredentials } from '@/types';
import { useModel, useNavigate } from '@umijs/max';
import { Flex, message, notification, Spin, Typography } from 'antd';
import { ConfirmSignInOutput, SignInOutput } from 'aws-amplify/auth';
import { useEffect, useMemo, useState } from 'react';
import Logo from '../../../assets/company-logo.png';
import OTPForm, { IOtp } from '../OTP';
import LoginForm from './LoginForm';
import NewPasswordRequireForm, { INewPassword } from './NewPasswordRequireForm';

const { Title, Text } = Typography;

export default () => {
  const { data, login, confirmLogin } = useModel('auth');
  const [siginResponse, setSiginResponse] = useState<
    SignInOutput | ConfirmSignInOutput
  >();
  const [spinning, setSpinning] = useState(false);
  const navigate = useNavigate();
  const goToHome = () => navigate('/');
  const formTitle = useMemo(() => {
    let title = '';
    switch (siginResponse?.nextStep?.signInStep) {
      case 'CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED':
        title = 'Update Password';
        break;
      case 'CONFIRM_SIGN_IN_WITH_CUSTOM_CHALLENGE':
        title = 'Enter OTP';
        break;

      default:
        title = 'Login';
        break;
    }
    return title;
  }, [siginResponse]);

  useEffect(() => {
    if (data) {
      goToHome();
    }
  }, []);

  const handleLogin = async (creds: SigninUserCredentials) => {
    try {
      const response = await login(creds.username, creds.password);

      if (response.isSignedIn || response.nextStep.signInStep === 'DONE') {
        message.success('Logged in successfully');

        return goToHome();
      }
      setSiginResponse(response);
    } catch (error) {
      // @ts-ignore
      if (error?.message) {
        // @ts-ignore
        notification.error({ message: 'Error', description: error?.message });
      } else {
        notification.error({
          message: 'Error',
          description: 'Somthing went wrong',
        });
      }
    } finally {
      setSpinning(false);
    }
  };

  const handleConfirmLogin = async (code: string) => {
    setSpinning(true);
    try {
      const response = await confirmLogin(code);
      if (response.isSignedIn || response.nextStep.signInStep === 'DONE') {
        message.success('Logged in successfully');

        return goToHome();
      }
      setSiginResponse(response);
    } catch (error) {
      // @ts-ignore
      if (error?.message) {
        // @ts-ignore
        notification.error({ message: 'Error', description: error?.message });
      } else {
        notification.error({
          message: 'Error',
          description: 'Somthing went wrong',
        });
      }
    } finally {
      setSpinning(false);
    }
  };

  const handleConfirmRegister = async (data: IOtp) => {
    await handleConfirmLogin(data.otp);
  };

  const handleNewPasswordSubmit = async (creds: INewPassword) => {
    await confirmLogin(creds.password);
  };

  return (
    <Spin spinning={spinning}>
      <Flex justify="center" align="center" vertical={true} className="p-6">
        <Flex justify="center" align="center">
          <img src={Logo} width={180} height={180} className="pe-3 mb-4" />
        </Flex>
        <Flex justify="center" align="center" className="pb-6">
          <Text>The world&apos;s finest visa booking! </Text>
        </Flex>
        <Flex justify="center" align="center">
          <Title level={3}>{formTitle}</Title>
        </Flex>

        {siginResponse?.nextStep?.signInStep ===
        'CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED' ? (
          <NewPasswordRequireForm onFinish={handleNewPasswordSubmit} />
        ) : siginResponse?.nextStep?.signInStep ===
          'CONFIRM_SIGN_IN_WITH_CUSTOM_CHALLENGE' ? (
          <OTPForm onFinish={handleConfirmRegister} />
        ) : (
          <LoginForm onFinish={handleLogin} />
        )}
      </Flex>
    </Spin>
  );
};
