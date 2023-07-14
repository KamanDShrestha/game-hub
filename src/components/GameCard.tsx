import { Box, Card, HStack, Heading, Image } from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import Game from '../entities/Game';
import getCroppedImageUrl from '../services/getCroppedImageUrl';
import CriticScore from './CriticScore';
import Emoji from './Emoji';
import PlatformIcon from './PlatformIcon';
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
          platforms={game.parent_platforms?.map(
            (platform) => platform.platform
          )}
        />
        <CriticScore criticScore={game.metacritic} />
      </HStack>
      <Heading fontSize={'20px'} padding={'15px'}>
        <Link to={`/games/${game.slug}`}>{game.name}</Link>
      </Heading>
      <Box paddingX={'30px'} marginBottom={'15px'}>
        <Emoji rating={game.rating_top} />
      </Box>
    </Card>
  );
};

export default GameCard;
