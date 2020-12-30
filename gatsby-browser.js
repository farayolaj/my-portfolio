import React from 'react';
import {
  ThemeProvider,
  CSSReset,
  GlobalStyle,
  PortalManager,
} from '@chakra-ui/react';
import theme from './src/theme';
// import { AnimationFeature, ExitFeature, MotionConfig } from 'framer-motion';
import './src/style/index.css';

export const wrapRootElement = ({ element }) => {
  const content = (
    <>
      <CSSReset />
      <GlobalStyle />
      <PortalManager>{element}</PortalManager>
    </>
  );
  // <MotionConfig features={[AnimationFeature, ExitFeature]}> </MotionConfig>
  return (
    <ThemeProvider theme={theme}>
      {content}
    </ThemeProvider>
  );
}
