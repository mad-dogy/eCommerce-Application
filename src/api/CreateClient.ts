/* eslint-disable @typescript-eslint/promise-function-async */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  createApiBuilderFromCtpClient,
} from '@commercetools/platform-sdk';
import {
  ClientBuilder,
} from '@commercetools/sdk-client-v2';
import {
  baseUri, credentials, oauthUri, projectKey,
} from './BuildClient';

const defaultClient = new ClientBuilder()
  .defaultClient(baseUri, credentials, oauthUri, projectKey)
  .build();
const apiRoot = createApiBuilderFromCtpClient(defaultClient).withProjectKey({
  projectKey,
});

// Example call to return Project information
// This code has the same effect as sending a GET request to the commercetools
// Composable Commerce API without any endpoints.
const getProject = () => apiRoot
  .get()
  .execute();

// Retrieve Project information and output the result to the log
getProject()
  .then(console.log)
  .catch(console.error);

export const getEndPoint = () => apiRoot
  .categories()
  .get()
  .execute()
  .then(({ body }) => {
    console.log(JSON.stringify(body));
  })
  .catch(console.error);

// Returns the Project details
export function getProjectDetails() {
  void apiRoot
    .get()
    .execute()
    .then(({ body }) => {
      window.document.getElementById('4').innerHTML = JSON.stringify(body);
    });
}
