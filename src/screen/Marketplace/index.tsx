import React from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import {Content} from '../../components/Content';
import {Header} from '../../components/Header';
import {HeaderImage} from '../../components/HeaderImage';
import {defaultTabs, TDefaultTabs} from '../../components/mock/defaultTabs';

const Marketplace = () => {
  const [tabs, setTabs] = React.useState<TDefaultTabs[]>(defaultTabs);
  const scrollViewRef = React.useRef<Animated.ScrollView>(null);
  const scrollY = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      scrollY.value = event.contentOffset.y;
    },
  });
  return (
    <View style={styles.container}>
      <HeaderImage scrollY={scrollY} />
      <Animated.ScrollView
        ref={scrollViewRef}
        style={StyleSheet.absoluteFill}
        scrollEventThrottle={1}
        {...{onScroll}}>
        <Content
          scrollY={scrollY}
          onMeasurement={(index, tab) => {
            tabs[index] = tab;
            setTabs([...tabs]);
          }}
        />
      </Animated.ScrollView>
      <Header {...{scrollY, tabs, scrollViewRef}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Marketplace;
