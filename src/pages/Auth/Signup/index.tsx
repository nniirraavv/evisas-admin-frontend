import { SignupUserCredentials } from '@/types';
import { useModel, useNavigate } from '@umijs/max';
import { Flex, message, notification, Typography } from 'antd';
import { ConfirmSignUpOutput, SignUpOutput } from 'aws-amplify/auth';
import { useMemo, useState } from 'react';
import Logo from '../../../assets/company-logo.png';
import OTPForm, { IOtp } from '../OTP';
import SignupForm from './SignupForm';

const { Title, Text } = Typography;

export default () => {
  const { register, confirmRegister } = useModel('auth');
  const [sigupResponse, setSigupResponse] = useState<
    SignUpOutput | ConfirmSignUpOutput
  >();
  const navigate = useNavigate();

  const formTitle = useMemo(() => {
    let title = '';
    switch (sigupResponse?.nextStep?.signUpStep) {
      case 'CONFIRM_SIGN_UP':
        title = 'Enter OTP';
        break;

      default:
        title = 'Sign Up';
        break;
    }
    return title;
  }, [sigupResponse]);

  const goToLogin = () => navigate('/login');

  const handleRegister = async (creds: SignupUserCredentials) => {
    try {
      const response = await register(creds);

      if (response.isSignUpComplete) {
        message.success('Registered successfully');
        return goToLogin();
      }
      setSigupResponse(response);
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
    }
  };

  const handleConfirmRegister = async (data: IOtp) => {
    try {
      if (sigupResponse?.userId) {
        const response = await confirmRegister(
          sigupResponse?.userId,
          data?.otp,
        );
        if (
          response.isSignUpComplete ||
          response.nextStep.signUpStep === 'DONE'
        ) {
          message.success('Registered successfully');
          return goToLogin();
        }
      }
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
    }
  };

  return (
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
      {sigupResponse?.nextStep?.signUpStep === 'CONFIRM_SIGN_UP' ? (
        <OTPForm onFinish={handleConfirmRegister} />
      ) : (
        <SignupForm onGoToLogin={goToLogin} onFinish={handleRegister} />
      )}
    </Flex>
  );
};
