import axios, { AxiosRequestConfig } from 'axios';

export interface FetchDataRespose<T> {
  count: number;
  results: T[];
  next?: string | null;
  previous?: string | null;
}

export const axiosInstance = axios.create({
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

  fetchSingleData = (id: string) => {
    return axiosInstance
      .get<T>(`${this.endpoint}/${id}`)
      .then((res) => res.data);
  };

  fetchTrailer = (id: string) => {
    return axiosInstance
      .get<FetchDataRespose<T>>(`${this.endpoint}/${id}/movies`)
      .then((res) => res.data);
  };
}

export default APIClient;
