import { View, StyleSheet, Dimensions, Image } from 'react-native';

import { HeaderText } from './Header.Text';
import { IMAGES, PEOPLE_IMG_RATIO } from '../constants/files';
import { COLORS, SPACING } from '../constants/theme';

const { width } = Dimensions.get('window');

export function HiringProcess() {
  return (
    <View style={styles.container}>
      <View>
        <HeaderText>¡TE ENCANTARÁ</HeaderText>
        <HeaderText style={styles.highlightText}> TRABAJAR CON</HeaderText>
        <HeaderText style={styles.highlightText}>NOSOTROS!</HeaderText>
      </View>

      <Image resizeMode="contain" style={styles.peopleImg} source={IMAGES.people} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: SPACING.large * 2,
    marginVertical: SPACING.large,
  },
  peopleImg: {
    alignSelf: 'center',
    width: '100%',
    height: width * PEOPLE_IMG_RATIO,
  },
  highlightText: {
    color: COLORS.orange,
  },
});
