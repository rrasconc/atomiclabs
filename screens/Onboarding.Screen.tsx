import { useRef } from 'react';
import { Dimensions, Image, LayoutChangeEvent, ScrollView, StyleSheet, View } from 'react-native';

import { Footer } from '../components/Footer';
import { GallaxyContentContainer } from '../components/Gallaxy.Content.Container';
import { GallaxyScrollView } from '../components/Gallaxy.Scroll.View';
import { HiringProcess } from '../components/Hiring.Process';
import { ScrollDownButton } from '../components/Scroll.Down.Button';
import { SecondaryButton } from '../components/Secondary.Button';
import { Services } from '../components/Services';
import { Slogan } from '../components/Slogan';
import { TeamMembers } from '../components/Team.Members';
import { SERVICE_GROUPS } from '../constants/content';
import { ASTRO1_IMG_RATIO, IMAGES } from '../constants/files';
import { globalStyles } from '../constants/styles';
import { COLORS } from '../constants/theme';
import { ScreenProps } from '../constants/types';
import { useTeamMembers } from '../hooks/useTeamMembers';

const { width } = Dimensions.get('window');

export function OnboardingScreen({ navigation }: ScreenProps) {
  const teamMembers = useTeamMembers();

  const positionRef = useRef(0);
  const scrollRef = useRef<ScrollView>(null);
  const servicesRef = useRef<View>(null);

  const handleScrollDownPress = () => {
    if (!servicesRef.current) {
      return;
    }
    if (!scrollRef.current) {
      return;
    }
    return scrollRef.current.scrollTo({ y: positionRef.current, animated: true });
  };

  const handleSignInPress = () => {
    navigation.navigate('SignUp');
  };

  const renderBgImages = () => (
    <>
      <Image source={IMAGES.gallaxy} />
      <Image source={IMAGES.smallBubbles} />
      <Image source={IMAGES.bubbles} />
      <Image style={globalStyles.bottomBg} source={IMAGES.smallGallaxy} />
    </>
  );

  const onLayout = ({
    nativeEvent: {
      layout: { y },
    },
  }: LayoutChangeEvent) => {
    positionRef.current = y;
  };

  return (
    <GallaxyScrollView renderBgImages={renderBgImages} ref={scrollRef}>
      <GallaxyContentContainer>
        <Slogan />
        <ScrollDownButton onPress={handleScrollDownPress} text="Quiero saber más" />
        <Image style={styles.astroImg} resizeMode="contain" source={IMAGES.astro1} />
        <SecondaryButton onPress={handleSignInPress} text="¡Quiero ser parte!" />

        <Services onLayout={onLayout} data={SERVICE_GROUPS} ref={servicesRef} />

        <HiringProcess />
        <SecondaryButton onPress={handleSignInPress} text="¡Quiero ser parte!" />

        <TeamMembers
          error={teamMembers.error}
          data={teamMembers.data ?? []}
          loading={teamMembers.isLoading}
        />

        <Footer />
      </GallaxyContentContainer>
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
    height: width * ASTRO1_IMG_RATIO,
  },
});
