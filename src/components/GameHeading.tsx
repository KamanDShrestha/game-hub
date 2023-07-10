import { Heading } from '@chakra-ui/react';
import React from 'react';
import { GameQuery } from '../App';
import { useContext } from 'react';
import { GameContext, ProvidedContextType } from '../contexts/GameProvider';
import useFetchGenres from '../hooks/useFetchGenres';
import useFetchPlatform from '../hooks/useFetchPlatforms';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = () => {
  const { gameQuery } = useContext(GameContext) as ProvidedContextType;
  const { data: genres } = useFetchGenres();
  const { data: platforms } = useFetchPlatform();
  const selectedGenre = genres.results.filter(
    (genre) => genre.id === gameQuery.genreID
  )[0]?.name;
  // const selectedPlatform = platforms.results.filter(
  //   (platform) => platform.id === gameQuery.platformID
  // )[0]?.name;

  const selectedPlatform = platforms.results.find(
    (platform) => platform.id === gameQuery.platformID
  );

  if (gameQuery?.searchQuery) {
    return (
      <Heading
        as={'h1'}
        size={'2xl'}
      >{`Search results for '${gameQuery.searchQuery}'`}</Heading>
    );
  }
  return (
    <Heading as={'h1'} size={'2xl'}>
      {`${selectedGenre || ''} ${selectedPlatform?.name || ''} Games`}
    </Heading>
  );
};

export default GameHeading;
