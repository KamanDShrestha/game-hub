import { Skeleton, SkeletonText, Card, CardBody } from '@chakra-ui/react';
import React from 'react';
import GameCard from './GameCard';

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height={'250px'} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
