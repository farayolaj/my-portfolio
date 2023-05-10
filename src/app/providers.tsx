'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import theme from '@theme';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <Global
          styles={`
            @font-face {
              font-family: 'Futura PT';
              src: url('/fonts/FuturaPTLight.woff') format('woff');
              font-weight: normal;
              font-style: normal;
            }

            @font-face {
              font-family: 'Futura PT';
              src: url('/fonts/FuturaPTMedium.woff') format('woff');
              font-weight: bold;
              font-style: normal;
            }
          `}
        />
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
}
