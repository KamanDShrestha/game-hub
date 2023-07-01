import { Card, Heading, Image, CardHeader } from '@chakra-ui/react';
import React from 'react';
import { Game } from '../hooks/useFetchGame';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} margin={10} overflow='hidden'>
      <Image src={game.background_image} />
      <Heading fontSize='20px' padding={2}>
        {game.name}
      </Heading>
    </Card>
  );
};

export default GameCard;
