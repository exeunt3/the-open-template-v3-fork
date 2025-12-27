import { extendTheme } from '@chakra-ui/react'
import { config } from './foundations'

const overrides = {
  config,
  colors: {},
  components: {},
  fonts: {
    heading: `'Playfair Display', Georgia, serif`,
    body: `'Inter', -apple-system, BlinkMacSystemFont, sans-serif`,
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
        fontSize: ['16px', null, '18px'],
        lineHeight: '1.65',
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
      fontSize: ['30px', '40px', '48px'],
      fontFamily: `'Playfair Display', Georgia, serif`,
      fontWeight: 700,
      lineHeight: 1.1,
    },
    h2: {
      fontSize: ['26px', '32px', '40px'],
      fontFamily: `'Playfair Display', Georgia, serif`,
      fontWeight: 700,
      lineHeight: 1.15,
    },
    h3: {
      fontSize: ['22px', '26px', '32px'],
      fontFamily: `'Playfair Display', Georgia, serif`,
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h4: {
      fontSize: ['18px', '20px', '24px'],
      fontFamily: `'Playfair Display', Georgia, serif`,
      fontWeight: 600,
      lineHeight: 1.25,
    },
    paragraph: {
      fontSize: ['16px', null, '18px'],
      fontFamily: `'Inter', -apple-system, BlinkMacSystemFont, sans-serif`,
      fontWeight: 400,
      lineHeight: 1.65,
      marginBottom: 12,
    },
    tag: {
      fontSize: ['11px', null, '12px'],
      fontFamily: `'Inter', -apple-system, BlinkMacSystemFont, sans-serif`,
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
