import React from 'react';
import App, { AppInitialProps, AppContext } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { resetServerContext } from 'react-beautiful-dnd';
import { wrapper } from '../redux/store';
import Container from '@material-ui/core/Container';
import Link from 'next/link'
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import '../styles/globals.css'

const theme = {};

class WrappedApp extends App<AppInitialProps> {
    public static getInitialProps = async ({ Component, ctx }: AppContext) => {
        resetServerContext();
        const pageProps = {
            ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
        };

        return {
            pageProps,
        };
    };

    public render() {
        const { Component, pageProps } = this.props;
        return (
            <ThemeProvider theme={theme}>
                <AppBar position="sticky" className='header'>
                  <Container>
                      <Link href="/">
                          <Typography variant="h6" className='home-link'>
                              Home
                          </Typography>
                      </Link>
                  </Container>
                </AppBar>
                <Container maxWidth="lg">

                <Component {...pageProps} />
                </Container>
            </ThemeProvider>
        );
    }
}

export default wrapper.withRedux(WrappedApp);
