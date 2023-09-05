import { CustomerUpdate, type CustomerDraft } from '@commercetools/platform-sdk';
import { apiRoot } from './server';

export const signUp = async ({
  email, password,
}: CustomerDraft): Promise<string> => {
  let customerId = '';
  await apiRoot
    .customers()
    .post({
      body: { email, password },
    })
    .execute()
    .then(({ body }) => {
      customerId = body.customer.id;
    });

  return customerId;
};

export const setCustomerExtendInfo = async (
  customerId: string,
  customerInfo: CustomerExtendInfo,
): Promise<void> => {
  await apiRoot
    .customers()
    .withId({ ID: customerId })
    .post({
      body: {
        actions: [
          { action: 'setFirstName', firstName: customerInfo.firstName },
          { action: 'setLastName', lastName: customerInfo.lastName },
          { action: 'setDateOfBirth', dateOfBirth: customerInfo.dateOfBirth },
        ],

      },
    })
    .execute()
    .then(({ body }) => {
      console.log(JSON.stringify(body));
    });
};
