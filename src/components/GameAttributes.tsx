import React from 'react';
import { Grid, SimpleGrid } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Game from '../entities/Game';
import CriticScore from './CriticScore';
import GameAttribute from './GameAttribute';
import { Text } from '@chakra-ui/react';
interface Props {
  game: Game;
}
const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2}>
      <GameAttribute heading='Platforms'>
        {game?.parent_platforms.map((platform) => (
          <Text key={platform.platform.id}>{platform.platform.name}</Text>
        ))}
      </GameAttribute>

      <GameAttribute heading='Metascore'>
        <CriticScore criticScore={game?.metacritic} />
      </GameAttribute>

      <GameAttribute heading='Genres'>
        {game?.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </GameAttribute>
      <GameAttribute heading='Publishers'>
        {game?.publishers.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </GameAttribute>
    </SimpleGrid>
  );
};

export default GameAttributes;
