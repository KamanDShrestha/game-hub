import { Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { Box } from '@chakra-ui/react';
const ErrorPage = () => {
  //to catch the error when routing between pages
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box padding={10}>
        <Heading>Ohh noo!</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? 'The page doesnot exist'
            : 'Unknown Error occured'}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
