import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {TTabProps} from './types';

export function Tab({tab, color, onMeasurement}: TTabProps) {
  return (
    <TouchableWithoutFeedback>
      <View
        style={styles.container}
        onLayout={
          onMeasurement
            ? ({
                nativeEvent: {
                  layout: {width},
                },
              }) => onMeasurement(width)
            : undefined
        }>
        <Text style={[styles.text, {color}]}>{tab.name}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 45,
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  text: {
    fontSize: 14,
  },
});
