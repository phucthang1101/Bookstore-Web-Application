import type { AppProps } from 'next/app'
import { wrapper } from '../redux/store';
//import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  //console.log('-----------------___APP', {pageProps});

  return (
      <Component {...pageProps} />
  )
}

export default wrapper.withRedux(MyApp);
