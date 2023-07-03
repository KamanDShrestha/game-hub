function getCroppedImageUrl(url: string) {
  const target = 'media/';
  if (url === null) return null;
  const index = url.indexOf(target) + target.length;

  return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
}

export default getCroppedImageUrl;
