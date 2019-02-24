import { getWeatherByLocation } from '../../api/weather';
import { weatherTypes } from '../reducers/weather';
import { errorNotif, loader } from '../../utils/notification';
import swal from 'sweetalert';

export const getCurrentWeather = async (dispatch, city = 'Jakarta') => {
  loader();
  try {
    const data = await getWeatherByLocation(city);
    swal.close();
    return dispatch({
      type: weatherTypes.CURRENT,
      payload: data.data
    })
  } catch (err) {
    errorNotif(err)
  }
}