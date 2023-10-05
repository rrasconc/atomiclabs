import { View, StyleSheet, DimensionValue } from 'react-native';
import { verticalScale } from 'react-native-size-matters';

import { COLORS, SPACING } from '../constants/theme';
import type { StepperProps } from '../constants/types';

const barHeight = verticalScale(10);

export function Stepper({ children, progress }: StepperProps) {
  const percentage: DimensionValue = `${progress * 100}%`;

  return (
    <View style={styles.container}>
      <View style={styles.dotsContainer}>{children}</View>
      <View style={styles.barContainer}>
        <View style={[styles.progressBar, { width: percentage }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: SPACING.small,
    marginBottom: SPACING.small,
  },
  barContainer: {
    height: barHeight,
    backgroundColor: COLORS.white,
    borderRadius: 15,
    overflow: 'hidden',
  },
  progressBar: {
    height: barHeight,
    backgroundColor: COLORS.orange,
    borderRadius: 15,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
