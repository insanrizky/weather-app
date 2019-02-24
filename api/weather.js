import { apiGet } from './global/config';
import moment from 'moment';

export const getCurrentWeatherByLocation = async (city = 'Jakarta') => {
    const data = await apiGet('/current.json', { q: city });
    return data.data;
}

export const getWeatherHistoryByLocation = async ({
    city,
    dt
}) => {
    const data = await apiGet('/history.json', {
        q: city || 'Jakarta',
        dt: dt || moment().format('YYYY-MM-DD')
    });
    return data.data;
}

export const getWeatherForecastByLocation = async ({
    city,
    days
}) => {
    const data = await apiGet('/forecast.json', {
        q: city || 'Jakarta',
        days: days || 5
    });
    return data.data;
}