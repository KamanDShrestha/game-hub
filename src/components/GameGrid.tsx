import React from 'react';
import { useState, useEffect } from 'react';
import apiClient from '../services/api-client';
import { SimpleGrid, Text } from '@chakra-ui/react';

import useFetchGame from '../hooks/useFetchGame';
import Loader from './Loader';
import GameCard from './GameCard';

const GameGrid = () => {
  const { games, error, isLoading } = useFetchGame();
  console.log(isLoading);
  return (
    <>
      {error && <Text>{error}</Text>}
      {isLoading ? (
        <Loader />
      ) : (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding={10}>
          {games.map((game) => (
            <GameCard game={game} key={game.id} />
          ))}
        </SimpleGrid>
      )}
    </>
  );
};

export default GameGrid;
