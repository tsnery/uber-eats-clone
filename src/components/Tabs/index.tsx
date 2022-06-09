import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Tab} from '../Tab';
import {TTabsProps} from './types';

export function Tabs({tabs, active, onMeasurement, onPress}: TTabsProps) {
  return (
    <View style={styles.overlay}>
      {tabs.map((tab, index) => (
        <Tab
          onMeasurement={
            onMeasurement ? onMeasurement.bind(null, index) : undefined
          }
          key={index}
          tab={tab}
          onPress={onPress ? onPress.bind(null, index) : undefined}
          color={active ? '#ffffff' : 'black'}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
  },
});
