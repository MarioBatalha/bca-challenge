import { NextPage } from 'next';

import { SEO } from '@/components';
import Error from '@/views/error';

import { StatusPageProps } from './pages.type';

const ErrorPage: NextPage<StatusPageProps> = ({ statusCode }) => {
  return (
    <>
      <SEO pageTitle="Error" />
      <Error message={`Occurred an error (${statusCode})`} />
    </>
  );
};

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
