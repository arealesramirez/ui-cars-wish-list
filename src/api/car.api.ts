import { api } from "./base.api";

import { Car } from './../models/car.model';

function getCars() {
  return api.get("car/").then((res) => res.data);
}

function createCar(data: Car) {
  return api.post('car/new', data);
};

export { 
  getCars,
  createCar 
};
