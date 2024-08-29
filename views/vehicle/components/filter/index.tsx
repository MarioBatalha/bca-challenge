import { Button, Div, H1, Input, Label, Span } from '@stylin.js/elements';
import { FC } from 'react';

import { ALL_MAKE, ALL_MODEL, MAX_BID, MIN_BID, SORT_OPTION } from '@/constants';
import { useVehicle } from '@/constants/context';
import { Sort } from '@/views/vehicle/components/sort';

import { formatPrice } from '../../../../utils';
import Dropdown from '../dropdown';

export const Filter: FC = () => {
  const {
    make,
    form,
    model,
    bidValue,
    handleFavourite,
    handleFilterByMake,
    handleFilterByModel,
    handleFilterByRange,
  } = useVehicle();

  const { register, setValue } = form;
  return (
    <Div borderRadius="0.5rem" width={['90%', '90%', '90%', '20%']}>
      <Div
        p="0.5rem"
        bg="#dbe1ff"
        width="100%"
        display="flex"
        minHeight="100%"
        alignItems="center"
        borderRadius="0.5rem"
        flexDirection="column"
        justifyContent="center"
      >
        <Div
          width="100%"
          gap="0.5rem"
          display="flex"
          alignItems="flex-start"
          flexDirection="column"
          justifyContent="flex-start"
        >
          <H1 fontWeight="400" fontSize="1.5rem">
            Filters
          </H1>
        </Div>
        <Div
          width="100%"
          my="1rem"
          gap="0.5rem"
          display="flex"
          flexWrap="wrap"
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <H1 fontWeight="400" color="#5F5F5B" fontSize="1rem">
            Filters by make:
          </H1>
          <Dropdown
            menuItems={ALL_MAKE}
            defaultValue={make}
            onSelect={(make) => handleFilterByMake(make)}
          />
          <H1 fontWeight="400" color="#5F5F5B" fontSize="1rem">
            Filters by model:
          </H1>
          <Dropdown
            menuItems={ALL_MODEL.map((model: string) => model)}
            defaultValue={model}
            onSelect={(model) => handleFilterByModel(model)}
          />
          <Div
            gap="0.5rem"
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <H1 fontWeight="400" color="#5F5F5B" fontSize="1rem">
              Filters by Favourite:
            </H1>
            <Button
              p="0.5rem"
              color="#FFF"
              bg="#0053DB"
              border="none"
              cursor="pointer"
              borderRadius="0.5rem"
              onClick={handleFavourite}
            >
              Favourites
            </Button>
          </Div>
        </Div>
        <Div
          gap="0.5rem"
          width="100%"
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <Div
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Label htmlFor="bid" color="#5F5F5B" fontSize="1rem">
              Bid range:
            </Label>
            <H1 color="#5F5F5B" fontWeight="400" fontSize="1rem">
              {formatPrice(bidValue)}
            </H1>
          </Div>
          <Input
            {...register('bidValue')}
            name="bid"
            width="100%"
            type="range"
            cursor="pointer"
            onChange={(e) => {
              const value = e.target.value;
              setValue('bidValue', value);
              handleFilterByRange(bidValue);
            }}
            borderRadius="0.5rem"
            min={MIN_BID}
            max={MAX_BID}
          />
          <Div
            width="100%"
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Span fontSize="1rem">{formatPrice(MIN_BID)}</Span>
            <Span fontSize="1rem">{formatPrice(MAX_BID)}</Span>
          </Div>
        </Div>
        <Div my="1rem" width="100%" border="1px solid #F4F4F4"></Div>
        <Sort
          label="sort"
          menuItems={SORT_OPTION.map((model: string) => model)}
          defaultValue={SORT_OPTION[0]}
          onSelect={(model: any) => handleFilterByModel(model)}
        />
      </Div>
    </Div>
  );
};
