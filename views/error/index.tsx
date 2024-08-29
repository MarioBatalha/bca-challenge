import { Button, Div, H1, P } from '@stylin.js/elements';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { ComputerEyesSVG, DiedComputerSVG } from '@/components/svg';

import { ErrorProps } from './error.types';

const Error: FC<ErrorProps> = ({ message, linkGoTo }) => {
  const { push } = useRouter();

  return (
    <Div
      display="flex"
      minHeight="100vh"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
    >
      <Div width="90%" maxWidth="60rem" position="relative" mx="auto">
        <motion.div
          style={{
            top: '22%',
            width: '6%',
            left: '40.2%',
            position: 'absolute',
          }}
        >
          <ComputerEyesSVG maxHeight="100%" maxWidth="100%" />
        </motion.div>
        <DiedComputerSVG maxHeight="100%" width="100%" maxWidth="100%" />
      </Div>
      <H1
        mb=".5rem"
        color="#0053DB"
        fontSize="2.5rem"
        textAlign="center"
        lineHeight="3.5rem"
      >
        OOPS!
      </H1>
      <P mb=".5rem" mx="auto" maxWidth="20rem" textAlign="center">
        {message || 'Something went wrong'}
      </P>
      <Button
        my="1rem"
        mx="auto"
        p=".5rem"
        border="none"
        width="8rem"
        height="2rem"
        color="#FFFFFF"
        cursor="pointer"
        background="#0053DB"
        borderRadius=".25rem"
        onClick={() => push(linkGoTo || '/')}
      >
        Back home
      </Button>
    </Div>
  );
};

export default Error;
