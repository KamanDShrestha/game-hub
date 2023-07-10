import { CanceledError } from 'axios';
import { useState, useEffect } from 'react';
import APIClient, { FetchDataRespose } from '../services/api-client';
import { useInfiniteQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';
import { useQuery } from '@tanstack/react-query';
import ms from 'ms';

//while fetching the data we are getting the object with id and name property, so we are providing the type to the variables

export interface Platform {
  id: number;
  name: string;
  slug: string;
  games_count: number;
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

export interface Game {
  id: number | null;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating: number;
  rating_top: number;
}

const apiClient = new APIClient<Game>('/games');

function useFetchGame(gameQuery: GameQuery) {
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
