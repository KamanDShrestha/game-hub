import { HStack, Image } from '@chakra-ui/react';
import React from 'react';
import logo from '../assets/gamehub-logo.png';
import lightlogo from '../assets/gamehub-low-resolution-logo-black-on-transparent-background.png';
import darklogo from '../assets/gamehub-low-resolution-logo-color-on-transparent-background.png';
import ColorSwitch from './ColorSwitch';
import SearchInput from './SearchInput';
import { useColorMode } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
export const NavBar = () => {
  const { colorMode } = useColorMode();
  // const {setGameQuery} = useGameContext();

  return (
    <HStack padding='10px'>
      {/* <Link to={'/'} style={{ display: 'inline' }}> */}
      <Image
        src={colorMode === 'light' ? lightlogo : darklogo}
        boxSize='60px'
        objectFit={'cover'}
        margin={1}
      />
      {/* </Link> */}
      <SearchInput />
      <ColorSwitch />
    </HStack>
  );
};
