import {FlashList, ListRenderItem} from '@shopify/flash-list';
import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import Animated, {useAnimatedScrollHandler, useSharedValue} from 'react-native-reanimated';
import { CustomCellRendererComponent } from '../../components/CustomCellRendererComponent';
import { Header } from '../../components/Header';
import {HeaderImage} from '../../components/HeaderImage';
import {ListHeaderComponent} from '../../components/ListHeaderComponent';
import {menu, TMenu} from '../../mock/menu';
import {ProductCard} from '../../components/ProductCard';
import { useTabs } from '../../hooks/useTabs';

export type TCustomRendererComponent = ViewProps & {
  children: React.PureComponent;
}

const Marketplace = () => {
  const [menus] = React.useState(menu);
  const scrollY = useSharedValue(0);
  // eslint-disable-next-line prettier/prettier
  const AnimatedFlashList = Animated.createAnimatedComponent(FlashList<TMenu>);
  const flashListRef = React.useRef<FlashList<TMenu>>(null);
  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const onMeasurement = useTabs(store => store.onMeasurement);
  React.useLayoutEffect(() => {
    menus.forEach((item, index) => onMeasurement(index, { name: item.name, anchor: index * 1000 }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const listHeaderComponent = () => {
    return <ListHeaderComponent scrollY={scrollY} />;
  };

  const renderItem: ListRenderItem<TMenu> = (props) => {
    return <ProductCard product={props.item} />;
  };

  return (
    <View style={styles.container}>
      <HeaderImage scrollY={scrollY} />
      <AnimatedFlashList
        data={menus}
        ref={flashListRef}
        renderItem={renderItem}
        onScroll={onScroll}
        CellRendererComponent={CustomCellRendererComponent}
        ListHeaderComponent={listHeaderComponent}
        estimatedItemSize={400}
      />
      <Header scrollY={scrollY} scrollViewRef={flashListRef} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Marketplace;
