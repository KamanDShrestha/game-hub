import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React, { useContext } from 'react';
import useFetchPlatform, { Platform } from '../hooks/useFetchPlatforms';
import { BsChevronDown } from 'react-icons/bs';
import { Button } from '@chakra-ui/react';
import { GameContext, ProvidedContextType } from '../contexts/GameProvider';

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelection = () => {
  const { gameQuery, handleGame } = useContext(
    GameContext
  ) as ProvidedContextType;
  const { data, isLoading, error } = useFetchPlatform();
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {gameQuery.platform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => handleGame({ ...gameQuery, platform })}
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
