import { ActivityIndicator, StyleSheet, TouchableOpacity, View } from 'react-native';

import { Text } from './Text';
import { COLORS, SPACING } from '../constants/theme';
import type { ButtonProps } from '../constants/types';

export function PrimaryButton({ text, disabled, loading, ...otherProps }: ButtonProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button, disabled ? styles.disabled : null]} {...otherProps}>
        {!loading && <Text style={styles.text}>{text}</Text>}
        {loading && <ActivityIndicator color={COLORS.white} />}
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
    padding: SPACING.medium,
    paddingHorizontal: SPACING.large * 4,
    backgroundColor: COLORS.orange,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    width: 'auto',
  },
  text: {
    fontWeight: '500',
  },
  disabled: {
    opacity: 0.5,
  },
});
