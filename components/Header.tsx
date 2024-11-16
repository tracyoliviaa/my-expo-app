import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
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

type HeaderProps = {
  navigation?: DrawerNavigationProp<RootDrawerParamList>;
};

export default function Header() {
  const navigation = useNavigation<DrawerNavigationProp<RootDrawerParamList>>();

  return (
    <View style={styles.header}>
      <View style={styles.leftSection}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.menuButton}>
          <Ionicons name="menu-outline" size={24} color="#333" />
        </TouchableOpacity>
        <View style={styles.logoContainer}>
          <Image 
            source={require('../assets/logo.png')} 
            style={styles.logo}
          />
          <Text style={styles.headerTitle}>HealthEase</Text>
        </View>
      </View>

      <View style={styles.rightSection}>
        <TouchableOpacity style={styles.headerButton}>
          <Ionicons name="globe-outline" size={20} color="#333" />
          <Text style={styles.buttonText}>Go To Website</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.headerButton}>
          <Ionicons name="chatbubbles-outline" size={20} color="#333" />
          <Text style={styles.buttonText}>Chat With Us</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.headerButton}>
          <Ionicons name="medical-outline" size={20} color="#333" />
          <Text style={styles.buttonText}>HealthEase</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.headerButton}>
          <Ionicons name="person-outline" size={20} color="#333" />
          <Text style={styles.buttonText}>Mr Patient</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.languageButton}>
          <Image 
            source={require('../assets/en-flag.png')} 
            style={styles.flagIcon}
          />
          <Text style={styles.buttonText}>EN</Text>
          <Ionicons name="chevron-down-outline" size={16} color="#333" />
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
    borderBottomColor: '#e0e0e0',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuButton: {
    marginRight: 16,
    padding: 4,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 32,
    height: 32,
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  headerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    padding: 6,
  },
  buttonText: {
    fontSize: 14,
    color: '#333',
  },
  languageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    padding: 6,
  },
  flagIcon: {
    width: 20,
    height: 15,
    borderRadius: 2,
  },
});



