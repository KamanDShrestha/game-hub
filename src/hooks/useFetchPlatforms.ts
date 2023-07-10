// import useFetchData, { FetchDataRespose } from './useFetchData';
import platforms from '../data/platforms';
import apiClient, { FetchDataRespose } from '../services/api-client';
import { useQuery } from '@tanstack/react-query';
import { Platform } from './useFetchGame';
//just to fetch the platform values
function useFetchPlatform() {
  const fetchedPlatforms = useQuery<FetchDataRespose<Platform>, Error>({
    queryKey: ['platforms'],
    queryFn: () =>
      apiClient
        .get<FetchDataRespose<Platform>>('/platforms')
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platforms.length, results: platforms },
  });
  return fetchedPlatforms;
}

export default useFetchPlatform;
