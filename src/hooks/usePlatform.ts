import useGameQuery from '../gameStore';
import useFetchPlatform from './useFetchPlatforms';

function usePlatform() {
  const platformID = useGameQuery((store) => store.gameQuery.platformID);
  const { data: platforms } = useFetchPlatform();
  const selectedPlatform = platforms.results.find(
    (platform) => platform.id === platformID
  );
  return selectedPlatform;
}

export default usePlatform;
