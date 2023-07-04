import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { GameContext, ProvidedContextType } from '../contexts/GameProvider';

interface Props {
  selectedOrdering: string;
  onSelectedOrdering: (arg0: string) => void;
}

const OrderBy = () => {
  const { gameQuery, handleGame } = useContext(
    GameContext
  ) as ProvidedContextType;
  const sortOrder = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release Date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average Rating' },
  ];
  const selectedSort = sortOrder.find(
    (order) => order.value === gameQuery.ordering
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {selectedSort?.label}
      </MenuButton>
      <MenuList>
        {sortOrder.map((order) => (
          <MenuItem
            key={order.value}
            value={order.value}
            onClick={() => handleGame({ ...gameQuery, ordering: order.value })}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default OrderBy;
