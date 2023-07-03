// import { ReactNode, createContext, useContext, useState } from 'react';
// import { Genre } from '../hooks/useFetchGenres';
// import { Platform } from '../hooks/useFetchPlatforms';

// const GameContext = createContext({});

// export interface GameQuery {
//   genre: Genre | null;
//   platform: Platform | null;
//   ordering: string;
//   searchQuery: string;
// }

// interface Props {
//   children: ReactNode;
// }

// const GameProvider = ({ children }: Props) => {
//   const [gameQuery, setGameQuery] = useState({} as GameQuery);

//   return (
//     <GameContext.Provider value={{ gameQuery, setGameQuery }}>
//       {children}
//     </GameContext.Provider>
//   );
// };

// function useGameContext() {
//   const context = useContext(GameContext);
//   if (context === undefined) throw new Error('Invoked outside the scope');
//   return context;
// }

// export { GameProvider, useGameContext };
