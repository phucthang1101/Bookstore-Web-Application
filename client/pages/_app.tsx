import type { AppProps } from 'next/app'
import { wrapper } from '../redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  //console.log('-----------------___APP', {pageProps});

  return (
   
      <Component {...pageProps} />
    
  )
}

export default wrapper.withRedux(MyApp);
