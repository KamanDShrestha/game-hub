import APIClient, { FetchDataRespose } from '../services/api-client';
import genres from '../data/genres';
import { useQuery } from '@tanstack/react-query';
import { Genre } from './useFetchGame';
import ms from 'ms';
const apiClient = new APIClient<Genre>('/genres');

function useFetchGenres() {
  return useQuery<FetchDataRespose<Genre>, Error>({
    queryKey: ['genres'],
    queryFn: () => apiClient.fetchData(),
    staleTime: ms('24h'), //24hr
    initialData: { count: genres.length, results: genres },
  });
}

export default useFetchGenres;
