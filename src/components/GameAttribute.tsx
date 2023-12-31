import { Box, Heading } from '@chakra-ui/react';

import { ReactNode } from 'react';
export interface Attribute {
  id: number;
  name: string;
  slug: string;
}

interface Props {
  heading: string;
  children: ReactNode;
}

const GameAttribute = ({ children, heading }: Props) => {
  return (
    <Box margin={5}>
      <Heading as='dt' size={'s'} color={'gray.500'}>
        {heading}
      </Heading>
      {children}
      {/* {typeof attribute === 'number' ? (
        <CriticScore criticScore={attribute} />
      ) : (
        <ul>
          {attribute.map((value) => (
            <ul>{value?.name || value?.platform.name}</ul>
          ))}
        </ul>
      )} */}
    </Box>
  );
};

export default GameAttribute;
