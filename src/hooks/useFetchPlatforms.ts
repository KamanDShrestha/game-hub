import useFetchData from './useFetchData';

export interface Platform {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  image: string;
  year_start: number;
  year_end: number;
}

//just to fetch the platform values
function useFetchPlatform() {
  return useFetchData<Platform>('/platforms');
}

export default useFetchPlatform;
