//while fetching the data we are getting the object with id and name property, so we are providing the type to the variables

export interface Platform {
  id: number;
  name: string;
  slug: string;
  games_count: number;
}
