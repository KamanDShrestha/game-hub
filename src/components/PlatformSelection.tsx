import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React from 'react';
import useFetchPlatform, { Platform } from '../hooks/useFetchPlatforms';
import { BsChevronDown } from 'react-icons/bs';
import { Button } from '@chakra-ui/react';

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelection = ({ onSelectedPlatform, selectedPlatform }: Props) => {
  const { platforms, isLoading, error } = useFetchPlatform();
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => (
          <MenuItem
            onClick={() => onSelectedPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelection;
