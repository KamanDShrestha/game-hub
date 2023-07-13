import { Grid, GridItem, Show, HStack } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import GameGrid from '../components/GameGrid';
import GameHeading from '../components/GameHeading';
import GenreList from '../components/GenreList';
import OrderBy from '../components/OrderBy';
import PlatformSelection from '../components/PlatformSelection';

const HomePage = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"main"`,
          lg: ` "aside main"`,
        }}
        templateColumns={{
          base: '1fr',
          lg: '200px 1fr',
        }}
      >
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
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
};

export default HomePage;
