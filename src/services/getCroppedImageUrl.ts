import noImage from '../assets/placeholder.png';

function getCroppedImageUrl(url: string) {
  const target = 'media/';
  if (!url) return noImage;
  const index = url.indexOf(target) + target.length;

  return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
}

export default getCroppedImageUrl;
