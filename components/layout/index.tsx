import { Div, H1 } from '@stylin.js/elements';
import { FC, PropsWithChildren } from 'react';

import ErrorBoundary from '../error-boundary';
import { Footer } from './footer';
import { LayoutProps } from './layout.types';

const Layout: FC<PropsWithChildren<LayoutProps>> = ({ title, children }) => (
  <ErrorBoundary>
    <Div
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
    >
      <Div width="100%" height="100%" minHeight="100vh">
        <Div
          m="0"
          mt="unset"
          width="100%"
          display="flex"
          flexDirection="column"
          px={['m', 'l', 'l', 'xl']}
        >
          <Div flex="1" mb="10xl">
            <Div>
              {title && (
                <H1
                  color="#0053DB"
                  textAlign="center"
                  lineHeight="3.5rem"
                  fontSize={['1rem', '1rem', '1rem', '2rem']}
                >
                  {title}
                </H1>
              )}
              {children}
            </Div>
          </Div>
        </Div>
      </Div>
      <Footer />
    </Div>
  </ErrorBoundary>
);

export default Layout;
