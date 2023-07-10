import { ProvidedContextType, GameContext } from '../contexts/GameProvider';
import { useContext } from 'react';
import useFetchGame from './useFetchGame';
import useFetchGenres from './useFetchGenres';
function useGenre() {
  const { gameQuery } = useContext(GameContext) as ProvidedContextType;
  const { data: genres } = useFetchGenres();

  return genres.results.find((genre) => genre.id === gameQuery.genreID);
}

export default useGenre;
