import { extendTheme, ThemeConfig } from '@chakra-ui/react'

// NB: Chakra gives you access to `colorMode` and `theme` in `props`
const config:ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false
}

export const bodyTheme = extendTheme({
  config,
  styles: {
    global: (props) => ({
      'html, body': {
        fontSize: 'sm',
        color: props.colorMode === 'dark' ? 'white' : 'gray.600',
        lineHeight: 'tall',
        padding: 0,
        margin: 0,
      },
      a: {
        color: props.colorMode === 'dark' ? 'white' : 'gray.600',
        textDecoration: 'none',
      },
    }),
  },
  components: {
    Button: { baseStyle: { _focus: { boxShadow: 'none' } } }
  }
})
