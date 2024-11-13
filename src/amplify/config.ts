import { ResourcesConfig } from 'aws-amplify';
import { AmplifyOutputs, LegacyConfig } from 'aws-amplify/adapter-core';

const AmplifyConfig: ResourcesConfig | LegacyConfig | AmplifyOutputs = {
  Auth: {
    Cognito: {
      userPoolId: 'ap-south-1_t3jdf9Cxk',
      userPoolClientId: '9f7m4q69hsb40umktbvabh5sg',
    },
  },
  auth: {
    aws_region: 'ap-south-1',
    user_pool_id: 'ap-south-1_t3jdf9Cxk',
    user_pool_client_id: '9f7m4q69hsb40umktbvabh5sg',
    // authentication_flow_type: 'CUSTOM_AUTH',
  },
};
export default AmplifyConfig;
