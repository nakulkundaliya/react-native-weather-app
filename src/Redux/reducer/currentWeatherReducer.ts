import * as Types from '../types';

const intialState = {
  data: [],
};

const currentWeatherReducer = (state = intialState, action: any) => {
  const {type, payload} = action;
  switch (type) {
    case Types.GET_CURRENT_WEATHER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case Types.GET_CURRENT_WEATHER_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
      };
    case Types.GET_CURRENT_WEATHER_FAILED:
      return {
        ...state,
        data: [],
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default currentWeatherReducer;
