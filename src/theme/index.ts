import { extendTheme } from '@chakra-ui/react';

export default extendTheme({
  fonts: {
    body: "'Futura PT', san-serif",
    heading: "'Futura PT', san-serif",
  },
  components: {
    Link: {
      baseStyle: {
        opacity: 0.7,
        _hover: {
          opacity: 1,
          textDecoration: 'none',
        },
      },
    },
  },
  colors: {
    react: '#00d8ff4d',
    graphql: '#e100984d',
    node: '#83cd294d',
    typescript: '#3178c64d',
    mongodb: '#58aa504d',
    firebase: '#fcca3f4d',
    html: '#e44f264d',
    css: '#1572b64d',
    git: '#dd4c354d',
    redux: '#764abc4d',
    express: '#0000004d',
    mysql: '#00758f4d',
    heroku: '#00758f4d',
    gatsby: '#6633994d',
    netlify: '#4300984d',
    next: '#0000004d',
    lightblack: '#2d2e32',
    darkblack: '#25262a',
  },
  styles: {
    global: {
      html: {
        scrollBehavior: 'smooth',
        fontSize: 'clamp(1rem, 18px, 3vw)',
      },
      body: {
        color: 'white',
        bgColor: 'darkblack',
      },
      'h1, h2, h3, h4, h5, h6': {
        fontWeight: 'bold',
      },
      h2: {
        fontSize: 'xl',
      },
      'p, span': {
        fontSize: 'md',
        letterSpacing: '0.02em',
      },
      '::selection': {
        background: 'whiteAlpha.500',
        color: 'black',
      },
      section: {
        scrollMarginTop: '4.5rem',
      },
    },
  },
});
