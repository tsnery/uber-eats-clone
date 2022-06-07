import React from 'react';
import {Image, StyleSheet, Dimensions} from 'react-native';

const backgroundImage = require('../../../assets/images/background.jpeg');
const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

export const HEADER_IMAGE_HEIGHT = windowHeight / 3;

export function HeaderImage() {
  return <Image source={backgroundImage} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: windowWidth,
    height: HEADER_IMAGE_HEIGHT,
    resizeMode: 'cover',
  },
});
