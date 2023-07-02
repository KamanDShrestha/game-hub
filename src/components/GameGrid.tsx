import React from 'react';
import { useState, useEffect } from 'react';
import apiClient from '../services/api-client';
import { SimpleGrid, Text } from '@chakra-ui/react';

import useFetchGame from '../hooks/useFetchGame';
import Loader from './Loader';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';

const GameGrid = () => {
  const { games, error, isLoading } = useFetchGame();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding={10}>
        {isLoading &&
          skeletons.map((number) => (
            <GameCardContainer>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCardContainer>
            <GameCard game={game} key={game.id} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
