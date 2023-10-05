import { StyleSheet, TouchableOpacityProps, TouchableOpacity, View } from 'react-native';

import { Text } from './Text';
import { BORDER_RADIUS, COLORS, SPACING } from '../constants/theme';

interface SecondaryButtonProps extends TouchableOpacityProps {
  text: string;
}

export function SecondaryButton({ text, ...otherProps }: SecondaryButtonProps) {
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
