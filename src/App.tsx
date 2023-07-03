import { Button, ButtonGroup, Show } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';
import { NavBar } from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { Genre } from './hooks/useFetchGenres';
import { useState } from 'react';

export const App = () => {
  //need to be passed onto the Game Grid to fetch the data based on selectedGenre
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  function handleSelection(genre: Genre) {
    console.log(genre);
    setSelectedGenre(genre);
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
            <GenreList onSelectedGenre={handleSelection} />
          </GridItem>
        </Show>
        <GridItem area='main'>
          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </div>
  );
};
