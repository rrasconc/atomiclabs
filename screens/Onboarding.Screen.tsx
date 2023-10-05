import { useRef } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, View } from 'react-native';

import { Footer } from '../components/Footer';
import { GallaxyScrollView } from '../components/Gallaxy.Scroll.View';
import { HiringProcess } from '../components/Hiring.Process';
import { ScrollDownButton } from '../components/Scroll.Down.Button';
import { SecondaryButton } from '../components/Secondary.Button';
import { Services } from '../components/Services';
import { Slogan } from '../components/Slogan';
import { TeamMembers } from '../components/Team.Members';
import { COLORS } from '../constants/theme';
import { ScreenProps } from '../constants/types';
import { useTeamMembers } from '../hooks/useTeamMembers';

const astroSrc = require('../assets/Group4032.png');
const astroRatio = 526 / 615; //used to maintain the original aspect ratio of the image.
const { width } = Dimensions.get('window');

export function OnboardingScreen({ navigation }: ScreenProps) {
  const teamMembers = useTeamMembers();

  const scrollRef = useRef<ScrollView>(null);
  const servicesRef = useRef<View>(null);

  const handleScrollDownPress = () => {
    if (!servicesRef.current) {
      return;
    }
    servicesRef.current.measure((_x, y) => {
      if (!scrollRef.current) {
        return;
      }
      scrollRef.current.scrollTo({ y, animated: true });
    });
  };

  const handleSignInPress = () => {
    navigation.navigate('SignUp');
  };

  return (
    <GallaxyScrollView ref={scrollRef}>
      <Slogan />
      <ScrollDownButton onPress={handleScrollDownPress} text="Quiero saber más" />

      <Image style={styles.astroImg} resizeMode="contain" source={astroSrc} />
      <SecondaryButton onPress={handleSignInPress} text="¡Quiero ser parte!" />

      <Services ref={servicesRef} />

      <HiringProcess />
      <SecondaryButton onPress={handleSignInPress} text="¡Quiero ser parte!" />

      <TeamMembers data={teamMembers.data ?? []} loading={teamMembers.isLoading} />

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
