import { HStack, Heading } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { Genre } from '../hooks/useFetchGame';
import { Image, Text, Button } from '@chakra-ui/react';
import getCroppedImageUrl from '../services/getCroppedImageUrl';
import styles from './GenreItem.module.css';
import { GameContext, ProvidedContextType } from '../contexts/GameProvider';

interface Props {
  genre: Genre;
}

const GenreItem = ({ genre }: Props) => {
  const { gameQuery, handleGame } = useContext(
    GameContext
  ) as ProvidedContextType;
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
          onClick={() => handleGame({ ...gameQuery, genreID: genre.id })}
          fontWeight={gameQuery.genreID === genre.id ? 'bold' : 'light'}
          textDecoration={gameQuery.genreID === genre.id ? 'underline' : 'none'}
        >
          {genre.name}
        </Button>
      </HStack>
    </>
  );
};

export default GenreItem;
