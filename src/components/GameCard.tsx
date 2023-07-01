import { Card, Heading, Image, CardHeader, Text } from '@chakra-ui/react';
import React from 'react';
import { Game } from '../hooks/useFetchGame';
import PlatformIcon from './PlatformIcon';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} margin={10} overflow='hidden'>
      <Image src={game.background_image} objectFit={'cover'} />
      <Heading fontSize='20px' padding={2}>
        {game.name}
      </Heading>
      <Text>
        <PlatformIcon
          platforms={game.parent_platforms.map((platform) => platform.platform)}
        />
      </Text>
    </Card>
  );
};

export default GameCard;
