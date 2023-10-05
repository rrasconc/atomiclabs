import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { GallaxyScrollView } from '../components/Gallaxy.Scroll.View';
import { HeaderText } from '../components/Header.Text';
import { COLORS, SPACING } from '../constants/theme';
import { ScrollDownButton } from '../components/Scroll.Down.Button';
import { SecondaryButton } from '../components/Secondary.Button';
import { Slogan } from '../components/Slogan';
import { ServicesCarousel } from '../components/Services.Carousel';
import { TeamMembers } from '../components/Team.Members';
import { Footer } from '../components/Footer';
import { Services } from '../components/Services';

const astroSrc = require('../assets/Group4032.png');
const astroRatio = 526 / 615; //used to maintain the original aspect ratio of the image.
const peopleSrc = require('../assets/people.png');
const peopleRatio = 416 / 1209;

const { width } = Dimensions.get('window');

export function OnboardingScreen() {
  const handleScrollDownPress = () => {};

  return (
    <GallaxyScrollView>
      <Slogan />

      <ScrollDownButton onPress={handleScrollDownPress} text="Quiero saber más" />

      <Image style={styles.astroImg} resizeMode="contain" source={astroSrc} />

      <SecondaryButton text="¡Quiero ser parte!" />

      <Services />

      <View style={styles.title}>
        <HeaderText>¡TE ENCANTARÁ</HeaderText>
        <HeaderText style={styles.highlightText}> TRABAJAR CON</HeaderText>
        <HeaderText style={styles.highlightText}>NOSOTROS!</HeaderText>
      </View>

      <Image resizeMode="contain" style={styles.peopleImg} source={peopleSrc} />

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
  title: {
    marginVertical: SPACING.large,
  },
  peopleImg: {
    alignSelf: 'center',
    width: '100%',
    height: width * peopleRatio,
  },
});
