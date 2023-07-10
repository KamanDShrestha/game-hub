import { SimpleGrid, Text } from '@chakra-ui/react';
import useFetchGame, { Game } from '../hooks/useFetchGame';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useFetchGenres';
import { Platform } from '../hooks/useFetchPlatforms';
import { GameQuery } from '../App';
import { useContext } from 'react';
import { GameContext, ProvidedContextType } from '../contexts/GameProvider';

interface Props {
  // selectedGenre: Genre | null;
  // selectedPlatform: Platform | null;
  gameQuery: GameQuery;
}

const GameGrid = () => {
  const { gameQuery } = useContext(GameContext) as ProvidedContextType;
  const { data, error, isLoading } = useFetchGame(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  if (error) return null;
  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} padding={1} spacing={2}>
        {isLoading &&
          skeletons.map((number) => (
            <GameCardContainer key={number}>
              <GameCardSkeleton key={number} />
            </GameCardContainer>
          ))}
        {data?.results.map((game: Game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} key={game.id} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
