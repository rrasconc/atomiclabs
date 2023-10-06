import Icon from '@expo/vector-icons/FontAwesome';
import { View, StyleSheet } from 'react-native';

import { Text } from './Text';
import { COLORS, FONT } from '../constants/theme';
import { StepDotProps } from '../constants/types';

export function StepDot({ status, size, number, color }: StepDotProps) {
  const fontSize = size === 'large' ? FONT.medium : FONT.small;
  const dotSize = fontSize * 2;

  return (
    <View
      style={[
        styles.container,
        status === 'pending' ? styles.pending : styles.inProgress,
        { height: dotSize, width: dotSize },
        color ? { borderColor: color } : null,
      ]}>
      {status !== 'completed' && (
        <Text style={[styles.text, { fontSize, color: color ?? COLORS.white }]}>{number}</Text>
      )}
      {status === 'completed' && <Icon name="check" size={FONT.small} color={COLORS.white} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: COLORS.orange,
  },
  text: {
    fontWeight: 'bold',
  },
  pending: {
    borderColor: COLORS.white,
  },
  inProgress: {
    backgroundColor: COLORS.orange,
  },
});
