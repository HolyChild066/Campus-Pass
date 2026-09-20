import { StyleSheet, Text, View } from 'react-native';

type CampusHeaderProps = {
  title: string;
  subtitle: string;
};

export function CampusHeader({ title, subtitle }: CampusHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 15,
  },
});
