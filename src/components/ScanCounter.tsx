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
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e1e6eb',
    gap: 12,
  },
  title: {
    color: '#222222',
    fontSize: 14,
    fontWeight: '700',
  },
  counterDisplay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: '#f5f7f9',
    borderRadius: 8,
  },
  label: {
    color: '#222222',
    fontSize: 12,
    fontWeight: '600',
  },
  value: {
    color: '#006b9c',
    fontSize: 18,
    fontWeight: '700',
  },
  btnRow: {
    flexDirection: 'row',
    gap: 8,
  },
  btnPrimary: {
    flex: 1,
    paddingVertical: 11,
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#08749f',
  },
  btnSecondary: {
    flex: 1,
    paddingVertical: 11,
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#e3e9f0',
  },
  btnText: {
    color: '#ffffff',
    fontWeight: '600',
  },
  btnSecText: {
    color: '#27394d',
    fontWeight: '600',
  },
});
