import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import useGameQuery from '../gameStore';

interface Props {
  selectedOrdering: string;
  onSelectedOrdering: (arg0: string) => void;
}

const OrderBy = () => {
  const setOrdering = useGameQuery((store) => store.setOrdering);
  const ordering = useGameQuery((store) => store.gameQuery.ordering);
  const sortOrder = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release Date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average Rating' },
  ];
  const selectedSort = sortOrder.find((order) => order.value === ordering);
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
            onClick={() => setOrdering(order.value)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default OrderBy;
