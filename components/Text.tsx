import { Text as DefaultText, StyleSheet, TextProps } from 'react-native';

import { COLORS, FONT } from '../constants/theme';

export function Text({ style: customStyle, ...otherProps }: TextProps) {
  const style = [styles.text, customStyle];

  return <DefaultText style={style} {...otherProps} />;
}

const styles = StyleSheet.create({
  text: {
    color: COLORS.white,
    fontSize: FONT.medium,
  },
});
