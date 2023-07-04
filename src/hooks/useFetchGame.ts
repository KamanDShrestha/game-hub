import { CanceledError } from 'axios';
import { useState, useEffect } from 'react';
import apiClient from '../services/api-client';
import useFetchData from './useFetchData';
import { Genre } from './useFetchGenres';
import { Platform } from './useFetchPlatforms';
import { GameQuery } from '../App';

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
  //making the get request flexible through the use of axios Request Config object  -- request config
  return useFetchData<Game>(
    '/games',
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.ordering,
        search: gameQuery.searchQuery,
      },
    },
    [gameQuery]
  );
}

export default useFetchGame;
