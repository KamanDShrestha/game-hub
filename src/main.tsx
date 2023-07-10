import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { App } from './App';
import './index.css';
import theme from './theme';
import { GameProvider } from './contexts/GameProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.intialColorMode} />
        <GameProvider>
          <App />
          <ReactQueryDevtools />
        </GameProvider>
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
