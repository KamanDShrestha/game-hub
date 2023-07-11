import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React, { useContext } from 'react';
import useFetchPlatform from '../hooks/useFetchPlatforms';
import { Platform } from '../hooks/useFetchGame';
import { BsChevronDown } from 'react-icons/bs';
import { Button } from '@chakra-ui/react';

import usePlatform from '../hooks/usePlatform';
import useGameQuery from '../gameStore';

const PlatformSelection = () => {
  const { data, isLoading, error } = useFetchPlatform();
  // const selectedPlatformName = data.results.filter(
  //   (platform) => platform.id === gameQuery.platformID
  // )[0]?.name;
  const setPlatformID = useGameQuery((store) => store.setPlatformID);
  const selectedPlatform = usePlatform();
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => setPlatformID(platform.id)}
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
