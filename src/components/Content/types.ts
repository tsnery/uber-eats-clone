import {SharedValue} from 'react-native-reanimated';
import {TDefaultTabs} from '../mock/defaultTabs';

export type TContentProps = {
  onMeasurement: (index: number, tab: TDefaultTabs) => void;
  scrollY: SharedValue<number>;
};
