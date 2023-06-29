import { HStack, Image } from '@chakra-ui/react';
import React from 'react';
import logo from '../assets/thatImage.jpeg';

export const NavBar = () => {
  return (
    <div>
      <HStack>
        <Image src={logo} boxSize='60px' />
        <p>NavBar</p>
      </HStack>
    </div>
  );
};
