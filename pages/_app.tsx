import Head from 'next/head';
import '../styles/common.css';
import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import('amfe-flexible');
  }, []);
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
