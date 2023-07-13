//for providing the consistent layout and shape to the game card without duplicating

import { Box } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { transform } from 'framer-motion';
import { transition } from '@chakra-ui/react';

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      borderRadius={10}
      margin={5}
      overflow='hidden'
      transition='all .25s ease'
      _hover={{ transform: 'scale(1.05)' }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
