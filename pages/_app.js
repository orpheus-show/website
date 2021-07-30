import * as React from 'react'
import NextApp from 'next/app'
import globalStyles from '../styles/globals.css';
import theme from '../lib/theme';
import { ThemeProvider } from 'theme-ui'
import ColorSwitcher from '../components/color-switcher'
import Footer from '../components/Footer'
import Meta from '../components/meta';

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Meta />
        <ColorSwitcher />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
