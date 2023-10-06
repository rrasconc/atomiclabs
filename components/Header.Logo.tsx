import { StyleSheet, Image } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

import { IMAGES } from '../constants/files';

export function HeaderLogo() {
  return <Image style={styles.logo} source={IMAGES.logo} />;
}

const styles = StyleSheet.create({
  logo: {
    height: verticalScale(28),
    resizeMode: 'contain',
    width: scale(200),
  },
});
