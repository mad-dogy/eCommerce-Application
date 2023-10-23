import { type Customer } from '@commercetools/platform-sdk';

import { apiRoot } from '../server';

export const getCustomerById = async (customerId: string): Promise<Customer> => {
  const customer = await apiRoot
    .customers()
    .withId({ ID: customerId })
    .get()
    .execute()
    .then(({ body }) => body);
  return customer;
};
