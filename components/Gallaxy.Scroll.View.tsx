import { ImageBackground, ScrollView, ScrollViewProps, StyleSheet } from 'react-native';
import { COLORS, FOOTER_HEIGHT, SPACING } from '../constants/theme';
import { LegacyRef, forwardRef } from 'react';

const gallaxyImgSrc = require('../assets/gallaxy.png');

//Scrollview with a background image of a gallaxy
export const GallaxyScrollView = forwardRef(function GallaxyScrollView(
  { ...otherProps }: ScrollViewProps,
  ref: LegacyRef<ScrollView>
) {
  return (
    <ScrollView
      {...otherProps}
      ref={ref}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    />
  );
});

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.background,
  },
  contentContainer: {
    padding: SPACING.medium,
    gap: SPACING.medium,
    paddingBottom: FOOTER_HEIGHT,
  },
});
