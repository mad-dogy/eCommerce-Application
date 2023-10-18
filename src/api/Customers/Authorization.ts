import { type CustomerDraft } from '@commercetools/platform-sdk';
import { type CustomerExtendInfo } from '../../entities/CustomerTypes/CustomerExtendInfo.type';
import { apiRoot } from '../server';
import { getCustomerById } from './GetCustomerInfoActions';

export interface SignUpProps extends CustomerDraft {
  email: string;
  password: string;
}
export type SignUpResponseType = string;

export const signUp = async ({
  email, password,
}: SignUpProps): Promise<SignUpResponseType> => {
  const customerId = await apiRoot
    .customers()
    .post({
      body: { email, password },
    })
    .execute()
    .then(({ body }) => body.customer.id);

  return customerId;
};

export const setCustomerExtendInfo = async (
  customerId: string,
  customerInfo: CustomerExtendInfo,
): Promise<void> => {
  const customer = await getCustomerById(customerId);
  const response = await apiRoot
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

  await apiRoot
    .customers()
    .withId({ ID: customerId })
    .post({
      body: {
        version: response.body.version,
        actions: [
          { action: 'addShippingAddressId', addressId: response.body.addresses[0].id },
          { action: 'addBillingAddressId', addressId: response.body.addresses[1].id },
        ],
      },
    })
    .execute()
    .then();
};
