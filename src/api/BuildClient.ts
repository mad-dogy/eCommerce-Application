import fetch from 'node-fetch';
import {
  ClientBuilder,

  type AuthMiddlewareOptions, // Required for auth
  type HttpMiddlewareOptions, // Required for sending HTTP requests
} from '@commercetools/sdk-client-v2';

export const oauthUri = 'https://auth.europe-west1.gcp.commercetools.com';
export const baseUri = 'https://api.europe-west1.gcp.commercetools.com';
export const credentials = {
  clientId: 'e-ROl5h-MODCbZN5QBeuD7sO',
  clientSecret: '9B82lQi_OA6NpLF8gL0OZBYvZBR3AyeX',
};

export const projectKey = 'supernatural';
const scopes = ['manage_project:supernatural'];

// Configure authMiddlewareOptions
const authMiddlewareOptions: AuthMiddlewareOptions = {
  host: oauthUri,
  projectKey,
  credentials: {
    clientId: credentials.clientId,
    clientSecret: credentials.clientSecret,
  },
  scopes,
  fetch,
};

// Configure httpMiddlewareOptions
const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: baseUri,
  fetch,
};

// Export the ClientBuilder
export const ctpClient = new ClientBuilder()
  .withProjectKey(projectKey)

  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .withLoggerMiddleware()
  .build();
