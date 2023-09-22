import { CustomerUpdateInfo } from '../../entities/CustomerTypes/CustomerExtendInfo.type';
import { apiRoot } from '../server';
import { getCustomerById } from './GetCustomerInfoActions';

export const updateCustomerInfo = async (
  customerId: string,
  customerInfo: CustomerUpdateInfo,
): Promise<void> => {
  console.log(customerInfo);
  const customer = await getCustomerById(customerId);
  await apiRoot
    .customers()
    .withId({ ID: customerId })
    .post({
      body: {
        version: customer.version,
        actions: [
          { action: 'setFirstName', firstName: customerInfo.firstName },
          { action: 'setLastName', lastName: customerInfo.lastName },
          /* { action: 'setDateOfBirth', dateOfBirth: customerInfo.dateOfBirth }, */
          { action: 'changeEmail', email: customerInfo.email },
          /* { action: 'changeAddress', email: customerInfo.email }, */

          /* {
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
          }, */
        ],
      },
    })
    .execute()
    .then();
};
