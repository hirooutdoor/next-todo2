import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { TodoProvider } from 'providers/TodoProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TodoProvider>
      <Component {...pageProps} />
    </TodoProvider>
  )
}
export default MyApp
