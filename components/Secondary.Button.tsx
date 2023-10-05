import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { Text } from './Text';
import { BORDER_RADIUS, COLORS, SPACING } from '../constants/theme';
import { ButtonProps } from '../constants/types';

export function SecondaryButton({ text, ...otherProps }: ButtonProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} {...otherProps}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: SPACING.large,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BORDER_RADIUS * 2,
    width: 'auto',
  },
  text: {
    color: COLORS.primary,
    fontWeight: '500',
  },
});
