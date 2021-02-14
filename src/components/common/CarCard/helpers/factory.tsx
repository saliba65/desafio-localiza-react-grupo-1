import { IProps } from '../types';

export const defaultCar = 'huracan';
export const defaultBrand = 'lamborghini';
export const defaultDailyRate = 520;
export const defaultImageArray = [
  'https://via.placeholder.com/160x92',
  'https://via.placeholder.com/160x92',
];
export const defaultFuelType = 'energy';

export const createCarCardProps = (customizedProps? : Partial<IProps>) : IProps => ({
  car: defaultCar,
  brand: defaultBrand,
  dailyRate: defaultDailyRate,
  imageArray: defaultImageArray,
  fuelType: defaultFuelType,
  ...customizedProps,
});

export default createCarCardProps;