import { Heading } from '@chakra-ui/react';
import React from 'react';
import { GameQuery } from '../App';
import { useContext } from 'react';
import { GameContext, ProvidedContextType } from '../contexts/GameProvider';
import useFetchGenres from '../hooks/useFetchGenres';
import useFetchPlatform from '../hooks/useFetchPlatforms';
import usePlatform from '../hooks/usePlatform';
import useGenre from '../hooks/useGenre';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = () => {
  const { gameQuery } = useContext(GameContext) as ProvidedContextType;
  const { data: genres } = useFetchGenres();
  const { data: platforms } = useFetchPlatform();
  const selectedGenre = useGenre();
  const selectedPlatform = usePlatform();

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
      {`${selectedGenre?.name || ''} ${selectedPlatform?.name || ''} Games`}
    </Heading>
  );
};

export default GameHeading;
