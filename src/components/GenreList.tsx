import { VStack } from '@chakra-ui/react';
import React from 'react';
import useFetchGenres from '../hooks/useFetchGenres';
import Spinner from './Spinner';
import GenreItem from './GenreItem';
const GenreList = () => {
  const { data: genres, isLoading, error } = useFetchGenres();
  return (
    <>
      {isLoading && <Spinner />}
      <VStack align={'start'} marginX={4} marginY={4} gap={4}>
        {error && <p>{error}</p>}

        {genres.map((genre) => (
          <GenreItem key={genre.id} genre={genre} />
          // <li key={genre.id}>{genre.name}</li>
        ))}
      </VStack>
    </>
  );
};

export default GenreList;
