import {TDefaultTabs} from '../../mock/defaultTabs';

export type TTabProps = {
  tab: TDefaultTabs;
  color: string;
  onPress?: () => void;
  onMeasurement?: (measurement: number) => void;
};
