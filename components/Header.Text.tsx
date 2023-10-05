import { Text, StyleSheet, TextProps } from 'react-native';
import { COLORS, FONT } from '../constants/theme';

export function HeaderText({ style: customStyle, ...otherProps }: TextProps) {
  const style = [styles.text, customStyle];

  return <Text adjustsFontSizeToFit={true} numberOfLines={1} style={style} {...otherProps} />;
}

const styles = StyleSheet.create({
  text: {
    color: COLORS.white,
    fontSize: FONT.large,
    fontWeight: '700',
    textAlign: 'center',
  },
});
