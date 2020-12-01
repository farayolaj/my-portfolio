import React from "react"
import {
  ThemeProvider,
  CSSReset,
  GlobalStyle,
  PortalManager,
} from "@chakra-ui/react"

import 'fontsource-nunito-sans';
import theme from "./src/theme"
import { AnimationFeature, MotionConfig } from "framer-motion";

export const wrapRootElement = ({ element }) => {
  const content = (
    <>
      <CSSReset />
      <GlobalStyle />
      <PortalManager>{element}</PortalManager>
    </>
  )
  return (
    <MotionConfig features={[AnimationFeature]}>
      <ThemeProvider theme={theme}>
        {content}
      </ThemeProvider>
    </MotionConfig>
  )
}
