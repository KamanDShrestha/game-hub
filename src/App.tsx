import { Button, ButtonGroup, HStack, Show, Box } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';
import { NavBar } from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { Genre } from './hooks/useFetchGame';
import { useContext, useState } from 'react';
import PlatformSelection from './components/PlatformSelection';
import { Platform } from './hooks/useFetchGame';
import OrderBy from './components/OrderBy';
import GameHeading from './components/GameHeading';
import {
  GameContext,
  GameProvider,
  ProvidedContextType,
} from './contexts/GameProvider';

// import { GameProvider, useGameContext } from './contexts/GameContextProvider';

export interface GameQuery {
  genreID: number | undefined;
  platformID: number | undefined;
  ordering: string;
  searchQuery: string;
}

export const App = () => {
  const { gameQuery, handleGame } = useContext(
    GameContext
  ) as ProvidedContextType;

  //need to be passed onto the Game Grid to fetch the data based on selectedGenre

  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
  //   null
  // );

  return (
    <GameProvider>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: '1fr',
          lg: '200px 1fr',
        }}
      >
        <GridItem area='nav'>
          <NavBar />
        </GridItem>
        <Show above='lg'>
          <GridItem area='aside' paddingX={4}>
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area='main' paddingX={4}>
          <Box paddingX={5}>
            <GameHeading />
            <HStack spacing={4} marginTop={5}>
              <PlatformSelection />
              <OrderBy />
            </HStack>
          </Box>
          <GameGrid
          // selectedGenre={selectedGenre}
          // selectedPlatform={selectedPlatform}
          />
        </GridItem>
      </Grid>
    </GameProvider>
  );
};
