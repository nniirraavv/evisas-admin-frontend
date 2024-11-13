// Runtime Configuration

import { AxiosError, RequestConfig, RunTimeLayoutConfig } from '@umijs/max';
import { notification } from 'antd';
import { signOut } from 'aws-amplify/auth';
import Logo from './assets/company-logo.png';
import UserAvatar from './components/business/UserAvatar/UserAvatar';
import { FILE_UPLOAD_URL, UN_AUTHORIZED_STATUS_CODE } from './constants';
import { getUserToken } from './lib/authUtils';
import { logoutUser } from './lib/storageUtils';
import { ApiError } from './types';

// Global initialization data configuration, used for Layout user information and permission initialization
// For more information, see the documentation: https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{
  name: string;
}> {
  return { name: 'Evisas' };
}

export const request: RequestConfig<AxiosError<ApiError>> = {
  timeout: 10000,
  baseURL: process.env.UMI_APP_API_BASE_URL,
  // other axios options you want
  errorConfig: {
    errorHandler(error: any) {
      notification.error({
        message:
          error?.response?.data?.error?.message ||
          error?.message ||
          'Internal Server Error',
      });
      // @ts-ignore
      if (error?.response?.status === UN_AUTHORIZED_STATUS_CODE) {
        // Clear user token from local storage
        logoutUser();
        // Logout from the aws amplify state
        signOut();
      }
    },
  },
  requestInterceptors: [
    async (config: any) => {
      // Intercept request configurations for adding authorization token.
      const headers = config?.headers;
      if ((config?.url as string)?.indexOf(FILE_UPLOAD_URL) > -1) {
        // Do not add an Authorization token when uploading to S3
        return config;
      }

      // Get amplify user auth token
      const token = await getUserToken();

      if (!token) {
        // Clear user token from local storage
        logoutUser();
        throw Error('Invalid User!');
      }

      return {
        ...config,
        headers: { ...headers, Authorization: `Bearer ${token}` },
      };
    },
  ],
};

export const layout: RunTimeLayoutConfig = () => {
  return {
    layout: 'top',
    logo: Logo,
    pageTitleRender: false,
    title: false,
    avatarProps: {
      render: () => {
        return <UserAvatar />;
      },
      size: 'small',
      className: 'bg-primary',
    },
    menu: {
      collapsedShowGroupTitle: true,
    },
    token: {
      header: {
        heightLayoutHeader: 75,
        colorTextMenuSelected: '#5C97F2',
      },
    },
  };
};
