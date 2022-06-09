import {RefObject} from 'react';
import Animated, {SharedValue} from 'react-native-reanimated';
import {TDefaultTabs} from '../mock/defaultTabs';

export type TTabHeaderProps = {
  tabs: TDefaultTabs[];
  scrollY: SharedValue<number>;
  scrollViewRef: RefObject<Animated.ScrollView>;
  opacityAnimationStyle: {
    opacity: 0 | 1;
  };
};
