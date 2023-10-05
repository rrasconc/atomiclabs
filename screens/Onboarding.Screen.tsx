import { Dimensions, Image, ScrollView, StyleSheet, View } from 'react-native';
import { GallaxyScrollView } from '../components/Gallaxy.Scroll.View';
import { COLORS, SPACING } from '../constants/theme';
import { ScrollDownButton } from '../components/Scroll.Down.Button';
import { SecondaryButton } from '../components/Secondary.Button';
import { Slogan } from '../components/Slogan';
import { TeamMembers } from '../components/Team.Members';
import { Footer } from '../components/Footer';
import { Services } from '../components/Services';
import { HiringProcess } from '../components/Hiring.Process';
import { useRef } from 'react';

const astroSrc = require('../assets/Group4032.png');
const astroRatio = 526 / 615; //used to maintain the original aspect ratio of the image.

const { width } = Dimensions.get('window');

export function OnboardingScreen() {
  const scrollRef = useRef<ScrollView>(null);
  const servicesRef = useRef<View>(null);

  const handleScrollDownPress = () => {
    servicesRef?.current?.measureInWindow((_x, y) => {
      scrollRef?.current?.scrollTo({ y: y - SPACING.large * 2 });
    });
  };

  return (
    <GallaxyScrollView ref={scrollRef}>
      <Slogan />
      <ScrollDownButton onPress={handleScrollDownPress} text="Quiero saber más" />

      <Image style={styles.astroImg} resizeMode="contain" source={astroSrc} />
      <SecondaryButton text="¡Quiero ser parte!" />

      <Services ref={servicesRef} />

      <HiringProcess />
      <SecondaryButton text="¡Quiero ser parte!" />

      <TeamMembers />

      <Footer />
    </GallaxyScrollView>
  );
}

const styles = StyleSheet.create({
  highlightText: {
    color: COLORS.orange,
  },
  astroImg: {
    alignSelf: 'center',
    width: '100%',
    height: width * astroRatio,
  },
});
