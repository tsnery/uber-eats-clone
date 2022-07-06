import {menu} from './menu';

export type TDefaultTabs = {
  name: string;
  anchor: number;
};

export const defaultTabs: TDefaultTabs[] = menu.map(({name}) => ({
  name,
  anchor: 0,
}));
