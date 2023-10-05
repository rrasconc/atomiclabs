import { View, StyleSheet } from 'react-native';
import { HeaderText } from './Header.Text';
import { COLORS, FONT } from '../constants/theme';

export function Slogan() {
  return (
    <View>
      <HeaderText style={styles.text}>Desarrolla todo</HeaderText>
      <HeaderText style={[styles.highlightText, styles.text]}>tu POTENCIAL</HeaderText>
      <HeaderText>dentro del equipo</HeaderText>
      <HeaderText style={[styles.highlightText, styles.text]}>
        ATOMIC<HeaderText>LABS</HeaderText>
      </HeaderText>
    </View>
  );
}

const styles = StyleSheet.create({
  highlightText: {
    color: COLORS.orange,
  },
  text: {
    fontSize: FONT.extraLarge,
  },
});
