import { CanceledError } from 'axios';
import { useState, useEffect } from 'react';
import apiClient, { FetchDataRespose } from '../services/api-client';
// import useFetchData, { FetchDataRespose } from './useFetchData';
import { Genre } from './useFetchGenres';

import { GameQuery } from '../App';
import { useQuery } from '@tanstack/react-query';
import { Platform } from './useFetchPlatforms';

//while fetching the data we are getting the object with id and name property, so we are providing the type to the variables
export interface Game {
  id: number | null;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating: number;
  rating_top: number;
}

function useFetchGame(gameQuery: GameQuery) {
  const fetchedGames = useQuery<FetchDataRespose<Game>, Error>({
    //if gameQuery changes then the data would get refetched
    queryKey: ['games', gameQuery],
    queryFn: () =>
      apiClient
        .get<FetchDataRespose<Game>>('/games', {
          params: {
            genres: gameQuery.genre?.id,
            platforms: gameQuery.platform?.id,
            ordering: gameQuery.ordering,
            search: gameQuery.searchQuery,
          },
        })
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
  });
  return fetchedGames;
}

export default useFetchGame;
