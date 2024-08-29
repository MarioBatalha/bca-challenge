import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';
import { useForm, useWatch } from 'react-hook-form';

import { VehicleForm } from '@/views/vehicle/components/filter/filter.types';
import { VehicleProps } from '@/views/vehicle/vehicle.types';

import { ALL_MAKE, ALL_MODEL, MIN_BID, PAGE_SIZE } from '..';
import data from '../vehicles_dataset.json';

const vehicleContext = createContext<unknown>([]);

export const VehicleProvider: FC<PropsWithChildren> = ({ children }) => {
  const [vehicles, setVehicles] = useState<
    VehicleProps[] | string | number | unknown
  >(data);
  const defaultImage =
    'https://icrier.org/wp-content/uploads/2022/09/Event-Image-Not-Found.jpg';
  const form = useForm<VehicleForm>({
    defaultValues: {
      search: '',
      make: ALL_MAKE[0],
      model: ALL_MODEL[0],
      bidValue: MIN_BID,
      imageUrl: null,
    },
  });

  const { control, setValue, getValues, register } = form;
  const make: string = useWatch({
    control,
    name: 'make',
  });

  const model: string = useWatch({
    control,
    name: 'model',
  });

  const imageUrl: string = useWatch({
    control,
    name: 'imageUrl',
  });

  const image = getValues('imageUrl')

  const bidValue: number = useWatch({
    control,
    name: 'bidValue',
  });

  const handleFilterByMake = (make: string) => {
    const vehicles = data.map((item: object) => item);
    const newMakeList = vehicles.filter((vehicle) => vehicle.make === make);
    setValue('make', make);
    setVehicles(newMakeList);
  };

  const handleFilterByModel = (model: string) => {
    const vehicle = data.map((item: object) => item);
    const newModelList = vehicle.filter((vehicle) => vehicle.model === model);
    setValue('model', model);
    setVehicles(newModelList);
  };

  const handleFilterByRange = (bidValue: number) => {
    const newRangeList = data.filter((value) => value.startingBid <= bidValue);
    setVehicles(newRangeList);
  };

  const handleFavourite = () => {
    const filteredItems = data.filter(
      (item: { favourite: boolean }) => item.favourite
    );
    setVehicles(filteredItems);
  };

  const handlePagination = (
    vehicles: [],
    pageNumber: number
  ) => {
    const pag = vehicles.slice((pageNumber - 1) * PAGE_SIZE, pageNumber * PAGE_SIZE);
    console.log('Pagination >> ', pag);
    return pag;
  };

  return (
    <vehicleContext.Provider
      value={{
        make,
        model,
        form,
        vehicles,
        setValue,
        imageUrl,
        bidValue,
        register,
        setVehicles,
        defaultImage,
        handleFavourite,
        handlePagination,
        handleFilterByMake,
        handleFilterByModel,
        handleFilterByRange,
      }}
    >
      {children}
    </vehicleContext.Provider>
  );
};

export const useVehicle = () => useContext(vehicleContext);
