import {TDefaultTabs} from '../mock/defaultTabs';

export type TTabsProps = {
  tabs: TDefaultTabs[];
  active?: boolean;
  onMeasurement?: (index: number, measurement: number) => void;
};
