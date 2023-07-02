//for providing the consistent layout and shape to the game card without duplicating

import { Box } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box width={'300px'} borderRadius={10} margin={10} overflow='hidden'>
      {children}
    </Box>
  );
};

export default GameCardContainer;
