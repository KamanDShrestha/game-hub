import { create } from 'zustand';

interface GameQuery {
  genreID?: number;
  platformID?: number;
  ordering?: string;
  searchQuery?: string;
}

interface GameStore {
  gameQuery: GameQuery;
  setGenreID: (id: number) => void;
  setPlatformID: (id: number) => void;
  setOrdering: (ordering: string) => void;
  setSearchQuery: (search: string) => void;
}

const useGameQuery = create<GameStore>((set) => ({
  gameQuery: {},
  setGenreID: (id) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreID: id } })),
  setPlatformID: (id) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformID: id } })),
  setOrdering: (ordering) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, ordering } })),
  setSearchQuery: (search) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, searchQuery: search },
    })),
}));

export default useGameQuery;
