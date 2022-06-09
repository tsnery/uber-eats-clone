import {TDefaultTabs} from '../mock/defaultTabs';

export type TTabsProps = {
  tabs: TDefaultTabs[];
  active?: boolean;
  onPress?: (index: number) => void;
  onMeasurement?: (index: number, measurement: number) => void;
};
