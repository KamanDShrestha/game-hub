import { Image, ImageProps } from '@chakra-ui/react';

import bullseye from '../assets/bullseye.png';
import nice from '../assets/nice.png';
import thumbs from '../assets/thumbsup.png';

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  const setEmoji: { [key: number]: ImageProps } = {
    3: { src: thumbs, alt: 'meh', boxSize: '30px' },
    4: { src: nice, alt: 'meh', boxSize: '30px' },
    5: { src: bullseye, alt: 'meh', boxSize: '30px' },
  };
  return <Image {...setEmoji[rating]} />;
};

export default Emoji;
