import { Button, Div, H2, P, A } from '@stylin.js/elements';
import { FC } from 'react';

import {
  CalendarSVG,
  EngineSVG,
  EyeSVG,
  FuelSVG,
  HeartSVG,
  MileageSVG,
} from '@/components/svg';
import { useVehicle } from '@/constants/context';

import { formatPrice } from '../../../../utils';
import { VehicleProps } from '../../vehicle.types';
import { useRouter } from 'next/router';

export const VehicleCard: FC<Partial<VehicleProps>> = ({
  make,
  model,
  index,
  engineSize,
  fuel,
  year,
  mileage,
  auctionDateTime,
  startingBid,
  favourite,
}) => {
  const { defaultImage, imageUrl } = useVehicle();
  const { push } = useRouter();

  return (
    <Div
      key={index}
      p="0.5rem"
      borderRadius="0.5rem"
      nHover={{
        border: '1px solid #0053DB',
        boxShadow: 'none',
      }}
      minWidth={['90%', '90%', '90%', '19.9rem']}
      boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
    >
      <Div
        mb="0.5rem"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <H2 fontSize="1rem" lineHeight="1rem" fontWeight="500">
          Start bid: {auctionDateTime}
        </H2>
        <Div
          display="flex"
          gap="0.5rem"
          alignItems="center"
          justifyContent="center"
        >
          <Button
            bg="none"
            border="none"
            width="1.5rem"
            height="1.5rem"
            cursor="pointer"
            onClick={() => handleFavouriteItem}
          >
            <HeartSVG
              width="100%"
              maxWidth="100%"
              maxHeight="100%"
              fill={favourite ? '#E53E3E' : 'none'}
            />
          </Button>
          <Button
            p="0.5rem"
            bg="none"
            border="none"
            width="2rem"
            height="2rem"
            cursor="pointer"
            borderRadius="0.5rem"
            nHover={{
              backgroundColor: '#d6d6cc',
              transition: 'all 0.5s ease-in-out',
            }}
            onClick={() => push(`vehicle/details/${index}`)}
          >
            <EyeSVG width="100%" maxWidth="100%" maxHeight="100%" />
          </Button>
        </Div>
      </Div>
      <Div
        minWidth="100%"
        maxWidth="10rem"
        minHeight="10rem"
        position="relative"
      >
        <img
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'fill',
          }}
          src={imageUrl ?? defaultImage}
          alt={`${make}${model}`}
        />
      </Div>
      <Div
        mt="0.5rem"
        py="0.5rem"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Div
          display="flex"
          justifyContent="flex-start"
          alignItems="flex-start"
          flexDirection="column"
        >
          <H2
            fontSize="0.7rem"
            fontWeight="400"
            lineHeight="1rem"
            color="#5F5F5B"
            textTransform="capitalize"
          >
            {make}
          </H2>
          <H2 fontSize="1rem" fontWeight="500" lineHeight="1rem">
            {model}
          </H2>
        </Div>
        <H2
          fontSize="1rem"
          fontWeight="400"
          color="#5F5F5B"
          lineHeight="1rem"
          textTransform="capitalize"
        >
          {formatPrice(startingBid)}
        </H2>
      </Div>
      <Div width="100%" border="0.5px solid #E0E0D7" />
      <Div
        py="0.5rem"
        gap="0.2rem"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Div
          gap="0.2rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <MileageSVG
            maxHeight="1rem"
            maxWidth="1rem"
            width="100%"
            color="#0053DB"
          />
          <P
            fontSize="1rem"
            color="#5F5F5B"
            lineHeight="1rem"
            textTransform="capitalize"
          >
            {mileage}
          </P>
        </Div>
        <Div
          gap="0.2rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <CalendarSVG
            maxHeight="1rem"
            maxWidth="1rem"
            width="100%"
            color="#0053DB"
          />
          <P
            fontSize="1rem"
            color="#5F5F5B"
            lineHeight="1rem"
            textTransform="capitalize"
          >
            {year}
          </P>
        </Div>
        <Div
          gap="0.2rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <FuelSVG
            maxHeight="1rem"
            maxWidth="1rem"
            width="100%"
            color="#0053DB"
          />
          <P
            fontSize="1rem"
            color="#5F5F5B"
            lineHeight="1rem"
            textTransform="capitalize"
          >
            {fuel}
          </P>
        </Div>
        <Div
          gap="0.2rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <EngineSVG
            width="100%"
            maxWidth="1rem"
            color="#0053DB"
            maxHeight="1rem"
          />
          <P
            fontSize="1rem"
            color="#5F5F5B"
            lineHeight="1rem"
            textTransform="capitalize"
          >
            {engineSize}
          </P>
        </Div>
      </Div>
    </Div>
  );
};
