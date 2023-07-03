import { CanceledError } from 'axios';
import { useState, useEffect } from 'react';
import apiClient from '../services/api-client';
import useFetchData from './useFetchData';
import { Genre } from './useFetchGenres';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

//while fetching the data we are getting the object with id and name property, so we are providing the type to the variables
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

function useFetchGame(selectedGenre: Genre | null) {
  //making the get request flexible through the use of axios Request Config object  -- request config
  return useFetchData<Game>(
    '/games',
    {
      params: { genres: selectedGenre?.id },
    },
    [selectedGenre?.id]
  );
}

export default useFetchGame;
