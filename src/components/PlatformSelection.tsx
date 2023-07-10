import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React, { useContext } from 'react';
import useFetchPlatform from '../hooks/useFetchPlatforms';
import { Platform } from '../hooks/useFetchGame';
import { BsChevronDown } from 'react-icons/bs';
import { Button } from '@chakra-ui/react';
import { GameContext, ProvidedContextType } from '../contexts/GameProvider';

const PlatformSelection = () => {
  const { gameQuery, handleGame } = useContext(
    GameContext
  ) as ProvidedContextType;
  const { data, isLoading, error } = useFetchPlatform();
  const selectedPlatformName = data.results.filter(
    (platform) => platform.id === gameQuery.platformID
  )[0]?.name;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatformName || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() =>
              handleGame({ ...gameQuery, platformID: platform.id })
            }
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
