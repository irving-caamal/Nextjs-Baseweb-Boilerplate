import React, { useEffect } from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import type { NextPage, NextPageContext } from 'next';
import { Provider as StyletronProvider } from 'styletron-react';
import { BaseProvider, createThemedStyled } from 'baseui';
import type { Theme } from 'baseui/styles/types';
import { Block } from 'baseui/block';

import { theme } from '../theme/index';
import { styletron } from '../helpers/styletron';
import '../theme/app.css';

export const themedStyled = createThemedStyled<Theme>();

const blockProps = {
  color: 'contentPrimary',
  backgroundColor: 'backgroundPrimary',
  maxWidth: '100vw',
  minHeight: '100vh',
};

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const setThemeStyle = (theme: 'light' | 'dark') => {
      localStorage.setItem('docs-theme', theme);
    };
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <StyletronProvider value={styletron}>
        <BaseProvider theme={theme}>
          <Block {...blockProps}>
            <Component {...pageProps} />
          </Block>
        </BaseProvider>
      </StyletronProvider>
    </>
  );
}

MyApp.getInitialProps = async ({
  Component,
  ctx,
}: {
  Component: NextPage;
  ctx: NextPageContext;
}) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { path: ctx.asPath, pageProps };
};

export default MyApp;
