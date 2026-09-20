import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { StudentProfile } from '../types/student';
import { StatusBadge } from './StatusBadge';

interface StudentCardProps {
  student: StudentProfile;
  isActive: boolean;
}

export const StudentCard: React.FC<StudentCardProps> = ({ student, isActive }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.identityRow}>
          <Image source={{ uri: student.avatarUrl }} style={styles.avatar} />
          <View style={styles.identityDetails}>
            <Text style={styles.institution}>DOrSU</Text>
            <Text style={styles.cardLabel}>DIGITAL CAMPUS PASS</Text>
          </View>
        </View>
        <Text style={styles.passMark}>PASS</Text>
      </View>

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
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#e5def4',
    shadowColor: '#251a3d',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#7653c8',
  },
  identityRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 3,
    borderColor: '#ffffff',
  },
  identityDetails: {
    marginLeft: 12,
    gap: 4,
  },
  institution: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: 1,
  },
  cardLabel: {
    color: '#eee8ff',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1,
  },
  passMark: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
  },
  body: {
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: 12,
    padding: 20,
  },
  name: {
    color: '#251a3d',
    fontSize: 24,
    fontWeight: '800',
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
    color: '#8a7d9f',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.8,
  },
  idNumber: {
    color: '#7653c8',
    fontSize: 18,
    fontWeight: '800',
  },
  value: {
    color: '#3e334f',
    fontSize: 14,
    fontWeight: '600',
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
  },
  campus: {
    color: '#3e334f',
    fontSize: 14,
    fontWeight: '600',
  },
});
