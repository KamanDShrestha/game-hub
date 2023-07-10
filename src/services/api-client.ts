import axios, { AxiosRequestConfig } from 'axios';
import { GameQuery } from '../App';

export interface FetchDataRespose<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'e9b78d4ae98044f79aabacfb5c7ff1a4',
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  //arrow function is required for
  fetchData = (config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchDataRespose<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default APIClient;
