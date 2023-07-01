import { HStack, Text, Switch, useColorMode } from '@chakra-ui/react';
import React from 'react';

const ColorSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme='pink'
        isChecked={colorMode === 'dark'}
        onChange={toggleColorMode}
      />

      <Text>{colorMode === 'dark' ? 'Dark Mode' : 'Light Mode'}</Text>
    </HStack>
  );
};

export default ColorSwitch;
