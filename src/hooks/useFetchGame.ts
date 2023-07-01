import { CanceledError } from 'axios';
import { useState, useEffect } from 'react';
import apiClient from '../services/api-client';

//while fetching the data we are getting the object with id and name property, so we are providing the type to the variables
export interface Game {
  id: number;
  name: string;
  background_image: string;
}

interface FetchGamesResponse {
  count: number;
  //we are getting the array of the objects with Game like property/schema
  results: Game[];
}

function useFetchGame() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  //useEffect to fetch the games, sideEffects -- communicating with the external entity
  console.log(games);
  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    //prettier-ignore
    apiClient.get<FetchGamesResponse>('/games', {signal: controller.signal})
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if(err instanceof CanceledError) return;
        setError(err.message)});
    setIsLoading(false);
    return () => controller.abort();
  }, []);
  return { games, error, isLoading };
}

export default useFetchGame;
