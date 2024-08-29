import data from './vehicles_dataset.json';

export const STARTING_BID = data.map(({ startingBid }) => startingBid);
// eslint-disable-next-line prefer-spread
export const MIN_BID: number = Math.min.apply(Math, STARTING_BID);
// eslint-disable-next-line prefer-spread
export const MAX_BID: number = Math.max.apply(Math, STARTING_BID);
export const PAGE_SIZE = 25;
export const PAGE_NUMBER = [
  1,
  2,
  3,
  4,
  ,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
];

export const SORT_OPTION = [
  'make',
  'starting bid',
  'mileage',
  'auction date time',
];

export const ALL_MAKE = [
  ...new Set(data.map((vehicle: { make: string }) => vehicle.make)),
];

export const ALL_MODEL = [
  ...new Set(data.map((vehicle: { model: string }) => vehicle.model)),
];

export const SORT_LIST = ['make', 'startingBid', 'milage', 'auctionDate'];

export * from './routes';
