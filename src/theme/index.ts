import { extendTheme } from '@chakra-ui/react';

// theme.fonts.
export default extendTheme({
  fonts: {
    body: '\'Nunito Sans\', san-serif',
    heading: '\'Nunito Sans\', san-serif'
  },
  colors: {
    react: '#00d8ff',
    graphql: '#e10098',
    node: '#83cd29',
    typescript: '#3178c6',
    mongodb: '#58aa50',
    firebase: '#fcca3f',
    lightblack: '#2d2e32',
    darkblack: '#25262a'
  },
  styles: {
    global: {
      /* responsive typography
        html: {
        fontSize: 'calc(1em + (1.5 - 1) * (100vw - 25em) / (50 - 25))'
      }, */
      body: {
        color: 'white'
      }
    }
  }
});