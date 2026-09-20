import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { ScanCounter } from './src/components/ScanCounter';
import { StudentCard } from './src/components/StudentCard';
import { StudentProfile } from './src/types/student';

const student: StudentProfile = {
  name: 'Juan Carlos Dela Cruz',
  idNumber: '2024-00123',
  program: 'BS Information Technology',
  yearLevel: '2nd Year',
  avatarUrl: 'https://i.pravatar.cc/150?img=12',
  campus: 'DOrSU Main Campus',
};

export default function App() {
  const [showPass, setShowPass] = useState(false);
  const [gateScans, setGateScans] = useState(0);
  const [isActive, setIsActive] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      {showPass ? (
        <ScrollView
          style={styles.passScroll}
          contentContainerStyle={styles.passContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Digital Campus Pass</Text>
            <Text style={styles.headerLabel}>Student Information System</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Student Information</Text>
            <StudentCard student={student} isActive={isActive} />
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Campus Verification</Text>
            <ScanCounter
              count={gateScans}
              onScan={() => setGateScans((previousCount) => previousCount + 1)}
              onReset={() => setGateScans(0)}
            />
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Pass Control</Text>
            <View style={[styles.statusPanel, isActive ? styles.activePanel : styles.suspendedPanel]}>
              <Text style={styles.statusLabel}>CURRENT STATUS</Text>
              <Text style={[styles.statusText, isActive ? styles.activeText : styles.suspendedText]}>
                {isActive ? 'ACTIVE' : 'SUSPENDED'}
              </Text>
            </View>
            <Pressable
              onPress={() => setIsActive((previousStatus) => !previousStatus)}
              style={({ pressed }) => [
                styles.controlButton,
                isActive ? styles.suspendButton : styles.reactivateButton,
                pressed && styles.buttonPressed,
              ]}
            >
              <Text style={styles.controlButtonText}>
                {isActive ? 'Suspend Pass' : 'Reactivate Pass'}
              </Text>
            </Pressable>
          </View>

          <Pressable
            onPress={() => {}}
            style={({ pressed }) => [styles.backButton, pressed && styles.buttonPressed]}
          >
            <Text style={styles.backButtonText}>Back Home</Text>
          </Pressable>
        </ScrollView>
      ) : (
        <>
          <View style={styles.logoArea}>
            <Image source={require('./assets/icon.png')} style={styles.logo} />
          </View>
          <Text style={styles.title}>DOrSU Digital Campus Pass</Text>
          <Text style={styles.subtitle}>Student Information System</Text>
          <Pressable
            onPress={() => setShowPass(true)}
            style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </Pressable>
        </>
      )}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f4f6f8',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    paddingHorizontal: 24,
  },
  logoArea: {
    width: 180,
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    borderRadius: 90,
    backgroundColor: '#f2edff',
  },
  logo: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },
  title: {
    maxWidth: 320,
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '700',
    color: '#251a3d',
  },
  subtitle: {
    fontSize: 16,
    color: '#746887',
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#251a3d',
  },
  passMessage: {
    fontSize: 16,
    color: '#746887',
  },
  passContent: {
    width: '100%',
    flexDirection: 'column',
    padding: 10,
    gap: 16,
  },
  passScroll: {
    alignSelf: 'stretch',
    width: '100%',
  },
  header: {
    flexDirection: 'column',
    gap: 6,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#251a3d',
  },
  headerLabel: {
    fontSize: 14,
    color: '#746887',
  },
  section: {
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: 8,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#222222',
  },
  statusPanel: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4,
    paddingVertical: 12,
    borderRadius: 8,
  },
  activePanel: {
    backgroundColor: '#e8f7ee',
  },
  suspendedPanel: {
    backgroundColor: '#fff0f0',
  },
  statusLabel: {
    color: '#746887',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1,
  },
  statusText: {
    fontSize: 22,
    fontWeight: '800',
  },
  activeText: {
    color: '#218739',
  },
  suspendedText: {
    color: '#b23a48',
  },
  controlButton: {
    alignItems: 'center',
    paddingVertical: 11,
    borderRadius: 8,
  },
  suspendButton: {
    backgroundColor: '#ffe4df',
    borderWidth: 1,
    borderColor: '#f1b6aa',
  },
  reactivateButton: {
    backgroundColor: '#f5f7f9',
    borderWidth: 1,
    borderColor: '#d6dde4',
  },
  controlButtonText: {
    color: '#91402e',
    fontSize: 12,
    fontWeight: '600',
  },
  backButton: {
    alignItems: 'center',
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#7653c8',
  },
  backButtonText: {
    color: '#7653c8',
    fontSize: 16,
    fontWeight: '600',
  },
  button: {
    width: 240,
    marginTop: 24,
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 28,
    backgroundColor: '#7653c8',
  },
  buttonPressed: {
    opacity: 0.75,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
