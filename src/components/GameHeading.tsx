import { Heading } from '@chakra-ui/react';
import React from 'react';
import { GameQuery } from '../App';
import { useContext } from 'react';
import { GameContext, ProvidedContextType } from '../contexts/GameProvider';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = () => {
  const { gameQuery } = useContext(GameContext) as ProvidedContextType;
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
      {`${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`}
    </Heading>
  );
};

export default GameHeading;
