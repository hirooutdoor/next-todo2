import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { TodoProvider } from 'src/providers/TodoProvider'
import { RecoilRoot } from 'recoil'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <TodoProvider>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </TodoProvider>
    </RecoilRoot>
  )
}
export default MyApp
