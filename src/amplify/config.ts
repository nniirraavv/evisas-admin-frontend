import { ResourcesConfig } from 'aws-amplify';
import { AmplifyOutputs, LegacyConfig } from 'aws-amplify/adapter-core';

const AmplifyConfig: ResourcesConfig | LegacyConfig | AmplifyOutputs = {
  Auth: {
    Cognito: {
      userPoolId: 'ap-south-1_djxFJiqw6',
      userPoolClientId: '1nugu12f74ec435ir4p1odc7qm',
    },
  },
  auth: {
    aws_region: 'ap-south-1',
    user_pool_id: 'ap-south-1_djxFJiqw6',
    user_pool_client_id: '1nugu12f74ec435ir4p1odc7qm',
  },
};
export default AmplifyConfig;
