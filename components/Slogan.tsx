import { View, StyleSheet } from 'react-native';

import { HeaderText } from './Header.Text';
import { COLORS, FONT, SPACING } from '../constants/theme';

export function Slogan() {
  return (
    <View style={styles.container}>
      <HeaderText style={styles.text}>Desarrolla todo</HeaderText>
      <HeaderText style={[styles.highlightText, styles.text]}>tu POTENCIAL</HeaderText>
      <HeaderText style={styles.text}>dentro del equipo</HeaderText>
      <HeaderText style={[styles.highlightText, styles.text]}>
        ATOMIC<HeaderText style={styles.text}>LABS</HeaderText>
      </HeaderText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: -SPACING.small,
  },
  highlightText: {
    color: COLORS.orange,
  },
  text: {
    fontSize: FONT.extraLarge,
  },
});
