import { type Project, type CustomerDraft } from '@commercetools/platform-sdk';
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

export const getCustomerById = async (customerId: string): Promise<void> => {
  await apiRoot
    .customers()
    .withId({ ID: customerId })
    .get()
    .execute()
    .then(({ body }) => {
      console.log(JSON.stringify(body));
    });
};

export const setCustomerExtendInfo = async (
  customerId: string,
  customerInfo: CustomerExtendInfo,
): Promise<void> => {
  await getCustomerById(customerId);
  await apiRoot
    .customers()
    .withId({ ID: customerId })
    .post({
      body: {
        version: 1,
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

export const getProjectDetails = async (): Promise<Project> => {
  let projectDetails;
  await apiRoot
    .get()
    .execute()
    .then(({ body }) => {
      projectDetails = body;
    });
  return projectDetails;
};
