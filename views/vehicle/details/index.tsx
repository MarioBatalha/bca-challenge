import { Button, Div, H1, H2, Li, P, Ul } from '@stylin.js/elements';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { Routes, RoutesEnum } from '@/constants';
import { useVehicle } from '@/constants/context';

import UploadImage from '../components/upload-image';
import { VehicleProps } from '../vehicle.types';
import { v4 } from 'uuid';
import carImage from '../../../public/car-example.webp'

export const VehicleDetails: FC<Partial<VehicleProps>> = ({ make, model, details }) => {
  const { push } = useRouter();
  const { defaultImage, imageUrl, setValue } = useVehicle();

  console.log('Details >>', details.specification.numberOfDoors);

  return (
    <Div
      p="2rem"
      gap="2rem"
      overflowY="auto"
      width="100vw"
      display="flex"
      alignItems="center"
      justifyContent="center"
      height={['auto', 'auto', 'auto', '100vh']}
      flexDirection={['column', 'column', 'column', 'row']}
    >
      <Div
        p="0.5rem"
        gap="3rem"
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        width={['100%', '100%', '100%', '50%']}
        maxHeight={['100%', '100%', '100%', '80%']}
      >
        <Div minWidth="100%"
            maxWidth="10rem">
        {imageUrl ? (
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
                borderRadius: '0.5rem',
              }}
              src={imageUrl ?? defaultImage}
              alt="car"
            />
          </Div>
        ) : (
          <UploadImage setValue={() => setValue('imageUrl', imageUrl)}/>
        )}
        </Div>
      </Div>
      <Div
        p="0.5rem"
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        width={['100%', '100%', '100%', '50%']}
      >
        <Div
          py="0.5rem"
          gap="1rem"
          width="100%"
          display="flex"
          justifyContent="space-between"
          flexDirection={['column', 'column', 'column', 'row']}
          alignItems={['center', 'center', 'center', 'flex-start']}
        >
          <Button
            p=".5rem"
            border="none"
            width="8rem"
            height="2rem"
            color="#FFFFFF"
            cursor="pointer"
            background="#0053DB"
            borderRadius=".25rem"
            onClick={() => push(Routes[RoutesEnum.Home])}
          >
            Back home
          </Button>
          <H1>{make}{' '}{model}</H1>
        </Div>
        <Div
          p="0.5rem"
          mt="1rem"
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <H2 my="0.5rem" textTransform="capitalize" >Specification</H2>
          <Div
            display="flex"
            width="100%"
            alignItems={['flex-start', 'flex-start', 'flex-start', 'center']}
            flexDirection={['column', 'column', 'column', 'row']}
            justifyContent={[
              'flex-start',
              'flex-start',
              'flex-start',
              'space-between',
            ]}
          >
            <Div
              my="0.5rem"
              gap="0.5rem"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <H1
                p="0.5rem"
                fontSize="1rem"
                bg="#dbe1ff"
                color="#0053db"
                borderRadius="0.25rem"
                textTransform="capitalize" 
              >
                Vehicle type:
              </H1>
              <P p="0.5rem" fontSize="1rem" textTransform="capitalize" >
                {details?.specification.vehicleType}
              </P>
            </Div>
            <Div
              my="0.5rem"
              gap="0.5rem"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <H1
                p="0.5rem"
                bg="#dbe1ff"
                fontSize="1rem"
                color="#0053db"
                borderRadius="0.25rem"
                textTransform="capitalize" 
              >
                Color:
              </H1>
              <P p="0.5rem" fontSize="1rem"
              textTransform="capitalize" >
              {details?.specification.color}
              </P>
            </Div>
          </Div>
          <Div
            display="flex"
            width="100%"
            justifyContent="space-between"
            alignItems="center"
          >
            <Div
              my="0.5rem"
              gap="0.5rem"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <H1
                p="0.5rem"
                fontSize="1rem"
                bg="#dbe1ff"
                color="#0053db"
                borderRadius="0.25rem"
                textTransform="capitalize" 
              >
                Fuel:
              </H1>
              <P p="0.5rem" fontSize="1rem" textTransform="capitalize" >
              {details?.specification.fuel}
              </P>
            </Div>
            <Div
              my="0.5rem"
              gap="0.5rem"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <H1
                p="0.5rem"
                fontSize="1rem"
                bg="#dbe1ff"
                color="#0053db"
                borderRadius="0.25rem"
                textTransform="capitalize" 
              >
                Transmission:
              </H1>
              <P p="0.5rem" fontSize="1rem" textTransform="capitalize" >
              {details?.specification.transmission}
              </P>
            </Div>
          </Div>
          <Div
            display="flex"
            width="100%"
            justifyContent="space-between"
            alignItems="center"
          >
            <Div
              my="0.5rem"
              gap="0.5rem"
              display="flex"
              alignItems="flex-start"
              justifyContent="flex-start"
            >
              <H1
                p="0.5rem"
                fontSize="1rem"
                bg="#dbe1ff"
                color="#0053db"
                borderRadius="0.25rem"
                textTransform="capitalize" 
              >
                Number of doors:
              </H1>
              <P p="0.5rem" fontSize="1rem" textTransform="capitalize" >
              {details?.specification.numberOfDoors}
              </P>
            </Div>
            <Div
              my="0.5rem"
              gap="0.5rem"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <H1
                p="0.5rem"
                fontSize="1rem"
                bg="#dbe1ff"
                color="#0053db"
                borderRadius="0.25rem"
                textTransform="capitalize" 
              >
                CO2 emissions:
              </H1>
              <P p="0.5rem" fontSize="1rem" textTransform="capitalize" >
              {details?.specification.co2Emissions}
              </P>
            </Div>
          </Div>
          <Div
            display="flex"
            width="100%"
            justifyContent="space-between"
            alignItems="center"
          >
            <Div
              my="0.5rem"
              gap="0.5rem"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <H1
                p="0.5rem"
                fontSize="1rem"
                bg="#dbe1ff"
                color="#0053db"
                borderRadius="0.25rem"
                textTransform="capitalize" 
              >
                Nox emissions:
              </H1>
              <P p="0.5rem" fontSize="1rem" textTransform="capitalize" >
              {details?.specification.noxEmissions}
              </P>
            </Div>
            <Div
              my="0.5rem"
              gap="0.5rem"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <H1
                p="0.5rem"
                fontSize="1rem"
                bg="#dbe1ff"
                color="#0053db"
                borderRadius="0.25rem"
                textTransform="capitalize" 
              >
                Number Of Keys:
              </H1>
              <P p="0.5rem" fontSize="1rem" textTransform="capitalize" >
              {details?.specification.numberOfKeys}
              </P>
            </Div>
          </Div>
        </Div>
        <Div
          display="flex"
          flexDirection={['column', 'column', 'column', 'row']}
          alignItems={['flex-start', 'flex-start', 'flex-start', 'center']}
          justifyContent={[
            'flex-start',
            'flex-start',
            'flex-start',
            'space-between',
          ]}
        >
          <Div
            p="0.rem"
            mt="3rem"
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            <H2 my="0.5rem" textTransform="capitalize" >ownership</H2>
            <Div
              display="flex"
              width="100%"
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="flex-start"
            >
              <Div
                my="0.5rem"
                gap="0.5rem"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <H1
                  p="0.5rem"
                  fontSize="1rem"
                  bg="#dbe1ff"
                  color="#0053db"
                  borderRadius="0.25rem"
                  textTransform="capitalize" 
                >
                  Log book:
                </H1>
                <P p="0.5rem" fontSize="1rem" textTransform="capitalize" >
                {details?.ownership.logBook}
                </P>
              </Div>
              <Div
                my="0.5rem"
                gap="0.5rem"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <H1
                  p="0.5rem"
                  fontSize="1rem"
                  bg="#dbe1ff"
                  color="#0053db"
                  textTransform="capitalize" 
                  borderRadius="0.25rem"
                >
                  Number of owners:
                </H1>
                <P p="0.5rem" fontSize="1rem" textTransform="capitalize" >
                {details?.ownership.numberOfOwners}
                  
                </P>
              </Div>
              <Div
                my="0.5rem"
                gap="0.5rem"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <H1
                  p="0.5rem"
                  fontSize="1rem"
                  bg="#dbe1ff"
                  color="#0053db"
                  borderRadius="0.25rem"
                >
                  Date of registration:
                </H1>
                <P p="0.5rem" fontSize="1rem" textTransform="capitalize" >
                {details?.ownership.dateOfRegistration}
                </P>
              </Div>
            </Div>
          </Div>
          <Div
            p="0.rem"
            mt="3rem"
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            <H2 my="0.5rem" textTransform="capitalize" >equipment</H2>
            <Div
              display="flex"
              width="100%"
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="flex-start"
            >
              <Ul>
                {details?.equipment.map((item) => {
                  return (
                    <Li textTransform="capitalize" p="0.2rem" key={v4()}>{item}</Li>
                  )
                })}
              </Ul>
            </Div>
          </Div>
        </Div>
      </Div>
    </Div>
  );
};
