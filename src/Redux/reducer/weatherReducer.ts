import {faviouriteData, searchByCity} from '../../Utils/helper';
import * as Types from '../types';

const intialState = {
  data: [] as Array<any>,
  initialData: [] as Array<any>,
};

const WeatherReducer = (state = intialState, action: any) => {
  const {type, payload} = action;

  switch (type) {
    case Types.GET_WEATHER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case Types.GET_WEATHER_SUCCESS:
      return {
        ...state,
        data: payload,
        initialData: payload,
        loading: false,
      };
    case Types.GET_WEATHER_FAILED:
      return {
        ...state,
        data: [],
        initialData: [],
        error: payload,
        loading: false,
      };
    case Types.UPDATE_WEATHER_DATA:
      let weatherData = [...state.data];
      let index = weatherData.findIndex(item => item.id === payload);
      weatherData[index].isLike = !weatherData[index].isLike;
      weatherData.sort((a, b) => (a.isLike > b.isLike ? -1 : 1));
      return {
        ...state,
        data: [...weatherData],
      };
    case Types.SEARCH_DATA:
      return {
        ...state,
        data: searchByCity(state?.initialData, payload),
      };
    case Types.CLEAR_SEARCH_DATA:
      return {
        ...state,
        data: [...state?.initialData],
      };
    default:
      return state;
  }
};
export default WeatherReducer;
