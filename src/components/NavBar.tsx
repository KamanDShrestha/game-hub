import { HStack, Image } from '@chakra-ui/react';
import React from 'react';
import logo from '../assets/thatImage.jpeg';
import ColorSwitch from './ColorSwitch';

export const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Image src={logo} boxSize='60px' />
      <p>NavBar</p>
      <ColorSwitch />
    </HStack>
  );
};
