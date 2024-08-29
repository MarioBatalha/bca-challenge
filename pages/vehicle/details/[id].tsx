import { NextPage } from 'next';

import { SEO } from '@/components';

import { VehicleDetails } from '../../../views/vehicle/details';
import { useRouter } from 'next/router';
import { useVehicle } from '@/constants/context';

const VehicleDetailsPage: NextPage = () => {
  const router = useRouter();
  const id = router.query.id;
  const { vehicles } = useVehicle();
  return (
  <>
    <SEO pageTitle="Vehicle details" />
    <VehicleDetails {...vehicles[id]}/>
  </>
)
}

export default VehicleDetailsPage;
