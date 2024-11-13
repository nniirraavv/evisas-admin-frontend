// Auth
import { USER_STORAGE_KEY } from '@/constants';
import useModelWithStorage from '@/hooks/useModelWithStorage';
import { SignupUserCredentials } from '@/types';
import {
  AuthUser,
  confirmSignIn,
  ConfirmSignInOutput,
  confirmSignUp,
  fetchAuthSession,
  getCurrentUser,
  signIn,
  SignInOutput,
  signOut,
  signUp,
  SignUpInput,
} from 'aws-amplify/auth';
import { Hub } from 'aws-amplify/utils';
import { useEffect } from 'react';

export interface IUseAuth extends AuthUser {
  name: string;
}

const useAuth = () => {
  const { data, setData, unSetData } =
    useModelWithStorage<IUseAuth>(USER_STORAGE_KEY);

  useEffect(() => {
    const handler = () => unSetData();
    // @ts-ignore
    window.addEventListener('user-logout', handler); // Add custom event listener for clear user item on local storage

    // Amplify auth events listener
    const stopAuthEvents = Hub.listen('auth', ({ payload }) => {
      switch (payload?.event) {
        case 'signedOut':
        case 'tokenRefresh_failure':
          unSetData();
          localStorage.clear();
          break;

        default:
          break;
      }
    });

    return () => {
      // @ts-ignore
      window.removeEventListener('user-logout', handler);

      // Stop listening to amplify auth events
      stopAuthEvents();
    };
  }, []);

  const getAuthenticatedUser = async () => {
    try {
      const user = await getCurrentUser();
      return user;
    } catch (error) {
      return undefined;
    }
  };

  const updateAuthData = async (data: SignInOutput | ConfirmSignInOutput) => {
    if (data?.isSignedIn || data?.nextStep?.signInStep === 'DONE') {
      // Update App state to hold the authenticated user
      const authUserPromise = getAuthenticatedUser();
      const sessionPromise = fetchAuthSession();
      const [authUser, session] = await Promise.all([
        authUserPromise,
        sessionPromise,
      ]).catch((error) => {
        throw error;
      });
      const name = session?.tokens?.idToken?.payload?.name as string;
      if (!authUser) {
        throw 'User invalid!';
      }
      setData({ ...authUser, name });
    }
  };

  const login = async (username: string, password: string) => {
    const response = await signIn({
      password,
      username,
    });

    await updateAuthData(response);

    return response;
  };

  const register = async (data: SignupUserCredentials) => {
    const signupInput: SignUpInput = {
      password: data?.password,
      username: data?.username,
      options: {
        userAttributes: {
          name: data?.name,
          'custom:isIndividual': `${data?.isIndividual}`,
        },
      },
    };

    if (!data?.isIndividual) {
      signupInput.options!.userAttributes['custom:companyName'] =
        data?.companyName;
    }

    const response = await signUp(signupInput);
    return response;
  };

  const confirmLogin = async (challengeResponse: string) => {
    const response = await confirmSignIn({
      challengeResponse,
    });

    await updateAuthData(response);

    return response;
  };
  const confirmRegister = async (
    username: string,
    confirmationCode: string,
  ) => {
    const response = await confirmSignUp({ confirmationCode, username });
    return response;
  };

  const logout = async () => {
    await signOut();
  };

  return {
    data,
    login,
    register,
    confirmLogin,
    confirmRegister,
    getAuthenticatedUser,
    logout,
  };
};

export default useAuth;
