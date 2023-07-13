import { Button, Text } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [showing, setShowing] = useState(false);

  if (!children) return null;
  if (children.length <= 300) {
    return <Text>{children}</Text>;
  }
  const shortenedChildren = children.split(' ').slice(0, 30).join(' ');

  return (
    <>
      <Text>
        {showing ? children : `${shortenedChildren}...`}
        <Button
          colorScheme='telegram'
          size='xs'
          fontWeight={'bold'}
          onClick={() => setShowing(!showing)}
          marginX={2}
        >
          {showing ? 'Collapse' : 'Show More'}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
