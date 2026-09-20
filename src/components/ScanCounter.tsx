import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface ScanCounterProps {
  count: number;
  onScan: () => void;
  onReset: () => void;
}

export const ScanCounter: React.FC<ScanCounterProps> = ({
  count,
  onScan,
  onReset,
}) => (
  <View style={styles.container}>
    <Text style={styles.title}>Campus Gate Verification Log</Text>

    <View style={styles.counterDisplay}>
      <Text style={styles.label}>Today's Gate Entries:</Text>
      <Text style={styles.value}>{count}</Text>
    </View>

    <View style={styles.btnRow}>
      <Pressable style={styles.btnPrimary} onPress={onScan}>
        <Text style={styles.btnText}>+1 Scan at Gate</Text>
      </Pressable>

      <Pressable style={styles.btnSecondary} onPress={onReset}>
        <Text style={styles.btnSecText}>Reset Scans</Text>
      </Pressable>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
    backgroundColor: '#f7f4ff',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#e5def4',
    gap: 12,
  },
  title: {
    color: '#251a3d',
    fontSize: 18,
    fontWeight: '700',
  },
  counterDisplay: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4,
    paddingVertical: 8,
  },
  label: {
    color: '#746887',
    fontSize: 14,
  },
  value: {
    color: '#7653c8',
    fontSize: 36,
    fontWeight: '700',
  },
  btnRow: {
    flexDirection: 'row',
    gap: 12,
  },
  btnPrimary: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#7653c8',
  },
  btnSecondary: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#7653c8',
  },
  btnText: {
    color: '#ffffff',
    fontWeight: '600',
  },
  btnSecText: {
    color: '#7653c8',
    fontWeight: '600',
  },
});
