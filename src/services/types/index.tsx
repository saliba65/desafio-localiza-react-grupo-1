export interface User {
    cpf: string,
    id: number
    name: string,
    role: 'Person' | 'Operator'
    token: string,
}

export interface UserRegistration {
  name: string,
  cpf: string,
  password: string,
  birthay: string,
  cep: string,
  logradouro: string,
  number: number,
  city: string,
  complement: string,
  state: string
}

export interface ApiAvailableCar {
  id: number,
  board: string,
  hourPrice: number,
  luggageCapacity: number,
  tankCapacity: number,
  brand: string,
  category: string,
  fuel: number,
  model: string,
  dateTimeExpectedNextCollected: string,
  images?: string[]
}

export type FuelType = 'energy' | 'hybrid' | 'gasoline';

export interface AppAvailableCar {
    id: number,
    model: string,
    brand: string,
    dailyRate: number,
    imageArray: string[],
    fuelType: FuelType,
}
