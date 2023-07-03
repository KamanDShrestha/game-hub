import React from 'react';
import { useRef, useEffect } from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';

interface Props {
  onProvideSearch: (data: string) => void;
}

const SearchInput = ({ onProvideSearch }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    function callback(e: KeyboardEvent) {
      if (inputRef.current == null) return;
      if (e.key === 'Enter') {
        onProvideSearch(inputRef.current.value);
      }
    }
    window.addEventListener('keydown', (e) => callback(e));
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (inputRef.current) {
          console.log(inputRef.current.value);
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={inputRef}
          borderRadius={20}
          placeholder='Search for games...'
          border={'2px solid '}
          variant={'filled'}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
