import { View, StyleSheet, Image } from 'react-native';
import { BORDER_RADIUS, COLORS, FONT, SPACING } from '../constants/theme';
import type { TeamMember } from '../constants/types';
import { Text } from './Text';
import { scale } from 'react-native-size-matters';

export default function TeamMemberCard({ image, name, position }: TeamMember) {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.position}>{position}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: SPACING.large,
    backgroundColor: COLORS.primary,
    borderRadius: BORDER_RADIUS,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#ffff',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.3,
    elevation: 5,
  },
  img: {
    height: scale(120),
    width: scale(120),
  },
  position: {
    fontSize: FONT.small,
    marginTop: SPACING.small,
  },
  name: {
    fontWeight: '500',
    marginTop: SPACING.large,
  },
});
