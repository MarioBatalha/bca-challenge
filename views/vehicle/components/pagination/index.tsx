import { Button, Div } from '@stylin.js/elements';
import { FC, } from 'react';
import { PAGE_NUMBER } from '@/constants';
import { useVehicle } from '@/constants/context';
import { v4 } from 'uuid';

const Pagination: FC = () => {
  const { handlePagination, vehicles } = useVehicle();
  return (
    <Div
      position="relative"
      display="flex"
      gap="0.5rem"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      width="100vw"
    >
      {PAGE_NUMBER.map((value) => {
        return (
          <Button
            key={v4()}
            p="0.5rem"
            mr="0.5rem "
            height="2rem"
            display="flex"
            color="#0053DB"
            fontSize="1rem"
            alignItems="center"
            background="#FFFFFF"
            borderRadius="0.25rem"
            textTransform="capitalize"
            border="1px solid #E0E0D7"
            justifyContent="space-between"
            cursor="pointer"
            maxWidth="3rem"
            textAlign={['left', 'left', 'left', 'right']}
            onClick={( ) => {
              handlePagination(vehicles, value)}
            }
          >
            {value}
          </Button>
        );
      })}
    </Div>
  );
};

export default Pagination;
