import React from 'react';
import { Box, Button, SimpleGrid } from '@chakra-ui/react';
import useFetchGame, { Game } from '../hooks/useFetchGame';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { GameQuery } from '../App';
import { useContext } from 'react';
import { GameContext, ProvidedContextType } from '../contexts/GameProvider';
import InfiniteScroll from 'react-infinite-scroll-component';

interface Props {
  // selectedGenre: Genre | null;
  // selectedPlatform: Platform | null;
  gameQuery: GameQuery;
}

const GameGrid = () => {
  const { gameQuery } = useContext(GameContext) as ProvidedContextType;
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useFetchGame(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const fetchedGameCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;
  if (error) return null;
  return (
    <Box>
      <InfiniteScroll
        dataLength={fetchedGameCount} //This is important field to render the next data
        next={fetchNextPage}
        hasMore={!!hasNextPage}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={2}>
          {isLoading &&
            skeletons.map((number) => (
              <GameCardContainer key={number}>
                <GameCardSkeleton key={number} />
              </GameCardContainer>
            ))}

          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game: Game) => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game} key={game.id} />
                </GameCardContainer>
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
      {/* {hasNextPage && (
        <Button
          onClick={() => fetchNextPage()}
          marginBottom={'15px'}
          marginX={5}
        >
          {isFetchingNextPage ? 'Loading...' : 'Load More'}
        </Button>
      )} */}
    </Box>
  );
};

export default GameGrid;
