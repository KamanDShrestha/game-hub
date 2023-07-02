import React from 'react';
import useFetchGenres from '../hooks/useFetchGenres';
import Loader from './Loader';

const GenreList = () => {
  const { genres, isLoading, error } = useFetchGenres();
  return (
    <ul>
      {error && <p>{error}</p>}
      {isLoading && <Loader />}
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
