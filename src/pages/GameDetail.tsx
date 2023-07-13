import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchGameDetail from '../hooks/useFetchGameDetail';
import { Box, Heading, Text } from '@chakra-ui/react';
import Loader from '../components/Spinner';
import ErrorPage from './ErrorPage';

const GameDetail = () => {
  const { slug } = useParams();
  console.log(slug);
  const { data, isLoading, error } = useFetchGameDetail(slug!);
  console.log(data);

  if (isLoading) return <Loader />;
  if (error) return <ErrorPage />;

  return (
    <>
      <Box padding={5}>
        <Heading>{data?.name}</Heading>
        <Text>{data?.description_raw}</Text>
      </Box>
    </>
  );
};

export default GameDetail;
