import React from 'react';
import { useState, useEffect } from 'react';
import apiClient from '../services/api-client';
import { Text } from '@chakra-ui/react';

import useFetchGame from '../hooks/useFetchGame';
import Loader from './Loader';

//while fetching the data we are getting the object with id and name property, so we are providing the type to the variables
interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  //we are getting the array of the objects with Game like property/schema
  results: Game[];
}

const GameGrid = () => {
  const { games, error, isLoading } = useFetchGame();
  console.log(isLoading);
  return (
    <>
      {error && <Text>{error}</Text>}
      {isLoading ? (
        <Loader />
      ) : (
        <ul>
          {games.map((game) => (
            <li key={game.id}>{game.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default GameGrid;
