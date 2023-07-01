import {
  Card,
  Heading,
  Image,
  CardHeader,
  Text,
  HStack,
} from '@chakra-ui/react';
import React from 'react';
import { Game } from '../hooks/useFetchGame';
import getCroppedImageUrl from '../services/getCroppedImageUrl';
import CriticScore from './CriticScore';
import PlatformIcon from './PlatformIcon';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} margin={10} overflow='hidden'>
      <Image
        src={getCroppedImageUrl(game.background_image)}
        objectFit={'cover'}
      />
      <Heading fontSize='20px' padding={2}>
        {game.name}
      </Heading>

      <HStack justifyContent='space-between' margin={5}>
        <PlatformIcon
          platforms={game.parent_platforms.map((platform) => platform.platform)}
        />
        <CriticScore criticScore={game.metacritic} />
      </HStack>
    </Card>
  );
};

export default GameCard;
