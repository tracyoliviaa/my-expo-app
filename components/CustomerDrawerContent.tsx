
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { DrawerContentComponentProps } from '@react-navigation/drawer';

// Define RootDrawerParamList
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

// Update MenuItem interface
interface MenuItem {
  name: string;
  icon: keyof typeof Ionicons.glyphMap;
}

const menuItems: MenuItem[] = [
  { name: 'Dashboard', icon: 'home-outline' },
  { name: 'Device', icon: 'phone-portrait-outline' },
  { name: 'Doctor', icon: 'person-outline' },
  { name: 'Patient', icon: 'people-outline' },
  { name: 'Doctor Schedule', icon: 'calendar-outline' },
  { name: 'Patient Appointment', icon: 'calendar-outline' },
  { name: 'Patient Case Studies', icon: 'document-text-outline' },
  { name: 'Prescription', icon: 'medical-outline' },
  { name: 'Login Page', icon: 'log-in-outline' },
];

export default function CustomDrawerContent(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props} style={styles.drawerContent}>
      <View style={styles.drawerHeader}>
        <Ionicons name="person-circle-outline" size={50} color="#fff" />
        <Text style={styles.drawerHeaderText}>Super Admin</Text>
      </View>
      {menuItems.map((item) => (
        <DrawerItem
          key={item.name}
          label={() => <Text style={{ color: '#fff' }}>{item.name}</Text>}
          icon={({ size, color }) => (
            <Ionicons name={item.icon} size={size} color={color} />
          )}
          onPress={() => props.navigation.navigate(item.name as keyof RootDrawerParamList)}
        />
      ))}
      <DrawerItem
        label={() => <Text style={{ color: '#fff' }}>Log Out</Text>}
        icon={({ size, color }) => (
          <Ionicons name="log-out-outline" size={size} color={color} />
        )}
        onPress={() => {/* Handle logout */}}
      />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    backgroundColor: '#2c3e50',
  },
  drawerHeader: {
    padding: 20,
    backgroundColor: '#34495e',
    flexDirection: 'row',
    alignItems: 'center',
  },
  drawerHeaderText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10,
  },
});