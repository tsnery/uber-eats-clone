// import {RefObject} from 'react';
import {RefObject} from 'react';
import Animated, {SharedValue} from 'react-native-reanimated';
import {TDefaultTabs} from '../mock/defaultTabs';

export type THeaderProps = {
  scrollY: SharedValue<number>;
  tabs: TDefaultTabs[];
  scrollViewRef: RefObject<Animated.ScrollView>;
};
