import {FlashList} from '@shopify/flash-list';
import {RefObject} from 'react';
import {SharedValue} from 'react-native-reanimated';
import {TDefaultTabs} from '../../mock/defaultTabs';
import {TMenu} from '../../mock/menu';

export type TTabHeaderProps = {
  tabs: TDefaultTabs[];
  scrollY: SharedValue<number>;
  scrollViewRef: RefObject<FlashList<TMenu>>;
  opacityAnimationStyle: {
    opacity: 0 | 1;
  };
};
