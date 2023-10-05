import { View, StyleSheet, Image } from 'react-native';
import { verticalScale, scale } from 'react-native-size-matters';

import { HeaderText } from './Header.Text';
import { Text } from './Text';
import { BORDER_RADIUS, COLORS, SPACING } from '../constants/theme';
import type { ServiceGroupCardProps } from '../constants/types';

export function ServiceGroupCard({ title, services, image, width }: ServiceGroupCardProps) {
  return (
    <View style={[styles.cardContainer, { width }]}>
      <Image resizeMode="cover" style={styles.img} source={image} />

      <View style={styles.servicesContainer}>
        <View style={styles.separator} />
        <HeaderText style={styles.title}>{title}</HeaderText>

        {services.map((service) => (
          <View key={service} style={styles.serviceContainer}>
            <View style={styles.bulletPoint} />
            <Text>{service}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    paddingVertical: SPACING.medium,
    paddingHorizontal: SPACING.large,
    alignItems: 'center',
    backgroundColor: COLORS.orange,
    borderRadius: BORDER_RADIUS,
    height: verticalScale(400),
    gap: SPACING.medium,
  },
  title: {
    textShadowColor: 'rgba(0, 0, 0, 0.6)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  serviceContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.small,
  },
  servicesContainer: {
    gap: SPACING.small,
    paddingHorizontal: SPACING.large,
  },
  bulletPoint: {
    width: scale(8),
    height: scale(8),
    backgroundColor: COLORS.white,
    borderRadius: 50,
  },
  img: {
    height: scale(180),
    width: scale(180),
  },
  separator: {
    height: verticalScale(3),
    borderRadius: BORDER_RADIUS,
    backgroundColor: COLORS.white,
    width: scale(140),
    alignSelf: 'center',
  },
});
