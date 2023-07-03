import { Button, ButtonGroup, HStack, Show } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';
import { NavBar } from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { Genre } from './hooks/useFetchGenres';
import { useState } from 'react';
import PlatformSelection from './components/PlatformSelection';
import { Platform } from './hooks/useFetchPlatforms';
import OrderBy from './components/OrderBy';
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  ordering: string;
}

export const App = () => {
  //need to be passed onto the Game Grid to fetch the data based on selectedGenre

  const [gameQuery, setGameQuery] = useState({} as GameQuery);

  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
  //   null
  // );

  function handleSelection(genre: Genre) {
    console.log(genre);
    setGameQuery({ ...gameQuery, genre });
  }
  return (
    <div>
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
            <GenreList
              onSelectedGenre={handleSelection}
              selectedGenre={gameQuery.genre}
            />
          </GridItem>
        </Show>
        <GridItem area='main' paddingX={4}>
          <HStack paddingX={5} spacing={4}>
            <PlatformSelection
              onSelectedPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
              selectedPlatform={gameQuery.platform}
            />
            <OrderBy
              onSelectedOrdering={(ordering) =>
                setGameQuery({ ...gameQuery, ordering })
              }
              selectedOrdering={gameQuery.ordering}
            />
          </HStack>
          <GameGrid
            // selectedGenre={selectedGenre}
            // selectedPlatform={selectedPlatform}
            gameQuery={gameQuery}
          />
        </GridItem>
      </Grid>
    </div>
  );
};
