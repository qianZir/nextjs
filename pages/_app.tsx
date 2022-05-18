import Head from 'next/head'
import '../styles/common.css';
import type { AppProps /*, AppContext */ } from 'next/app';
import { Fragment } from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  )
}

