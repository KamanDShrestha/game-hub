import { HStack } from '@chakra-ui/react';
import React from 'react';
import { Genre } from '../hooks/useFetchGenres';
import { Image, Text, Button } from '@chakra-ui/react';
import getCroppedImageUrl from '../services/getCroppedImageUrl';
import styles from './GenreItem.module.css';

interface Props {
  genre: Genre;
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreItem = ({ genre, onSelectedGenre, selectedGenre }: Props) => {
  return (
    <HStack className={styles.each} gap={3.5}>
      <Image
        src={getCroppedImageUrl(genre.image_background)}
        boxSize={'32px'}
        borderRadius={'5px'}
        overflow={'hidden'}
      />

      <Button
        variant={'link'}
        fontSize={'lg'}
        onClick={() => onSelectedGenre(genre)}
        fontWeight={selectedGenre?.id === genre.id ? 'bold' : 'light'}
        textDecoration={selectedGenre?.id === genre.id ? 'underline' : 'none'}
      >
        {genre.name}
      </Button>
    </HStack>
  );
};

export default GenreItem;
