import type { AppProps } from "next/app";
import Layout from "@/components/layout";
import { ThemeProvider } from "styled-components";
import theme from "@/theme";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'BebasNeue';
    src: url('/fonts/BebasNeue-Regular.ttf') format('truetype');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter-VariableFont_slnt,wght.ttf') format('truetype-variations');
    font-weight: 1 1000;
    font-style: oblique 0deg 10deg;
  }

body {
    font-family: 'Inter', sans-serif;
    margin: 0px;

  }`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
