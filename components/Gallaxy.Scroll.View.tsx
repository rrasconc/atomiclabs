import { LegacyRef, forwardRef } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { COLORS } from '../constants/theme';
import { GallaxyScrollViewProps } from '../constants/types';

//Scrollview with a background image of a gallaxy
export const GallaxyScrollView = forwardRef(function GallaxyScrollView(
  { children, renderBgImages, ...otherProps }: GallaxyScrollViewProps,
  ref: LegacyRef<ScrollView>
) {
  return (
    <ScrollView {...otherProps} ref={ref} style={styles.container}>
      <View style={styles.bgContainer}>{renderBgImages()}</View>
      {children}
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.background,
  },
  bgImage: {
    zIndex: 1,
    position: 'absolute',
  },
  bgContainer: {
    zIndex: 1,
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
  },
});
