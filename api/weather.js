import { apiGet } from './global/config';

export const getWeatherByLocation = async (city = 'Jakarta') => {
    const data = await apiGet('/forecast.json', { q: city });
    return data.data;
}