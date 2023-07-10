import { VStack } from '@chakra-ui/react';
import React from 'react';
import useFetchGenres from '../hooks/useFetchGenres';
import { Genre } from '../hooks/useFetchGame';
import Spinner from './Spinner';
import GenreItem from './GenreItem';
import { Heading } from '@chakra-ui/react';

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = () => {
  const { data, isLoading, error } = useFetchGenres();
  return (
    <>
      <Heading as={'h1'} size={'lg'} textAlign={'center'}>
        Genres
      </Heading>
      {isLoading && <Spinner />}
      <VStack align={'start'} marginX={4} marginY={4} gap={4}>
        {error && <p>{error.message}</p>}

        {data.results?.map((genre) => (
          <GenreItem key={genre.id} genre={genre} />
          // <li key={genre.id}>{genre.name}</li>
        ))}
      </VStack>
    </>
  );
};

export default GenreList;
