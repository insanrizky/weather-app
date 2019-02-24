import {
  getCurrentWeatherByLocation,
  getWeatherHistoryByLocation,
  getWeatherForecastByLocation
} from '../../api/weather';
import { weatherTypes } from '../reducers/weather';
import { errorNotif } from '../../utils/notification';

export const getCurrentWeather = async (dispatch, city) => {
  try {
    const payload = await getCurrentWeatherByLocation(city);
    return dispatch({
      type: weatherTypes.CURRENT,
      payload
    })
  } catch (err) {
    errorNotif(err)
  }
}

export const getWeatherHistory = async (dispatch, { city, dt }) => {
  try {
    const payload = await getWeatherHistoryByLocation({ city, dt });
    return dispatch({
      type: weatherTypes.HISTORY,
      payload
    })
  } catch (err) {
    errorNotif(err)
  }
}

export const getWeatherForecast = async (dispatch, { city, days }) => {
  try {
    const payload = await getWeatherForecastByLocation({ city, days });
    return dispatch({
      type: weatherTypes.FORECAST,
      payload
    })
  } catch (err) {
    errorNotif(err)
  }
}