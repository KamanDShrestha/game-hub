import React from 'react';
import { Button, ButtonGroup, Show } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';
import { NavBar } from './components/NavBar';
export const App = () => {
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area='nav'>
          <NavBar />
        </GridItem>
        <Show above='lg'>
          <GridItem area='aside' bg='blue'>
            Aside
          </GridItem>
        </Show>
        <GridItem area='main' bg='red'>
          Main
        </GridItem>
      </Grid>
    </div>
  );
};
