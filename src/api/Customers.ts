import { type CustomerDraft } from '@commercetools/platform-sdk';
import { apiRoot } from './server';

export const signUp = async ({
  email, password,
}: CustomerDraft): Promise<void> => {
  await apiRoot
    .customers()
    .post({
      body: { email, password },
    })
    .execute()
    .then(({ body }) => {
      console.log(JSON.stringify(body));
    });
};

/* export const setCustomerFirstName = () => {

} */
