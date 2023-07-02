import { HStack } from '@chakra-ui/react';
import React from 'react';
import { Genre } from '../hooks/useFetchGenres';
import { Image, Text } from '@chakra-ui/react';
import getCroppedImageUrl from '../services/getCroppedImageUrl';
interface Props {
  genre: Genre;
}

const GenreItem = ({ genre }: Props) => {
  return (
    <HStack>
      <Image
        src={getCroppedImageUrl(genre.image_background)}
        boxSize={'32px'}
      />
      <Text fontSize={'20px'}>{genre.name}</Text>
    </HStack>
  );
};

export default GenreItem;
