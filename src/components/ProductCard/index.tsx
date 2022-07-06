import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TProductCardProps} from './types';
import * as Styles from './styles';

export function ProductCard({product}: TProductCardProps) {
  return (
    <View style={styles.section}>
      <Styles.Title size={24}>{product.name}</Styles.Title>
      {product.products.map(({title, description, price}) => (
        <Styles.Item key={title}>
          <Styles.Title size={24}>{title}</Styles.Title>
          <Styles.Description numberOfLines={2}>
            {description}
          </Styles.Description>
          <Styles.Price>{price}</Styles.Price>
        </Styles.Item>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    padding: 16,
  },
});
