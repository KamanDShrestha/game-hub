// import useFetchData, { FetchDataRespose } from './useFetchData';
import platforms from '../data/platforms';
import APIClient, { FetchDataRespose } from '../services/api-client';
import { useQuery } from '@tanstack/react-query';
import { Platform } from './useFetchGame';
//just to fetch the platform values

const apiClient = new APIClient<Platform>('/platforms');

function useFetchPlatform() {
  const fetchedPlatforms = useQuery<FetchDataRespose<Platform>, Error>({
    queryKey: ['platforms'],
    queryFn: () => apiClient.fetchData(),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platforms.length, results: platforms },
  });
  return fetchedPlatforms;
}

export default useFetchPlatform;
