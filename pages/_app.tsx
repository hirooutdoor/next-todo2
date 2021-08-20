import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { TodoProvider } from 'src/providers/TodoProvider'
import { RecoilRoot } from 'recoil'
import { ChakraProvider } from '@chakra-ui/react'
import { bodyTheme } from 'src/theme/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <TodoProvider>
        <ChakraProvider theme={bodyTheme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </TodoProvider>
    </RecoilRoot>
  )
}
export default MyApp
