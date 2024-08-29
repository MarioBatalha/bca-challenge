export interface SpecificationProps {
  vehicleType: string;
  color: string;
  fuel: string;
  transmission: string;
  numberOfDoors: number;
  co2Emissions: string;
  noxEmissions: number;
  numberOfKeys: number;
}

export interface OwnershipProps {
  logBook: string;
  numberOfOwners: number;
  dateOfRegistration: string;
}

export type EquipmentProps =
  | 'Air Conditioning'
  | 'Tyre Inflation Kit'
  | 'Photocopy of V5 Present'
  | 'Navigation HDD'
  | '17 Alloy Wheels'
  | 'Engine Mods/Upgrades'
  | 'Modify/Added Body Parts';

export interface VehicleProps {
  index: number;
  make: string;
  model: string;
  engineSize: string;
  fuel: string;
  year: number;
  mileage: number;
  auctionDateTime: string;
  startingBid: number;
  favourite: boolean;
  readonly details: {
    specification: SpecificationProps;
    ownership: OwnershipProps;
    equipment: EquipmentProps;
  };
}
