import { useQuery } from '@tanstack/react-query';
import Trailer from '../entities/Trailer';
import APIClient, { FetchDataRespose } from '../services/api-client';

const apiClient = new APIClient<Trailer>('/games');

function useFetchTrailer(slug: string) {
  return useQuery<FetchDataRespose<Trailer>, Error>({
    queryKey: ['trailer', slug],
    queryFn: () => apiClient.fetchTrailer(slug),
  });
}
export default useFetchTrailer;
