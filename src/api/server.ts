import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import { ClientBuilder } from '@commercetools/sdk-client-v2';

export const oauthUri = 'https://auth.europe-west1.gcp.commercetools.com';
export const baseUri = 'https://api.europe-west1.gcp.commercetools.com';
export const credentials = {
  clientId: 'e-ROl5h-MODCbZN5QBeuD7sO',
  clientSecret: '9B82lQi_OA6NpLF8gL0OZBYvZBR3AyeX',
};

export const projectKey = 'supernatural';
export const scopes = ['manage_project:supernatural'];

const defaultClient = new ClientBuilder()
  .defaultClient(baseUri, credentials, oauthUri, projectKey)
  .build();
export const apiRoot = createApiBuilderFromCtpClient(defaultClient).withProjectKey({
  projectKey,
});
