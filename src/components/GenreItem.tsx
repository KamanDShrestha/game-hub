import { HStack } from '@chakra-ui/react';
import React from 'react';
import { Genre } from '../hooks/useFetchGenres';
import { Image, Text, Button } from '@chakra-ui/react';
import getCroppedImageUrl from '../services/getCroppedImageUrl';
import styles from './GenreItem.module.css';

interface Props {
  genre: Genre;
  onSelectedGenre: (genre: Genre) => void;
}

const GenreItem = ({ genre, onSelectedGenre }: Props) => {
  return (
    <HStack className={styles.each}>
      <Image
        src={getCroppedImageUrl(genre.image_background)}
        boxSize={'32px'}
      />
      <Button fontSize={'lg'} onClick={() => onSelectedGenre(genre)}>
        {genre.name}
      </Button>
    </HStack>
  );
};

export default GenreItem;
