import { HStack, Heading } from '@chakra-ui/react';
import React, { useContext } from 'react';
import Genre from '../entities/Genre';
import { Image, Text, Button } from '@chakra-ui/react';
import getCroppedImageUrl from '../services/getCroppedImageUrl';
import styles from './GenreItem.module.css';
import useGameQuery from '../gameStore';

interface Props {
  genre: Genre;
}

const GenreItem = ({ genre }: Props) => {
  const setGenreID = useGameQuery((store) => store.setGenreID);
  const genreID = useGameQuery((store) => store.gameQuery.genreID);

  return (
    <>
      <HStack className={styles.each} gap={3.5}>
        <Image
          src={getCroppedImageUrl(genre.image_background)}
          boxSize={'32px'}
          borderRadius={'5px'}
          overflow={'hidden'}
          marginX={'2px'}
        />

        <Button
          variant={'link'}
          fontSize={'lg'}
          whiteSpace={'normal'}
          textAlign={'left'}
          onClick={() => setGenreID(genre.id)}
          fontWeight={genreID === genre.id ? 'bold' : 'light'}
          textDecoration={genreID === genre.id ? 'underline' : 'none'}
        >
          {genre.name}
        </Button>
      </HStack>
    </>
  );
};

export default GenreItem;
