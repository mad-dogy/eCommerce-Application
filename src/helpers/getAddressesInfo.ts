import { type Address, type Customer } from '@commercetools/platform-sdk';

export const selectShippingAddressInfo = (customer: Customer): Address => {
  const addressId = customer.shippingAddressIds[0];
  const addressInfo: Address = customer.addresses.filter((item) => item.id === addressId)[0];
  return addressInfo;
};

export const selectBillingAddressInfo = (customer: Customer): Address => {
  const addressId = customer.billingAddressIds[0];
  const addressInfo: Address = customer.addresses.filter((item) => item.id === addressId)[0];
  return addressInfo;
};
