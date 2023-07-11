import useFetchGenres from './useFetchGenres';
import useGameQuery from '../gameStore';
function useGenre() {
  const genreID = useGameQuery((store) => store.gameQuery.genreID);
  const { data: genres } = useFetchGenres();

  return genres.results.find((genre) => genre.id === genreID);
}

export default useGenre;
