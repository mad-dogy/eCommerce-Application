import { type MyCustomerSignin } from '@commercetools/platform-sdk';
import { apiRoot } from './server';

interface A {
  readonly email: string;
  readonly password: string;
}

type B = string

export const signIn = async ({ email, password }: A): Promise<B> => {
  const customerId = await apiRoot
    .me()
    .login()
    .post({
      body: { email, password },
    })
    .execute()
    .then(({ body }) => body.customer.id);

  return customerId;
};
