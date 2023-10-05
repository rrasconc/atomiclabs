import Icon from '@expo/vector-icons/FontAwesome';
import { View, StyleSheet, TextInput as DefaultTextInput } from 'react-native';

import { Text } from './Text';
import { globalStyles } from '../constants/styles';
import { BORDER_RADIUS, COLORS, FONT, SPACING } from '../constants/theme';
import type { TextInputProps } from '../constants/types';

export function TextInput({ label, error, ...otherProps }: TextInputProps) {
  return (
    <View style={styles.container}>
      <Text style={globalStyles.label}>{label}</Text>
      <View
        style={[styles.textInputContainer, { borderColor: error ? COLORS.danger : COLORS.white }]}>
        <DefaultTextInput style={styles.textInput} {...otherProps} />
        <View style={{ marginLeft: 'auto', backgroundColor: COLORS.white, padding: SPACING.small }}>
          <Icon size={FONT.medium} name="lock" />
        </View>
      </View>
      <Text style={styles.textError}>{error}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: SPACING.small,
  },
  textInputContainer: {
    backgroundColor: COLORS.white,
    borderRadius: BORDER_RADIUS / 2,
    paddingHorizontal: SPACING.medium,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
  },
  textInput: {
    fontSize: FONT.medium,
    flex: 1,
  },
  textError: {
    color: COLORS.danger,
    fontSize: FONT.small,
    fontWeight: '700',
    marginTop: -SPACING.extraSmall,
  },
});
