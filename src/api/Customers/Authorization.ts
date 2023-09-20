import { type Customer, type CustomerDraft } from '@commercetools/platform-sdk';
import { apiRoot } from '../server';
import { getCustomerById } from './GetCustomerInfoActions';
import { type CustomerExtendInfo } from '../types';

export const signUp = async ({
  email, password,
}: CustomerDraft): Promise<string> => {
  const customerId = await apiRoot
    .customers()
    .post({
      body: { email, password },
    })
    .execute()
    .then(({ body }) => body.customer.id);

  return customerId;
};

export let customerGlobalInfo: Customer;

export const setCustomerExtendInfo = async (
  customerId: string,
  customerInfo: CustomerExtendInfo,
): Promise<void> => {
  const customer = await getCustomerById(customerId);
  customerGlobalInfo = customer;
  await apiRoot
    .customers()
    .withId({ ID: customerId })
    .post({
      body: {
        version: customer.version,
        actions: [
          { action: 'setFirstName', firstName: customerInfo.firstName },
          { action: 'setLastName', lastName: customerInfo.lastName },
          { action: 'setDateOfBirth', dateOfBirth: customerInfo.dateOfBirth },
          {
            action: 'addAddress',
            address:
            {
              key: 'SHIPPING',
              country: customerInfo.shippingCountry,
              city: customerInfo.shippingCity,
              streetName: customerInfo.shippingStreet,
              postalCode: customerInfo.shippingPostalCode,
            },
          },
          {
            action: 'addAddress',
            address:
            {
              key: 'BILLING',
              country: customerInfo.billingCountry,
              city: customerInfo.billingCity,
              streetName: customerInfo.billingStreet,
              postalCode: customerInfo.billingPostalCode,
            },
          },
        ],
      },
    })
    .execute()
    .then();
};
