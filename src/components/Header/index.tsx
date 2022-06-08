import React from 'react';
import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';
import {HEADER_IMAGE_HEIGHT} from '../HeaderImage';
import {TabHeader} from '../TabHeader';
import {THeaderProps} from './types';

const ICON_SIZE = 24;
const PADDING = 16;
export const MIN_HEADER_HEIGHT = 45;

export function Header({tabs, scrollY}: THeaderProps) {
  const insets = useSafeAreaInsets();
  const paddingTop = insets.top;

  const translateTitleAnimationStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      scrollY.value,
      [0, HEADER_IMAGE_HEIGHT],
      [HEADER_IMAGE_HEIGHT, 0],
      Extrapolate.CLAMP,
    );
    const translateX = interpolate(
      scrollY.value,
      [0, HEADER_IMAGE_HEIGHT],
      [-(PADDING + ICON_SIZE), 0],
      Extrapolate.CLAMP,
    );
    return {
      transform: [{translateY}, {translateX}],
    };
  });

  const opacityAnimationStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(scrollY.value > HEADER_IMAGE_HEIGHT ? 1 : 0, {
        duration: 200,
      }),
    };
  });

  return (
    <View style={[styles.container, {paddingTop}]}>
      <Animated.View
        style={[
          {...StyleSheet.absoluteFillObject},
          styles.background,
          opacityAnimationStyle,
        ]}
      />
      <View style={styles.header}>
        <TouchableWithoutFeedback>
          <View>
            <Icon name="arrow-left" size={ICON_SIZE} color="white" />
            <Animated.View
              style={[
                {...StyleSheet.absoluteFillObject},
                opacityAnimationStyle,
              ]}>
              <Icon name="arrow-left" size={ICON_SIZE} color="black" />
            </Animated.View>
          </View>
        </TouchableWithoutFeedback>
        <Animated.Text style={[styles.title, translateTitleAnimationStyle]}>
          Miss Miu Europaallee
        </Animated.Text>
        <Icon name="heart" size={ICON_SIZE} color="white" />
      </View>
      <TabHeader {...{tabs, opacityAnimationStyle, scrollY}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  header: {
    flexDirection: 'row',
    height: MIN_HEADER_HEIGHT,
    alignItems: 'center',
    paddingHorizontal: PADDING,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
    marginLeft: PADDING,
    flex: 1,
  },
  background: {
    backgroundColor: '#ffffff',
  },
});
