import { View, StyleSheet } from 'react-native';
import { Text } from './Text';
import { COLORS, FONT, FOOTER_HEIGHT, SPACING } from '../constants/theme';
import { SocialMediaButton } from './Social.Media.Button';

export function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>© 2020 AtomicLabs. Todos los derechos reservados.</Text>
      <Text style={[styles.text, styles.anchor]}>Aviso de privacidad</Text>

      <View style={styles.socialMediaContainer}>
        <SocialMediaButton icon={'linkedin'} url={'https://www.linkedin.com/company/atomic-32/'} />
        <SocialMediaButton icon={'twitter'} url={'https://twitter.com/Atomic_32'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.medium,
    backgroundColor: COLORS.black,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    gap: SPACING.medium,
    height: FOOTER_HEIGHT,
    bottom: 0,
    right: 0,
    left: 0,
  },
  text: {
    fontSize: FONT.extraSmall,
  },
  anchor: {
    textDecorationLine: 'underline',
  },
  socialMediaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.medium,
  },
});