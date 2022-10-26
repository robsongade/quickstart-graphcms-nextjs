import 'tailwindcss/tailwind.css'
import './../styles/global.scss'
import { Layout} from './../components'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
  
}

export default MyApp
