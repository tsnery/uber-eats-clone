import {TDefaultTabs} from '../mock/defaultTabs';

export type TTabProps = {
  tab: TDefaultTabs;
  color: string;
  onMeasurement?: (measurement: number) => void;
};
