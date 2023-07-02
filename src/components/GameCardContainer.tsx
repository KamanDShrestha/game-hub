//for providing the consistent layout and shape to the game card without duplicating

import { Box } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius={10} margin={5} overflow='hidden'>
      {children}
    </Box>
  );
};

export default GameCardContainer;
