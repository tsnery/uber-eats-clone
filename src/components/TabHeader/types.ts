import {TDefaultTabs} from '../mock/defaultTabs';

export type TTabHeaderProps = {
  tabs: TDefaultTabs[];
  opacityAnimationStyle: {
    opacity: 0 | 1;
  };
};
