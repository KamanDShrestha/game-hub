import { useQuery } from '@tanstack/react-query';
import APIClient, { axiosInstance } from '../services/api-client';
import { Game } from '../entities/Game';

const apiClient = new APIClient<Game>('/games');

function useFetchGameDetail(id: string) {
  const data = useQuery<Game, Error>({
    queryKey: ['gameDetails', id],
    queryFn: () => apiClient.fetchSingleData(id!),
  });
  return data;
}

export default useFetchGameDetail;
