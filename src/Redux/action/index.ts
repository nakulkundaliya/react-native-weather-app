import { AxiosRequestConfig } from 'axios';
import { Dispatch } from 'redux';
import { WeatherDataProps } from '../../Interfaces';
import { ApiRequest } from '../../services/apiConfig';
import * as Type from '../types';

const BASE_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/group?';
const BASE_WEATHER_CURRENT_URL =
  'https://api.openweathermap.org/data/2.5/weather?';
const WEATHER_API_KEY = '5d16ae9926f7549bbef4a6f5bbde18da';

export const getWeatherData = (citiesIds: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: Type.GET_WEATHER_LOADING });
    const config: AxiosRequestConfig = {
      url: `${BASE_WEATHER_URL}id=${[citiesIds]}&appid=${WEATHER_API_KEY}`,
      method: 'GET'
    };
    try {
      const res = await ApiRequest(config);
      const newArr = res?.data?.list.map((item: WeatherDataProps) => {
        return { ...item, isLike: false };
      });
      return dispatch({
        type: Type.GET_WEATHER_SUCCESS,
        payload: newArr
      });
    } catch (err) {
      return dispatch({
        type: Type.GET_WEATHER_FAILED,
        payload: 'Something went wrong'
      });
    }
  };
};

export const getCurrentWeatherData = (lat: number, long: number) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: Type.GET_CURRENT_WEATHER_LOADING });
    const config: AxiosRequestConfig = {
      url: `${BASE_WEATHER_CURRENT_URL}lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}`,
      method: 'GET'
    };
    try {
      const res = await ApiRequest(config);
      return dispatch({
        type: Type.GET_CURRENT_WEATHER_SUCCESS,
        payload: res.data
      });
    } catch (err) {
      console.log('error of data', err);
      return dispatch({
        type: Type.GET_CURRENT_WEATHER_FAILED,
        payload: 'Something went wrong'
      });
    }
  };
};

export const updateWeatherData = (id: number) => ({
  type: Type.UPDATE_WEATHER_DATA,
  payload: id
});

export const searchWeatherData = (data: string) => ({
  type: Type.SEARCH_DATA,
  payload: data
});

export const clearSearch = () => ({
  type: Type.CLEAR_SEARCH_DATA
});
