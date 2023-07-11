import { Heading } from '@chakra-ui/react';
import React from 'react';

import { useContext } from 'react';

import useFetchGenres from '../hooks/useFetchGenres';
import useFetchPlatform from '../hooks/useFetchPlatforms';
import usePlatform from '../hooks/usePlatform';
import useGenre from '../hooks/useGenre';
import useGameQuery from '../gameStore';

const GameHeading = () => {
  const selectedGenre = useGenre();
  const selectedPlatform = usePlatform();
  const searchQuery = useGameQuery((store) => store.gameQuery.searchQuery);
  if (searchQuery) {
    return (
      <Heading
        as={'h1'}
        size={'2xl'}
      >{`Search results for '${searchQuery}'`}</Heading>
    );
  }
  return (
    <Heading as={'h1'} size={'2xl'}>
      {`${selectedGenre?.name || ''} ${selectedPlatform?.name || ''} Games`}
    </Heading>
  );
};

export default GameHeading;
