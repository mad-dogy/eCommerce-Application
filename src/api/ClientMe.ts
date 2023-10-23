import { type MyCustomerSignin } from '@commercetools/platform-sdk';

import { apiRoot } from './server';

export interface SignInProps extends MyCustomerSignin {
  readonly email: string;
  readonly password: string;
}
export type SignInResponseType = string;

export const signIn = async ({ email, password }: SignInProps): Promise<SignInResponseType> => {
  const customerId = await apiRoot
    .me()
    .login()
    .post({
      body: { email, password }
    })
    .execute()
    .then(({ body }) => body.customer.id);

  return customerId;
};
