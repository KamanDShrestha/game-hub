import { CanceledError } from 'axios';
import { useState, useEffect } from 'react';
import apiClient from '../services/api-client';
import useFetchData from './useFetchData';

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

function useFetchGame() {
  return useFetchData<Game>('/games');
}

export default useFetchGame;
