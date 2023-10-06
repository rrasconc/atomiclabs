import { useState } from 'react';
import {
  Dimensions,
  FlatList,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
  StyleSheet,
  View,
} from 'react-native';
import { scale } from 'react-native-size-matters';

import { ServiceGroupCard } from './Service.Group.Card';
import { SERVICE_GROUPS } from '../constants/content';
import { COLORS, SPACING } from '../constants/theme';
import type { ServiceGroup } from '../constants/types';

const { width } = Dimensions.get('window');

export function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const renderItem = ({ item }: { item: ServiceGroup }) => (
    <ServiceGroupCard
      width={width}
      image={item.image}
      title={item.title}
      services={item.services}
    />
  );

  const handleMomentumScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    //we get the current index after the end of the scroll
    const xOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(xOffset / width);

    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.title}
        style={styles.carousel}
        contentContainerStyle={styles.contentContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={SERVICE_GROUPS}
        renderItem={renderItem}
        pagingEnabled
        onMomentumScrollEnd={handleMomentumScrollEnd}
      />
      <View style={styles.paginationContainer}>
        {SERVICE_GROUPS.map((item, index) => (
          <View
            key={item.title}
            style={[styles.page, index === currentIndex && { backgroundColor: COLORS.orange }]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: SPACING.large,
  },
  carousel: {
    marginHorizontal: -SPACING.medium,
  },
  contentContainer: {
    justifyContent: 'center',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: SPACING.medium,
  },
  page: {
    height: scale(15),
    width: scale(15),
    backgroundColor: COLORS.white,
    borderRadius: 20,
  },
});
