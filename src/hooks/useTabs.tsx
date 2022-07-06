import create from 'zustand';
import {devtools} from 'zustand/middleware';
import {TDefaultTabs} from '../components/mock/defaultTabs';

interface TabsState {
  tabs: TDefaultTabs[];
  onMeasurement: (index: number, {name, anchor}: TDefaultTabs) => void;
  onAddAnchor: (index: number, anchor: number) => void;
}

export const useTabs = create<TabsState>()(
  devtools(set => {
    return {
      tabs: [],
      onMeasurement: (index: number, {name, anchor}: TDefaultTabs) => {
        set(state => {
          const tabs = [...state.tabs, {name, anchor}];
          tabs[index] = {name, anchor};
          state.tabs = tabs;
          return {...state, tabs};
        });
      },
      onAddAnchor: (index: number, anchor: number) => {
        set(state => {
          return {
            tabs: [
              ...state.tabs.map((tab, tabIndex) => {
                if (tabIndex === index) {
                  return {
                    ...tab,
                    anchor,
                  };
                } else {
                  return tab;
                }
              }),
            ],
          };
        });
      },
    };
  }),
);
