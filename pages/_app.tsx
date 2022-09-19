import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/globalStyles';
import '../styles/custom.css';
import { ChakraProvider } from '@chakra-ui/react';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
