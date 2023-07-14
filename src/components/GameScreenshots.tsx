import { Image, SimpleGrid, Text } from '@chakra-ui/react';
import useFetchScreenshots from '../hooks/useFetchScreenshots';
import Loader from './Spinner';

interface Props {
  slug: string;
}

const GameScreenshots = ({ slug }: Props) => {
  const { data, isLoading, error } = useFetchScreenshots(slug);
  console.log(data);

  if (isLoading) return <Loader />;
  if (error) return <Text>{error.message}</Text>;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} margin={5}>
      {data.results.map((image) => (
        <Image src={image.image} key={image.id} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
