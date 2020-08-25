import React from 'react';
import App, { AppInitialProps, AppContext } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { resetServerContext } from 'react-beautiful-dnd';
import { wrapper } from '../redux/store';
import '../styles/globals.css';

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
                <Component {...pageProps} />
            </ThemeProvider>
        );
    }
}

export default wrapper.withRedux(WrappedApp);
