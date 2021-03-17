import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import type { NextPage, NextPageContext } from 'next';
import { Provider as StyletronProvider } from 'styletron-react';
import { styletron } from '../helpers/styletron';

export default class MyApp extends App {
  constructor(props: AppProps) {
    super(props);
  }
  static async getInitialProps({
    Component,
    ctx,
  }: {
    Component: NextPage;
    ctx: NextPageContext;
  }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { path: ctx.asPath, pageProps };
  }
  setThemeStyle(theme: 'light' | 'dark') {
    localStorage.setItem('docs-theme', theme);
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
          <StyletronProvider value={styletron}>
            <Component {...pageProps} />
          </StyletronProvider>
      </React.Fragment>
    );
  }
}
