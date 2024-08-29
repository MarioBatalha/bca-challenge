import { useParams } from "next/navigation";

export enum RoutesEnum {
  Home = 'home',
  VehicleDetails = 'vehicle/details',
}


export const Routes: Record<RoutesEnum, string> = {
  [RoutesEnum.Home]: '/',
  [RoutesEnum.VehicleDetails]: '/vehicle/details',
};
