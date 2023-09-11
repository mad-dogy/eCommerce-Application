import { type MyCustomerSignin } from '@commercetools/platform-sdk';
import { apiRoot } from './server';

export const signIn = async ({ email, password }: MyCustomerSignin): Promise<string> => {
  let customerId = '';
  await apiRoot
    .me()
    .login()
    .post({
      body: { email, password },
    })
    .execute()
    .then(({ body }) => {
      customerId = body.customer.id;
    });

  return customerId;
};
