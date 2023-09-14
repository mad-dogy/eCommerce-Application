import { type Project } from '@commercetools/platform-sdk';
import { apiRoot } from './server';

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
