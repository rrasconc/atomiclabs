import { View, StyleSheet, ActivityIndicator } from 'react-native';

import { HeaderText } from './Header.Text';
import { TeamMemberCard } from './Team.Member.Card';
import { Text } from './Text';
import { COLORS, SPACING } from '../constants/theme';
import type { TeamMembersProps } from '../constants/types';

export function TeamMembers({ data, loading, error }: TeamMembersProps) {
  return (
    <View style={styles.container}>
      <HeaderText>
        NUESTRO <HeaderText style={styles.highlightText}>EQUIPO</HeaderText>
      </HeaderText>

      {loading && <ActivityIndicator color={COLORS.white} />}

      {!loading && !error && (
        <View style={styles.cardsContainer}>
          {data.map((item) => (
            <TeamMemberCard
              key={item.id}
              name={item.name}
              position={item.position}
              avatar={item.avatar}
            />
          ))}
        </View>
      )}

      {error && (
        <Text style={styles.errorMessage}>
          No pudimos mostrar al equipo ahora. Pero puedes volver más tarde
        </Text>
      )}
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
  errorMessage: {
    textAlign: 'center',
  },
});
