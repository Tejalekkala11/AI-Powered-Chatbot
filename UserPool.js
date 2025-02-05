import { CognitoUserPool } from 'amazon-cognito-identity-js';
import awsConfig from './aws-config';

const poolData = {
    UserPoolId: awsConfig.userPoolId,
    ClientId: awsConfig.userPoolWebClientId,
};

export default new CognitoUserPool(poolData);

