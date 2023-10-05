import { StyleSheet, TouchableOpacityProps, TouchableOpacity, View } from 'react-native';
import { Text } from './Text';
import { COLORS, FONT, SPACING } from '../constants/theme';
import Icons from '@expo/vector-icons/Ionicons';

interface ScrollDownButton extends TouchableOpacityProps {
  text: string;
}

export function ScrollDownButton({ text, ...otherProps }: ScrollDownButton) {
  return (
    <TouchableOpacity style={styles.container} {...otherProps}>
      <View style={styles.iconContainer}>
        <Icons size={FONT.large} name="chevron-down" />
      </View>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: SPACING.small,
  },
  iconContainer: {
    backgroundColor: COLORS.white,
    padding: SPACING.small,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: '600',
  },
});
