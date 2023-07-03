import { HStack, Image } from '@chakra-ui/react';
import React from 'react';
import logo from '../assets/thatImage.jpeg';
import ColorSwitch from './ColorSwitch';
import SearchInput from './SearchInput';
// import { useGameContext } from '../contexts/GameContextProvider';

interface Props {
  onProvideSearch: (data: string) => void;
}

export const NavBar = ({ onProvideSearch }: Props) => {
  // const {setGameQuery} = useGameContext();

  return (
    <HStack padding='10px'>
      <Image src={logo} boxSize='60px' />
      <SearchInput onProvideSearch={onProvideSearch} />
      <ColorSwitch />
    </HStack>
  );
};
