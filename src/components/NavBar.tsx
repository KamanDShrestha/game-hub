import { HStack, Image } from '@chakra-ui/react';
import React from 'react';
import logo from '../assets/gamehub-logo.png';
import lightlogo from '../assets/gamehub-low-resolution-logo-black-on-transparent-background.png';
import darklogo from '../assets/gamehub-low-resolution-logo-color-on-transparent-background.png';
import ColorSwitch from './ColorSwitch';
import SearchInput from './SearchInput';
import { useColorMode } from '@chakra-ui/react';
import { ProvidedContextType } from '../contexts/GameProvider';
// import { useGameContext } from '../contexts/GameContextProvider';
import { useContext } from 'react';
import { GameContext } from '../contexts/GameProvider';

export const NavBar = () => {
  const { colorMode } = useColorMode();
  // const {setGameQuery} = useGameContext();

  return (
    <HStack padding='10px'>
      <Image
        src={colorMode === 'light' ? lightlogo : darklogo}
        boxSize='60px'
      />
      <SearchInput />
      <ColorSwitch />
    </HStack>
  );
};
