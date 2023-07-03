import React from 'react';
import {
  FaWindows,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
  FaPlaystation,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { BsNintendoSwitch, BsGlobe } from 'react-icons/bs';
import { Platform } from '../hooks/useFetchPlatforms';
import { HStack, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';
interface Props {
  platforms: Platform[];
}

const PlatformIcon = ({ platforms }: Props) => {
  // specifying the mapping for icons accorind to the name
  const icons: { [key: string]: IconType } = {
    android: FaAndroid,
    ios: MdPhoneIphone,
    pc: FaWindows,
    xbox: FaXbox,
    mac: FaApple,
    web: BsGlobe,
    playstation: FaPlaystation,
    linux: FaLinux,
    nintendo: BsNintendoSwitch,
  };

  return (
    // need to map the name from array of platforms, based on which the icon is to be printed
    <>
      <HStack marginY={1} padding={2}>
        {platforms.map((platform) => (
          <Icon
            as={icons[platform.slug]}
            boxSize={4}
            color={'gray.500'}
            key={platform.slug}
          />
        ))}
      </HStack>
    </>
  );
};

export default PlatformIcon;
