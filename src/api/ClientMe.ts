import { type MyCustomerSignin } from '@commercetools/platform-sdk';
import { apiRoot } from './server';

export const signIn = async ({ email, password }: MyCustomerSignin): Promise<void> => {
  await apiRoot
    .me()
    .login()
    .post({
      body: { email, password },
    })
    .execute()
    .then(({ body }) => {
      console.log(JSON.stringify(body));
    });
};
