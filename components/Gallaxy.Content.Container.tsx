import { useHeaderHeight } from '@react-navigation/elements';
import { View, StyleSheet, ViewProps } from 'react-native';

import { FOOTER_HEIGHT, SPACING } from '../constants/theme';
export function GallaxyContentContainer({ ...viewProps }: ViewProps) {
  const headerHeight = useHeaderHeight();

  return (
    <View
      {...viewProps}
      style={[styles.container, { paddingTop: headerHeight + SPACING.medium }]}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 2,
    flex: 1,
    padding: SPACING.medium,
    gap: SPACING.medium,
    paddingBottom: FOOTER_HEIGHT,
  },
});
