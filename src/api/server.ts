import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import { ClientBuilder } from '@commercetools/sdk-client-v2';

export const oauthUri = 'https://auth.europe-west1.gcp.commercetools.com';
export const baseUri = 'https://api.europe-west1.gcp.commercetools.com';
export const credentials = {
  clientId: 'ZKK1xBcdiBuKZxloexL6sSc_',
  clientSecret: 'bcMARVnuPAL-8cPgJf6V9TwMEH_npCbj'
};

export const projectKey = 'supernatural1';
export const scopes = ['manage_project:supernatural1'];

const defaultClient = new ClientBuilder()
  .defaultClient(baseUri, credentials, oauthUri, projectKey)
  .build();
export const apiRoot = createApiBuilderFromCtpClient(defaultClient).withProjectKey({
  projectKey
});
