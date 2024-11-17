import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

type RootDrawerParamList = {
  Dashboard: undefined;
  Device: undefined;
  Doctor: undefined;
  Patient: undefined;
  'Doctor Schedule': undefined;
  'Patient Appointment': undefined;
  'Patient Case Studies': undefined;
  Prescription: undefined;
  'Login Page': undefined;
};

export default function Header() {
  const navigation = useNavigation<DrawerNavigationProp<RootDrawerParamList>>();

  return (
    <View style={styles.header}>
      <View style={styles.leftSection}>
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} style={styles.menuButton}>
          <Ionicons name="menu-outline" size={24} color="#2F4858" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerButton} onPress={() => {/* Navigate to main page */}}>
          <Ionicons name="globe-outline" size={20} color="#2F4858" />
          <Text style={styles.buttonText}>Go To Website</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rightSection}>
        <TouchableOpacity style={styles.headerButton}>
          <Ionicons name="chatbubble-outline" size={20} color="#2F4858" />
          <Text style={styles.buttonText}>Chat With Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerButton}>
          <Ionicons name="business-outline" size={20} color="#2F4858" />
          <Text style={styles.buttonText}>HealthEase</Text>
          <Ionicons name="chevron-down" size={16} color="#2F4858" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerButton}>
          <Ionicons name="person-circle-outline" size={20} color="#2F4858" />
          <Text style={styles.buttonText}>Mr Patient</Text>
          <Ionicons name="chevron-down" size={16} color="#2F4858" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.languageButton}>
          <Ionicons name="flag-outline" size={20} color="#2F4858" />
          <Text style={styles.buttonText}>EN</Text>
          <Ionicons name="chevron-down" size={16} color="#2F4858" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E9EB',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuButton: {
    marginRight: 16,
    padding: 4,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  headerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 8,
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 14,
    color: '#2F4858',
    fontWeight: '500',
  },
  languageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    padding: 6,
  },
});