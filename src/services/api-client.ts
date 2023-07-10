import axios from 'axios';

export interface FetchDataRespose<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'e9b78d4ae98044f79aabacfb5c7ff1a4',
  },
});
