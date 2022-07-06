import React from 'react';
import {LayoutChangeEvent} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';

export const useLayout = () => {
  const y = useSharedValue(0);
  const x = useSharedValue(0);
  const width = useSharedValue(0);
  const height = useSharedValue(0);

  const onLayout = React.useCallback(({nativeEvent}: LayoutChangeEvent) => {
    const {layout} = nativeEvent;
    x.value = layout.x;
    y.value = layout.y;
    width.value = layout.width;
    height.value = layout.height;
  }, []);

  return {
    onLayout,
    width,
    height,
    x,
    y,
  };
};
