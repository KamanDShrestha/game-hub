import { Heading } from '@chakra-ui/react';
import React from 'react';
import { GameQuery } from '../App';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
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
