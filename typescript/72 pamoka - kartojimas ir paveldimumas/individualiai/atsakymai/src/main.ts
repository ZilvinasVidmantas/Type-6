import LandVehicle from './land-vehicle.js';
import AirVehicle from './air-vehicle.js';
import WaterVehicle from './water-vehicle.js';
/*
  1. Sukurkite klasę WaterVehicle, kuri turėtų savybes:
    brand: string,
    model: string,
    year: number,
    maxDepth: number

  2. Sukurkite klasę LandVehicle, kuri turėtų savybes:
    brand: string,
    model: string,
    year: number,
    tires: string[],

  3. Sukurkite klasę AirVehicle, kuri turėtų savybes:
    brand: string,
    model: string,
    year: number,
    maxAltitude: number,

  4. Sukurkite klasę Vehicle ir padarykite ją tėvine [1.], [2.] ir [3.] punktais sukurtoms klasėms.
    4.1 bendras savybes(brand, model, year) aprašykite su 'protected' pasiekiamumo lygiu.
    4.2 perrrašykite visų klasių konstruktorius, jog bendros savybės (brand, model, year) būtų perduotos tėviniam konstruktoriui
    
  5. Vehicle klasėje aprašykite metodą 'public toStringVehicle(): string' kuris suformuotų pagindinė informaciją(brand, model, year)

  6. Vehicle klasėje pakeiskite metodą 'public toStringVehicle(): string' į 'PROTECTED toStringVehicle(): string'. Kiekvienoje paveldinčioje
    klasėje sukurkite metodus 'public toString(): string', kurios naudotų tėvinės klasės metodus metodą 'PROTECTED toStringVehicle(): string'
    tam kad suformuoti pilną savosios klasės reprezentaciją

  7. Tėvinės klasės Vehicle konstruktoriaus parametrus aprašykite objektu, ir perrašykite vaikinių klasių konstruktorius.

  8. Išskaidykite kodą atskirais failais
*/

const vehicles: (LandVehicle | AirVehicle | WaterVehicle)[] = [
  new LandVehicle({
    tires: ['Delux 200 m&s', 'Delux 200 m&s', 'Fairtex 200 m&s', 'Fairtex 200 m&s']
  }, {
    brand: 'Toyota',
    model: 'Corola',
    year: 2005,
  }),
  new LandVehicle({
    tires: ['Delux 200 m&s', 'Delux 200 m&s', 'Fairtex 200 m&s', 'Fairtex 200 m&s']
  }, {
    brand: 'Nisan',
    model: 'Qashqai',
    year: 2007,
  }),
  new AirVehicle({
    maxAltitude: 7000,
  }, {
    brand: 'Jeti',
    model: 'Nitro',
    year: 2015,
  }),
  new AirVehicle({
    maxAltitude: 5000,
  }, {
    brand: 'Falcon',
    model: 'Bamasi',
    year: 2012,
  }),
  new WaterVehicle({
    maxDepth: 50,
  }, {
    brand: 'Sailor',
    model: 'Ocean 3000',
    year: 2011,
  }),
  new WaterVehicle({
    maxDepth: 70,
  }, {
    brand: 'LandScraper',
    model: 'Fagotti',
    year: 202,
  }),
];

vehicles.forEach(v => console.log(v.toString()));