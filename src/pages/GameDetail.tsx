import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchGameDetail from '../hooks/useFetchGameDetail';
import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import Loader from '../components/Spinner';
import ErrorPage from './ErrorPage';
import ExpandableText from '../components/ExpandableText';
import GameAttributes from '../components/GameAttributes';
import GameTrailer from '../components/GameTrailer';
import GameScreenshots from '../components/GameScreenshots';
const GameDetail = () => {
  const { slug } = useParams();
  console.log(slug);
  const { data, isLoading, error } = useFetchGameDetail(slug!);
  console.log(data);

  if (isLoading) return <Loader />;
  if (error) return <ErrorPage />;

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }}>
        <Box padding={5}>
          <Heading>{data.name}</Heading>
          <ExpandableText>{data.description_raw}</ExpandableText>
          <GameAttributes game={data} />
        </Box>
        <Box>
          <GameTrailer slug={slug!} />
          <GameScreenshots slug={slug!} />
        </Box>
      </SimpleGrid>
    </>
  );
};

export default GameDetail;
