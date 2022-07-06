// import {RefObject} from 'react';
import {FlashList} from '@shopify/flash-list';
import {RefObject} from 'react';
import {SharedValue} from 'react-native-reanimated';
import {TMenu} from '../mock/menu';

export type THeaderProps = {
  scrollY: SharedValue<number>;
  scrollViewRef: RefObject<FlashList<TMenu>>;
};
