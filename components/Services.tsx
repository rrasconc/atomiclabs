import { LegacyRef, forwardRef } from 'react';
import { View, StyleSheet } from 'react-native';

import { HeaderText } from './Header.Text';
import { ServicesCarousel } from './Services.Carousel';
import { COLORS, SPACING } from '../constants/theme';
import { ServicesProps } from '../constants/types';

export const Services = forwardRef(function Services(
  { data, onLayout }: ServicesProps,
  ref: LegacyRef<View>
) {
  return (
    <View collapsable={false} onLayout={onLayout} ref={ref} style={styles.container}>
      <View>
        <HeaderText>SOMOS EL BRAZO</HeaderText>
        <HeaderText>
          DERECHO<HeaderText style={styles.highlightText}> DE LA</HeaderText>
        </HeaderText>
        <HeaderText style={styles.highlightText}>TECNOLOGÍA</HeaderText>
      </View>

      <ServicesCarousel data={data} />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    gap: SPACING.large * 2,
    marginVertical: SPACING.large,
  },
  highlightText: {
    color: COLORS.orange,
  },
});
