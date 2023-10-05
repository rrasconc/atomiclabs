import { View, StyleSheet } from 'react-native';
import { HeaderText } from './Header.Text';
import { COLORS, SPACING } from '../constants/theme';
import { TEAM_MEMBERS } from '../constants/content';
import TeamMemberCard from './Team.Member.Card';

export function TeamMembers() {
  return (
    <View style={styles.container}>
      <HeaderText>
        NUESTRO <HeaderText style={styles.highlightText}>EQUIPO</HeaderText>
      </HeaderText>

      <View style={styles.cardsContainer}>
        {TEAM_MEMBERS.map((item) => (
          <TeamMemberCard
            key={item.name}
            name={item.name}
            position={item.position}
            image={item.image}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: SPACING.large,
    gap: SPACING.large * 2,
  },
  highlightText: {
    color: COLORS.orange,
  },
  cardsContainer: {
    gap: SPACING.medium,
  },
});
