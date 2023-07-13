import APIClient, { FetchDataRespose } from '../services/api-client';
import { useInfiniteQuery } from '@tanstack/react-query';
import ms from 'ms';
import useGameQuery from '../gameStore';
import { Game } from '../entities/Game';

const apiClient = new APIClient<Game>('/games');

function useFetchGame() {
  const { gameQuery } = useGameQuery();
  const fetchedGames = useInfiniteQuery<FetchDataRespose<Game>, Error>({
    //if gameQuery changes then the data would get refetched
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.fetchData({
        params: {
          genres: gameQuery?.genreID,
          platforms: gameQuery?.platformID,
          ordering: gameQuery?.ordering,
          search: gameQuery?.searchQuery,
          page: pageParam,
        },
      }),
    staleTime: ms('24h'),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
  return fetchedGames;
}

export default useFetchGame;
