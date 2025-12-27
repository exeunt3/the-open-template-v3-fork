import { extendTheme } from '@chakra-ui/react'
import { config } from './foundations'

const overrides = {
  config,
  colors: {},
  components: {},
  fonts: {
    heading: `'IBM Plex Mono', 'Courier New', monospace`,
    body: `'IBM Plex Mono', 'Courier New', monospace`,
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
        fontSize: '14px',
        lineHeight: '1.6',
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
      fontSize: ['24px', '28px', '32px'],
      fontFamily: `'IBM Plex Mono', monospace`,
      fontWeight: 500,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: ['20px', '24px', '28px'],
      fontFamily: `'IBM Plex Mono', monospace`,
      fontWeight: 500,
      lineHeight: 1.25,
    },
    h3: {
      fontSize: ['18px', '20px', '24px'],
      fontFamily: `'IBM Plex Mono', monospace`,
      fontWeight: 500,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: ['16px', '18px', '20px'],
      fontFamily: `'IBM Plex Mono', monospace`,
      fontWeight: 500,
      lineHeight: 1.35,
    },
    paragraph: {
      fontSize: '14px',
      fontFamily: `'IBM Plex Mono', monospace`,
      fontWeight: 400,
      lineHeight: 1.6,
      marginBottom: 12,
    },
    tag: {
      fontSize: '11px',
      fontFamily: `'IBM Plex Mono', monospace`,
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
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
