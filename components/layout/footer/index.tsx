import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';

export const Footer: FC = () => (
  <Div p="1rem">
    <P textTransform="capitalize">
      copyright &copy; BCA front-end challenge - {new Date().getFullYear()}
    </P>
  </Div>
);
