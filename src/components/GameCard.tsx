import {
  Card,
  Heading,
  Image,
  CardHeader,
  Text,
  HStack,
  Box,
} from '@chakra-ui/react';
import React from 'react';
import { Game } from '../hooks/useFetchGame';
import getCroppedImageUrl from '../services/getCroppedImageUrl';
import CriticScore from './CriticScore';
import PlatformIcon from './PlatformIcon';
import Emoji from './Emoji';
interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image
        src={getCroppedImageUrl(game.background_image) || undefined}
        objectFit={'cover'}
      />

      <HStack justifyContent='space-between' margin={4}>
        <PlatformIcon
          platforms={game.parent_platforms.map((platform) => platform.platform)}
        />
        <CriticScore criticScore={game.metacritic} />
      </HStack>
      <Heading fontSize={'20px'} padding={'15px'}>
        {game.name}
      </Heading>
      <Box paddingX={'30px'} marginBottom={'15px'}>
        <Emoji rating={game.rating_top} />
      </Box>
    </Card>
  );
};

export default GameCard;
