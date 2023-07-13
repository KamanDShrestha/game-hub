import { Platform } from './Platform';

export interface Game {
  id: number | null;
  name: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating: number;
  rating_top: number;
  slug: string;
}
