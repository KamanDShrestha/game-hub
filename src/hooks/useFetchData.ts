import { AxiosRequestConfig, CanceledError } from 'axios';
import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { GameQuery } from '../App';

interface FetchDataRespose<T> {
  count: number;
  results: T[];
}

//generic data type for T
const useFetchData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: GameQuery[] | []
) => {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  console.log(data);
  useEffect(
    () => {
      const controller = new AbortController();
      setIsLoading(true);
      apiClient
        .get<FetchDataRespose<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setData(res.data.results);
          setIsLoading(false);
        })
        .catch((error) => {
          if (error instanceof CanceledError) return;
          setError(error.message);
          setIsLoading(false);
        });
      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return { data, isLoading, error };
};

export default useFetchData;
