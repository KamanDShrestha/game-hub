import { useQuery } from '@tanstack/react-query';
import APIClient, { FetchDataRespose } from '../services/api-client';
import { Screenshots } from '../entities/Screenshots';

function useFetchScreenshots(slug: string) {
  const apiClient = new APIClient<Screenshots>(`/games/${slug}/screenshots`);
  return useQuery<FetchDataRespose<Screenshots>, Error>({
    queryKey: ['screenshots', slug],
    queryFn: () => apiClient.fetchData(),
  });
}

export default useFetchScreenshots;
