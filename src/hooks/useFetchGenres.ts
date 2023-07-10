import apiClient from '../services/api-client';
import genres from '../data/genres';
import { useQuery } from '@tanstack/react-query';

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

function useFetchGenres() {
  return useQuery<Genre[], Error>({
    queryKey: ['genres'],
    queryFn: () => apiClient.get('/genres').then((res) => res.data.results),
    staleTime: 24 * 60 * 60 * 1000, //24hr
    initialData: genres,
  });
}

export default useFetchGenres;
