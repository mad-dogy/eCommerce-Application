import { getProjectDetails } from '../api/Customers';
import { type SelectItem } from '../components/UI/Select/Select';

export const getAvailableCountries = async (): Promise<SelectItem[]> => {
  const projectDetails = await getProjectDetails();
  const availableCountriesFromServer = projectDetails.countries;
  const availableCountries: SelectItem[] = [];
  availableCountriesFromServer.forEach(element => {
    switch (element) {
      case 'US':
        availableCountries.push({ value: element, name: 'United States (US)' });
        break;
      case 'DE':
        availableCountries.push({ value: element, name: 'Germany (DE)' });
        break;
      case 'ES':
        availableCountries.push({ value: element, name: 'Spain (ES)' });
        break;
      case 'AU':
        availableCountries.push({ value: element, name: 'Australia (AU)' });
        break;
      default: break;
    }
  });
  return availableCountries;
};
