import { Badge } from '@chakra-ui/react';
import React, { useEffect } from 'react';

interface Props {
  criticScore: number;
}

const CriticScore = ({ criticScore }: Props) => {
  return (
    <Badge
      variant='outline'
      paddingX={2}
      colorScheme={
        criticScore < 70 ? 'yellow' : criticScore < 40 ? 'red' : 'green'
      }
    >
      {criticScore}
    </Badge>
  );
};

export default CriticScore;
