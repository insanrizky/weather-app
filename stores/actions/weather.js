import { weatherTypes } from '../reducers/weather';

export const getWeatherByLocation = dispatch => {
  return dispatch({
    type: weatherTypes.TICK,
    payload: { name: 'test' }
  })
}