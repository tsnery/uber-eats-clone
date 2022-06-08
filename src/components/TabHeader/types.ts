import {SharedValue} from 'react-native-reanimated';
import {TDefaultTabs} from '../mock/defaultTabs';

export type TTabHeaderProps = {
  tabs: TDefaultTabs[];
  scrollY: SharedValue<number>;
  opacityAnimationStyle: {
    opacity: 0 | 1;
  };
};
