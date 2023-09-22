import { Customer } from '@commercetools/platform-sdk';
import { CustomerUpdateInfo } from '../../entities/CustomerTypes/CustomerExtendInfo.type';
import { apiRoot } from '../server';
import { getCustomerById } from './GetCustomerInfoActions';

export const updateCustomerInfo = async (
  customerId: string,
  customerInfo: CustomerUpdateInfo,
): Promise<void> => {
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
          { action: 'setDateOfBirth', dateOfBirth: customerInfo.dateOfBirth },
          { action: 'changeEmail', email: customerInfo.email },
          /* { action: 'changeAddress', email: customerInfo.email }, */

        ],
      },
    })
    .execute()
    .then();
};

export const deleteCustomer = async (customer: Customer): Promise<void> => {
  const customerId = customer.id;
  const customerVersion = customer.version;

  await apiRoot
    .customers()
    .withId({ ID: customerId })
    .delete({ queryArgs: { version: customerVersion } })
    .execute()
    .then();
};
