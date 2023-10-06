import { View, StyleSheet, Image } from 'react-native';
import { verticalScale, scale } from 'react-native-size-matters';

import { HeaderText } from './Header.Text';
import { Text } from './Text';
import { BORDER_RADIUS, COLORS, FONT, SPACING } from '../constants/theme';
import type { ServiceGroupCardProps } from '../constants/types';

export function ServiceGroupCard({ title, services, image, width }: ServiceGroupCardProps) {
  return (
    <View style={[styles.container, { width }]}>
      <View style={styles.card}>
        <Image resizeMode="cover" style={styles.img} source={image} />
        <View style={styles.servicesContainer}>
          <View style={styles.separator} />
          <HeaderText style={styles.title}>{title}</HeaderText>

          {services.map((service) => (
            <View key={service} style={styles.serviceContainer}>
              <View style={styles.bulletPoint} />
              <Text style={styles.text}>{service}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.medium,
  },
  card: {
    paddingVertical: SPACING.medium,
    paddingHorizontal: SPACING.large,
    alignItems: 'center',
    backgroundColor: COLORS.orange,
    borderRadius: BORDER_RADIUS,
    height: verticalScale(400),
    gap: SPACING.extraSmall,
    flex: 1,
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
    height: scale(170),
    width: scale(170),
  },
  separator: {
    height: verticalScale(3),
    borderRadius: BORDER_RADIUS,
    backgroundColor: COLORS.white,
    width: scale(140),
    alignSelf: 'center',
  },
  text: {
    fontSize: FONT.small,
  },
});
