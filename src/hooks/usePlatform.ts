import { useContext } from 'react';
import { GameContext, ProvidedContextType } from '../contexts/GameProvider';
import useFetchPlatform from './useFetchPlatforms';

function usePlatform() {
  const { gameQuery } = useContext(GameContext) as ProvidedContextType;
  const { data: platforms } = useFetchPlatform();
  const selectedPlatform = platforms.results.find(
    (platform) => platform.id === gameQuery.platformID
  );
  return selectedPlatform;
}

export default usePlatform;
