import APIClient from '../services/api-client';
import useFetchTrailer from '../hooks/useFetchTrailer';

interface Props {
  slug: string;
}

const apiClient = new APIClient('/games');
const GameTrailer = ({ slug }: Props) => {
  const { data, isLoading, error } = useFetchTrailer(slug);
  console.log(data);
  return (
    <>
      <video width={1920} height={920} controls>
        {data?.results.map((result) => (
          <source src={result.data[480]}></source>
        ))}
      </video>
    </>
  );
};

export default GameTrailer;
