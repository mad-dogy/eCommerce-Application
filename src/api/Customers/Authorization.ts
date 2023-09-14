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
              key: 'example1',
              title: 'My Address',
              salutation: 'Mr.',
              firstName: 'Example',
              lastName: 'Person',
              streetName: 'Example Street',
              streetNumber: '4711',
              additionalStreetInfo: 'Backhouse',
              postalCode: '80933',
              city: 'Exemplary City',
              region: 'Exemplary Region',
              state: 'Exemplary State',
              country: 'DE',
              company: 'My Company Name',
              department: 'Sales',
              building: 'Hightower 1',
              apartment: '247',
              pOBox: '2471',
              phone: '+49 89 12345678',
              mobile: '+49 171 2345678',
              email: 'email@example.com',
              fax: '+49 89 12345679',
              additionalAddressInfo: 'no additional Info',
              externalId: 'Information not needed',
              id: 'billing',
              /* country: customerInfo.shippingCountry,
              city: customerInfo.shippingCity,
              streetName: customerInfo.shippingStreet,
              postalCode: customerInfo.shippingPostalCode, */
            },
          },
        ],
      },
    })
    .execute()
    .then();
};
