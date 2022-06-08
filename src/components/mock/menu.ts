import {products, TProducts} from './products';

export type TMenu = {
  name: string;
  products: TProducts[];
};

export const menu: TMenu[] = [
  {name: 'Starters', products},
  {name: 'Order Again', products},
  {name: 'Picked for you', products},
  {name: 'Gimbap Sushi', products},
  {name: 'Teste', products},
];
