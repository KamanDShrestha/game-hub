// import React, { createContext, useContext, useState } from 'react';
// import { GameQuery } from '../App';
// import { ReactNode } from 'react';

// export interface ProvidedContextType {
//   gameQuery: GameQuery;
//   handleGame: (gameQuery: GameQuery) => void;
// }

// export const GameContext = createContext<ProvidedContextType>(
//   {} as ProvidedContextType
// );

// interface Props {
//   children: ReactNode;
// }
// const GameProvider = ({ children }: Props) => {
//   const [gameQuery, setGameQuery] = useState({} as GameQuery);

//   function handleGame(data: GameQuery) {
//     setGameQuery(data);
//   }
//   return (
//     <GameContext.Provider value={{ gameQuery, handleGame }}>
//       {children}
//     </GameContext.Provider>
//   );
// };

// export { GameProvider };
