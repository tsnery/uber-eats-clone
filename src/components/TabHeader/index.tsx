import MaskedView from '@react-native-masked-view/masked-view';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import {Tabs} from '../Tabs';
import {TTabHeaderProps} from './types';

export function TabHeader({
  tabs,
  opacityAnimationStyle,
  scrollY,
  scrollViewRef,
}: TTabHeaderProps) {
  const [measurements, setMeasurements] = React.useState<number[]>(
    new Array(tabs.length).fill(0),
  );

  const index = useDerivedValue(() => {
    let value: number = 0;
    tabs.map((tab, i) => {
      if (i === tabs.length - 1 && scrollY.value > tab.anchor) {
        value = i;
      } else if (
        scrollY.value > tab.anchor &&
        scrollY.value < tabs[i + 1].anchor
      ) {
        value = i;
      }
    });
    return value;
  }, [tabs, scrollY.value]);

  const backgroundNodeActive = useAnimatedStyle(() => {
    const width = interpolate(
      index.value,
      tabs.map((_, i) => i),
      measurements,
    );
    return {
      borderRadius: 24,
      backgroundColor: 'transparent',
      width,
      flex: 1,
    };
  }, [index, tabs, measurements]);

  const translateTabsAnimation = useAnimatedStyle(() => {
    const translateX = interpolate(
      index.value,
      tabs.map((_, i) => i),
      tabs.map((_, i) => {
        return (
          -1 *
            measurements
              .filter((__, j) => j < i)
              .reduce((acc, m) => acc + m, 0) -
          8 * i
        );
      }),
    );
    return {
      transform: [{translateX: withTiming(translateX)}],
    };
  });

  const maskElement = <Animated.View style={backgroundNodeActive} />;

  return (
    <Animated.View style={[styles.container, opacityAnimationStyle]}>
      <Animated.View
        style={[{...StyleSheet.absoluteFillObject}, translateTabsAnimation]}>
        <Tabs
          tabs={tabs}
          onMeasurement={(i, m) => {
            measurements[i] = m;
            setMeasurements([...measurements]);
          }}
        />
      </Animated.View>
      <View>
        <Animated.View
          style={[styles.backgroundActive, backgroundNodeActive]}
        />
      </View>
      <MaskedView style={[StyleSheet.absoluteFill]} maskElement={maskElement}>
        <Animated.View
          style={[
            {
              ...StyleSheet.absoluteFillObject,
            },
            translateTabsAnimation,
          ]}>
          <Tabs
            active
            tabs={tabs}
            onPress={i => {
              if (scrollViewRef.current) {
                scrollViewRef.current.scrollToOffset({
                  offset: tabs[i].anchor + 1,
                  animated: true,
                });
                // scrollViewRef.current.scrollTo({y: tabs[i].anchor + 1});
              }
            }}
          />
        </Animated.View>
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
