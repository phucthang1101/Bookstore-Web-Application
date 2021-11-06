//import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react';
import { StoreProvider } from '../context/StoreContext'
import { useStoreContext } from '../context/StoreContext';
import agent from '../utils/agent';
import { getCookie } from '../utils/cookies';

function MyApp({ Component, pageProps }: AppProps) {
  

  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  )
}

export default MyApp
