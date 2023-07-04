import useFetchData from './useFetchData';
import platforms from '../data/platforms';
export interface Platform {
  id: number;
  name: string;
  slug: string;
  games_count: number;
}

//just to fetch the platform values
function useFetchPlatform() {
  return { platforms, isLoading: false, error: '' };
}

export default useFetchPlatform;
