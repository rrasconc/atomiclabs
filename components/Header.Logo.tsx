import { StyleSheet, Image, View } from 'react-native';
import { SPACING } from '../constants/theme';
import { verticalScale } from 'react-native-size-matters';

const logoImgSrc = require('../assets/logo.png');

export function HeaderLogo() {
  return <Image style={styles.logo} source={logoImgSrc} />;
}

const styles = StyleSheet.create({
  logo: {
    height: verticalScale(28),
    resizeMode: 'contain',
  },
});
