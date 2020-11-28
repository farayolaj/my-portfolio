import React from "react"
import {
  ThemeProvider,
  CSSReset,
  GlobalStyle,
  PortalManager,
} from "@chakra-ui/react"

import 'fontsource-nunito-sans';
import theme from "./src/theme"

export const wrapRootElement = ({ element }) => {
  const content = (
    <>
      <CSSReset />
      <GlobalStyle />
      <PortalManager>{element}</PortalManager>
    </>
  )
  return (
    <ThemeProvider theme={theme}>
        {content}
    </ThemeProvider>
  )
}
