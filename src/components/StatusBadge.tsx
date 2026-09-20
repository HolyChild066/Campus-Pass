import { StyleSheet, Text } from 'react-native';
import { StatusBadgeProps } from '../types/student';

export function StatusBadge({ isActive }: StatusBadgeProps) {
  return (
    <Text style={[styles.badge, isActive ? styles.active : styles.inactive]}>
      {isActive ? 'ACTIVE' : 'SUSPENDED'}
    </Text>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: 'flex-start',
    marginTop: 16,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '700',
  },
  active: {
    backgroundColor: '#218739',
  },
  inactive: {
    backgroundColor: '#777777',
  },
});
