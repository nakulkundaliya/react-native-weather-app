import axios, { AxiosRequestConfig } from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const ApiRequest = async (config: AxiosRequestConfig) => {
  const newConfig = {
    baseURL: BASE_URL,
    ...config
  };
  const res: AxiosRequestConfig = await axios(newConfig);
  return res;
};
