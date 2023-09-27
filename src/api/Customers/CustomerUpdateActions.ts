import { Customer } from '@commercetools/platform-sdk';
import { apiRoot } from '../server';
import { getCustomerById } from './GetCustomerInfoActions';
import { CustomerUpdateInfo, PasswordUpdateInfo } from '../../entities/CustomerTypes/CustomerUpdateInfo.type';

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
          {
            action: 'changeAddress',
            addressId: customer.shippingAddressIds[0],
            address: {
              country: customerInfo.shippingCountry,
              city: customerInfo.shippingCity,
              streetName: customerInfo.shippingStreet,
              postalCode: customerInfo.shippingPostalCode,
            },
          },
          {
            action: 'changeAddress',
            addressId: customer.billingAddressIds[0],
            address: {
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

export const changeCustomerPassword = async (
  customer: Customer,
  passwordInfo: PasswordUpdateInfo,
): Promise<void> => {
  const customerId = customer.id;
  const customerVersion = customer.version;

  await apiRoot
    .customers()
    .password().post({
      body: {
        id: customerId,
        version: customerVersion,
        currentPassword: passwordInfo.currentPassword,
        newPassword: passwordInfo.newPassword,
      },
    })
    .execute()
    .then();
};
