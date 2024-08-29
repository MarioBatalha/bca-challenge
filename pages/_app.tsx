import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';
import { StrictMode } from 'react';

import { VehicleProvider } from '@/constants/context';
import { GlobalStyles } from '@/styles';

const App = ({ Component, pageProps }: AppProps) => (
  <VehicleProvider>
    <StrictMode>
      <Global styles={GlobalStyles} />
      <Component {...pageProps} />
    </StrictMode>
  </VehicleProvider>
);

export default App;
