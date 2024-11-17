import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
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

/*************  ✨ Codeium Command 🌟  *************/
/**
 * The Header component is a functional component that renders the header of the app.
 * It uses the Ionicons library to render icons and the useNavigation hook from
 * react-navigation to navigate to different screens.
 */
export default function Header() {
  /**
   * Get the navigation object from the useNavigation hook.
   */
  const navigation = useNavigation<DrawerNavigationProp<RootDrawerParamList>>();

  /**
   * Render the header component.
   */
  return (
    <View style={styles.headerContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.headerScroll}>
        <View style={styles.header}>
          <View style={styles.leftSection}>
            /**
             * Render a button that toggles the drawer when pressed.
             */
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} style={styles.menuButton}>
              <Ionicons name="menu-outline" size={24} color="#ffffff" />
            </TouchableOpacity>
            /**
             * Render a button that navigates to the main page when pressed.
             */
            <TouchableOpacity style={styles.websiteButton} onPress={() => {/* Navigate to main page */}}>
              <Ionicons name="globe-outline" size={20} color="#ffffff" />
              <Text style={styles.websiteButtonText}>Go To Website</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rightSection}>
            /**
             * Render a button that navigates to the chat screen when pressed.
             */
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="chatbubble-outline" size={20} color="#00695C" />
              <Text style={styles.actionButtonText}>Chat With Us</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dropdownButton}>
              <Ionicons name="business-outline" size={20} color="#00695C" />
              <Text style={styles.dropdownButtonText}>HealthEase</Text>
              <Ionicons name="chevron-down" size={16} color="#00695C" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.dropdownButton}>
              <Ionicons name="person-circle-outline" size={20} color="#00695C" />
              <Text style={styles.dropdownButtonText}>Mr Patient</Text>
              <Ionicons name="chevron-down" size={16} color="#00695C" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.languageButton}>
              <Ionicons name="flag-outline" size={20} color="#00695C" />
              <Text style={styles.languageButtonText}>EN</Text>
              <Ionicons name="chevron-down" size={16} color="#00695C" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E9EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  headerScroll: {
    flexGrow: 0,
  },
  header: {
    flexDirection: 'row',
/******  607f039f-0d04-483a-8285-607342792e79  *******/
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    minWidth: '100%',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuButton: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#00695C',
    marginRight: 12,
  },
  websiteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00695C',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  websiteButtonText: {
    color: '#ffffff',
    fontWeight: '600',
    marginLeft: 8,
    fontSize: 14,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0F2F1',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginRight: 12,
  },
  actionButtonText: {
    color: '#00695C',
    fontWeight: '600',
    marginLeft: 8,
    fontSize: 14,
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0F2F1',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginRight: 12,
  },
  dropdownButtonText: {
    color: '#00695C',
    fontWeight: '600',
    marginLeft: 8,
    marginRight: 4,
    fontSize: 14,
  },
  languageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0F2F1',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  languageButtonText: {
    color: '#00695C',
    fontWeight: '600',
    marginLeft: 8,
    marginRight: 4,
    fontSize: 14,
  },
});