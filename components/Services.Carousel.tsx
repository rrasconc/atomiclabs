import {
  Dimensions,
  FlatList,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
  StyleSheet,
  View,
} from 'react-native';
import type { ServiceGroup } from '../constants/types';
import { COLORS, SPACING } from '../constants/theme';
import { SERVICE_GROUPS } from '../constants/content';
import { ServiceGroupCard } from './Service.Group.Card';
import { scale } from 'react-native-size-matters';
import { useState } from 'react';

const { width } = Dimensions.get('window');
const cardWidth = width - SPACING.medium * 2;

export function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const renderItem = ({ item }: { item: ServiceGroup }) => (
    <ServiceGroupCard
      width={cardWidth}
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
  contentContainer: {
    gap: SPACING.medium,
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
