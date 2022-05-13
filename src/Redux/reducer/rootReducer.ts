import {combineReducers} from 'redux';
import currentWeatherReducer from './currentWeatherReducer';
import weatherReducer from './weatherReducer';

const rootReducer = combineReducers({
  weather: weatherReducer,
  currentWeather: currentWeatherReducer
});

export default rootReducer;
