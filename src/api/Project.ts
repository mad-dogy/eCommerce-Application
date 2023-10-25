import { type Project } from '@commercetools/platform-sdk';

import { apiRoot } from './server';

export const getProjectDetails = async (): Promise<Project> => {
  const projectDetails = await apiRoot
    .get()
    .execute()
    .then(({ body }) => body);
  return projectDetails;
};
