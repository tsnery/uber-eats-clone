import React from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import Animated from 'react-native-reanimated'
import Icon from 'react-native-vector-icons/Feather'
import { HEADER_IMAGE_HEIGHT } from '../HeaderImage'
import { THeaderProps } from './types'

const ICON_SIZE = 24
const PADDING = 16
export const MIN_HEADER_HEIGHT = 45

export function Header() {
  return (
    <View style={styles.container}>
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: "white",
        }}
      />
      <View style={styles.header}>
        <TouchableWithoutFeedback>
          <View>
            <Icon name="arrow-left" size={ICON_SIZE} color="white" />
            <View
              style={{ ...StyleSheet.absoluteFillObject}}
            >
              <Icon name="arrow-left" size={ICON_SIZE} color="black" />
            </View>
          </View>
        </TouchableWithoutFeedback>
        <Text
          style={styles.title}
        >
          Miss Miu Europaallee
        </Text>
        <Icon name="heart" size={ICON_SIZE} color="white" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  header: {
    flexDirection: "row",
    height: MIN_HEADER_HEIGHT,
    alignItems: "center",
    paddingHorizontal: PADDING,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    marginLeft: PADDING,
    flex: 1,
  },
})