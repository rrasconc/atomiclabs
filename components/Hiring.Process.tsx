import { View, StyleSheet, Dimensions, Image } from 'react-native';

import { HeaderText } from './Header.Text';
import { COLORS, SPACING } from '../constants/theme';

const peopleSrc = require('../assets/people.png');
const peopleRatio = 416 / 1209;

const { width } = Dimensions.get('window');

export function HiringProcess() {
  return (
    <View style={styles.container}>
      <View>
        <HeaderText>¡TE ENCANTARÁ</HeaderText>
        <HeaderText style={styles.highlightText}> TRABAJAR CON</HeaderText>
        <HeaderText style={styles.highlightText}>NOSOTROS!</HeaderText>
      </View>

      <Image resizeMode="contain" style={styles.peopleImg} source={peopleSrc} />
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
    height: width * peopleRatio,
  },
  highlightText: {
    color: COLORS.orange,
  },
});
