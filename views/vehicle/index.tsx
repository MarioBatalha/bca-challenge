import { Div, H1 } from '@stylin.js/elements';
import { FC } from 'react';

import { Layout } from '@/components';
import { useVehicle } from '@/constants/context';

import { Filter } from './components/filter';
import { VehicleCard } from './components/vehicle-card';
import Pagination from './components/pagination';

const Home: FC = () => {
  const { vehicles } = useVehicle();
  return (
    <Layout>
      <Div
        my="1rem"
        mx="0.5rem"
        gap="1rem"
        display="flex"
        height="auto"
        maxWidth="100vw"
        alignItems="flex-end"
        flexDirection="column"
        justifyContent="flex-end"
      >
        <Div
          width={['100%', '100%', '100%', '79%']}
          display="flex"
          overflowY="auto"
          alignItems="center"
          justifyContent="flex-start"
        >
          <H1 fontSize="1rem">{vehicles.length} Vehicles to available</H1>
        </Div>
        <Div
          gap="1rem"
          width="100%"
          height="100%"
          display="flex"
          flexDirection={['column', 'column', 'column', 'row']}
          alignItems={['center', 'center', 'center', 'flex-start']}
          justifyContent={['center', 'center', 'center', 'flex-start']}
        >
          <Filter />
          {vehicles === 0 ? (
            <Div
              gap="1rem"
              display="flex"
              flexWrap="wrap"
              alignItems="center"
              justifyContent="center"
              width={['100%', '100%', '100%', '80%']}
            >
              <H1>There is no vehicle available</H1>
            </Div>
          ) : (
            <Div
              gap="1rem"
              display="flex"
              flexWrap="wrap"
              alignItems="center"
              justifyContent="center"
              width={['100%', '100%', '100%', '80%']}
            >
              {vehicles.map((item: [], index: number) => {
                return <VehicleCard key={index} {...item} index={index} />;
              })}
            </Div>
          )}
        </Div>
        <Pagination />
      </Div>
    </Layout>
  );
};

export default Home;
