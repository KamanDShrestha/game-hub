import { CanceledError } from 'axios';
import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import useFetchData from './useFetchData';
export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

function useFetchGenres() {
  return useFetchData<Genre>('/genres');
}

export default useFetchGenres;
