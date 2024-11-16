// components/CustomerDrawerContent.tsx
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { DrawerContentComponentProps } from '@react-navigation/drawer';

interface MenuItem {
  name: string;
  icon: keyof typeof Ionicons.glyphMap;
  route: string;
}

const menuItems: MenuItem[] = [
  { name: 'Dashboard', icon: 'home-outline', route: 'Dashboard' },
  { name: 'Device', icon: 'hardware-chip-outline', route: 'Device' },
  { name: 'Doctor', icon: 'medical-outline', route: 'Doctor' },
  { name: 'Patient', icon: 'people-outline', route: 'Patient' },
  { name: 'Doctor Schedule', icon: 'calendar-outline', route: 'Doctor Schedule' },
  { name: 'Patient Appointment', icon: 'calendar-number-outline', route: 'Patient Appointment' },
  { name: 'Patient Case Studies', icon: 'document-text-outline', route: 'Patient Case Studies' },
  { name: 'Prescription', icon: 'medical-outline', route: 'Prescription' },
];

export default function CustomerDrawerContent(props: DrawerContentComponentProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const drawerWidth = new Animated.Value(280);

  const toggleDrawer = () => {
    const toValue = isExpanded ? 80 : 280;
    Animated.timing(drawerWidth, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setIsExpanded(!isExpanded);
  };

  return (
    <Animated.View style={[styles.container, { width: drawerWidth }]}>
      <View style={styles.drawerHeader}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/logo.png')}
            style={{ width: 32, height: 32 }}
          />
          {isExpanded && (
            <Text style={styles.logoText}>HealthEase</Text>
          )}
        </View>
        <TouchableOpacity onPress={toggleDrawer} style={styles.toggleButton}>
          <Ionicons
            name={isExpanded ? 'chevron-back-outline' : 'chevron-forward-outline'}
            size={24}
            color="#fff"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.profileSection}>
        <Image
          source={require('../assets/profile.png')}
          style={styles.profileImage}
        />
        {isExpanded && (
          <View>
            <Text style={styles.profileName}>Super Admin</Text>
            <Text style={styles.profileRole}>Administrator</Text>
          </View>
        )}
      </View>

      <DrawerContentScrollView {...props} style={styles.drawerContent}>
        <View style={styles.menuContainer}>
          {menuItems.map((item) => (
            <DrawerItem
              key={item.route}
              label={() => (
                isExpanded ? <Text style={styles.menuText}>{item.name}</Text> : null
              )}
              icon={({ size }) => (
                <Ionicons name={item.icon} size={size} color="#fff" />
              )}
              onPress={() => props.navigation.navigate(item.route)}
              style={styles.menuItem}
            />
          ))}
        </View>
      </DrawerContentScrollView>

      <DrawerItem
        label={() => (
          isExpanded ? <Text style={styles.menuText}>Logout</Text> : null
        )}
        icon={({ size }) => (
          <Ionicons name="log-out-outline" size={size} color="#fff" />
        )}
        onPress={() => props.navigation.navigate('Login Page')}
        style={[styles.menuItem, styles.logoutButton]}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00695c',
  },
  drawerContent: {
    flex: 1,
  },
  drawerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#004d40',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  toggleButton: {
    padding: 4,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#004d40',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  profileName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  profileRole: {
    color: '#80cbc4',
    fontSize: 14,
  },
  menuContainer: {
    flex: 1,
    paddingTop: 8,
  },
  menuItem: {
    marginHorizontal: 0,
  },
  menuText: {
    color: '#fff',
    fontSize: 16,
  },
  logoutButton: {
    borderTopWidth: 1,
    borderTopColor: '#004d40',
    marginTop: 'auto',
    marginHorizontal: 0,
  },
});