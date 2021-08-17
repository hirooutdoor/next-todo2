import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { TodoProvider } from 'src/providers/TodoProvider'
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <TodoProvider>
        <Component {...pageProps} />
      </TodoProvider>
    </RecoilRoot>
  )
}
export default MyApp
