import { NextPage } from 'next';

import { SEO } from '@/components';
import Home from '@/views/vehicle';

const HomePage: NextPage = () => (
  <>
    <SEO pageTitle="Ours vehicles" />
    <Home />
  </>
);

export default HomePage;
