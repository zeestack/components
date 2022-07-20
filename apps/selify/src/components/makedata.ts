/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { faker } from '@faker-js/faker';

export interface Product {
  id: number;
  partno: string;
  name: string;
  price: string;
  description: string;
  manufacturer: string;
  subRows?: Product[];
}

const range = (len: number) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newProduct = (): Product => {
  return {
    description: faker.commerce.productName(),
    id: parseInt(faker.random.numeric()),
    manufacturer: faker.commerce.productName(),
    name: faker.commerce.productName(),
    partno: faker.random.word(),
    price: faker.commerce.price(),
  };
};

export function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Product[] => {
    const len = lens[depth]!;
    return range(len).map((d): Product => {
      return {
        ...newProduct(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}
