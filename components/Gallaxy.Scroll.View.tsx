import { useNavigation } from '@react-navigation/native';
import { LegacyRef, forwardRef, useState } from 'react';
import {
  type NativeScrollEvent,
  type NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import { COLORS } from '../constants/theme';
import { GallaxyScrollViewProps } from '../constants/types';

//Scrollview with a background image of a gallaxy
export const GallaxyScrollView = forwardRef(function GallaxyScrollView(
  { children, renderBgImages, ...otherProps }: GallaxyScrollViewProps,
  ref: LegacyRef<ScrollView>
) {
  const navigation = useNavigation();
  const [prevScrollY, setPrevScrollY] = useState(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    let backgroundColor = 'transparent';
    const currentScrollY = event.nativeEvent.contentOffset.y;

    if (currentScrollY > 0 && currentScrollY > prevScrollY) {
      backgroundColor = COLORS.background;
    }

    navigation.setOptions({
      headerStyle: {
        backgroundColor,
      },
    });
    setPrevScrollY(currentScrollY);
  };

  return (
    <ScrollView onScroll={handleScroll} {...otherProps} ref={ref} style={styles.container}>
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
