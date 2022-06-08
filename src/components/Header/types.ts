// import {RefObject} from 'react';
import {SharedValue} from 'react-native-reanimated';
import {TDefaultTabs} from '../mock/defaultTabs';

export type THeaderProps = {
  scrollY: SharedValue<number>;
  tabs: TDefaultTabs[];
  // scrollView: RefObject<Animated.ScrollView>
};
