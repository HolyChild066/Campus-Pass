import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StudentProfile } from '../types/student';
import { StatusBadge } from './StatusBadge';

interface StudentCardProps {
  student: StudentProfile;
  isActive: boolean;
}

export const StudentCard: React.FC<StudentCardProps> = ({ student, isActive }) => {
  return (
    <View style={styles.card}>
      <View style={styles.body}>
        <Text style={styles.name}>{student.name}</Text>

        <View style={styles.infoGroup}>
          <Text style={styles.label}>STUDENT ID</Text>
          <Text style={styles.idNumber}>{student.idNumber}</Text>
        </View>

        <View style={styles.infoRow}>
          <View style={styles.infoGroup}>
            <Text style={styles.label}>PROGRAM</Text>
            <Text style={styles.value}>{student.program}</Text>
          </View>
          <View style={styles.yearGroup}>
            <Text style={styles.label}>YEAR LEVEL</Text>
            <Text style={styles.value}>{student.yearLevel}</Text>
          </View>
        </View>

        <View style={styles.statusRow}>
          <View style={styles.infoGroup}>
            <Text style={styles.label}>CAMPUS</Text>
            <Text style={styles.campus}>{student.campus}</Text>
          </View>
          <StatusBadge isActive={isActive} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    maxWidth: 520,
    backgroundColor: '#ffffff',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#cccccc',
  },
  body: {
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: 10,
    padding: 16,
  },
  name: {
    color: '#222222',
    fontSize: 20,
    fontWeight: '600',
  },
  infoRow: {
    flexDirection: 'row',
    gap: 16,
  },
  infoGroup: {
    flex: 1,
    gap: 4,
  },
  yearGroup: {
    width: '34%',
    gap: 4,
  },
  label: {
    color: '#666666',
    fontSize: 10,
    fontWeight: '700',
  },
  idNumber: {
    color: '#222222',
    fontSize: 16,
    fontWeight: '600',
  },
  value: {
    color: '#333333',
    fontSize: 14,
    fontWeight: '400',
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
  },
  campus: {
    color: '#333333',
    fontSize: 14,
    fontWeight: '400',
  },
});
