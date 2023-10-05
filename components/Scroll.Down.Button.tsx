import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { scale } from 'react-native-size-matters';

import { Text } from './Text';
import type { ScrollDownButtonProps } from '../constants/types';

const chevronImg = require('../assets/chevron.png');

export function ScrollDownButton({ text, ...otherProps }: ScrollDownButtonProps) {
  return (
    <TouchableOpacity style={styles.container} {...otherProps}>
      <Image style={styles.icon} source={chevronImg} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: scale(50),
    width: scale(50),
  },
  text: {
    fontWeight: '600',
  },
});
