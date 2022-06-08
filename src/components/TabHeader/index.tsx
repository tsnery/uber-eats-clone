import MaskedView from '@react-native-masked-view/masked-view';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';
import {Tabs} from '../Tabs';
import {TTabHeaderProps} from './types';

export function TabHeader({tabs, opacityAnimationStyle}: TTabHeaderProps) {
  const [measurements, setMeasurements] = React.useState<number[]>(
    new Array(tabs.length).fill(0),
  );

  const backgroundNodeActive = useAnimatedStyle(() => {
    return {
      borderRadius: 24,
      backgroundColor: 'transparent',
      width: measurements[1],
      flex: 1,
    };
  }, [measurements]);

  const maskElement = <Animated.View style={backgroundNodeActive} />;

  return (
    <Animated.View style={[styles.container, opacityAnimationStyle]}>
      <View style={[{...StyleSheet.absoluteFillObject}]}>
        <Tabs
          tabs={tabs}
          onMeasurement={(i, m) => {
            measurements[i] = m;
            setMeasurements([...measurements]);
          }}
        />
      </View>
      <View>
        <Animated.View
          style={[styles.backgroundActive, backgroundNodeActive]}
        />
      </View>
      <MaskedView style={StyleSheet.absoluteFill} maskElement={maskElement}>
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
          }}>
          <Tabs active tabs={tabs} />
        </View>
      </MaskedView>
    </Animated.View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginLeft: 8,
    height: 45,
    marginBottom: 8,
    flexDirection: 'row',
  },
  maskedViewStyle: {
    borderRadius: 24,
    backgroundColor: 'black',
    width: 64,
    flex: 1,
  },
  backgroundActive: {
    borderColor: 'black',
    borderWidth: 1,
  },
});
