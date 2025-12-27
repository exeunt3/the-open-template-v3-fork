import { extendTheme } from '@chakra-ui/react'
import { config } from './foundations'

const overrides = {
  config,
  colors: {},
  components: {},
  fonts: {
    heading: `'Libre Baskerville', Georgia, 'Times New Roman', serif`,
    body: `'Libre Baskerville', Georgia, 'Times New Roman', serif`,
  },
  shadows: {},
  sizes: {},
  styles: {
    global: () => ({
      '*': {
        boxSizing: 'border-box',
        scrollBehavior: 'smooth',
        scrollMarginTop: '5rem',
        padding: 0,
        margin: 0,
      },
      body: {
        transition: 'background 200ms linear !important',
        color: 'primary',
        backgroundColor: 'bg',
        fontSize: '17px',
        lineHeight: '1.5',
        margin: 0,
        padding: '0px',
      },
      a: {
        textDecoration: 'underline',
        _hover: { textDecoration: 'none',}
      },
    }),
  },
  textStyles: {
    h1: {
      fontSize: '17px',
      fontFamily: `'Libre Baskerville', Georgia, serif`,
      fontWeight: 400,
      lineHeight: 1.5,
    },
    h2: {
      fontSize: '17px',
      fontFamily: `'Libre Baskerville', Georgia, serif`,
      fontWeight: 400,
      lineHeight: 1.5,
    },
    h3: {
      fontSize: '17px',
      fontFamily: `'Libre Baskerville', Georgia, serif`,
      fontWeight: 400,
      lineHeight: 1.5,
    },
    h4: {
      fontSize: '17px',
      fontFamily: `'Libre Baskerville', Georgia, serif`,
      fontWeight: 400,
      lineHeight: 1.5,
    },
    paragraph: {
      fontSize: '17px',
      fontFamily: `'Libre Baskerville', Georgia, serif`,
      fontWeight: 400,
      lineHeight: 1.5,
      marginBottom: 12,
    },
    tag: {
      fontSize: '17px',
      fontFamily: `'Libre Baskerville', Georgia, serif`,
      fontWeight: 400,
      letterSpacing: '0',
      marginBottom: 12,
    },
  },
  semanticTokens: {
    colors: {
      primary: { _light: '#282828', _dark: '#f0fdfa' },
      bg: { _light: '#f0fdfa', _dark: '#000' },
    },
  },
}

export default extendTheme(overrides)
