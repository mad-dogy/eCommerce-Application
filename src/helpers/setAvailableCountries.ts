import { getProjectDetails } from '../api/Project';
import { type SelectItem } from '../components/UI/Select/Select';

export const getAvailableCountries = async (setCountries: any): Promise<void> => {
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
      case 'RU':
        availableCountries.push({ value: element, name: 'Russia (RU)' });
        break;
      case 'FR':
        availableCountries.push({ value: element, name: 'France (FR)' });
        break;
      case 'PL':
        availableCountries.push({ value: element, name: 'Poland (PL)' });
        break;
      default: break;
    }
  });
  setCountries(availableCountries);
};
