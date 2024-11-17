import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerContentComponentProps } from '@react-navigation/drawer';

interface MenuItem {
  name: string;
  icon: keyof typeof Ionicons.glyphMap;
  route: string;
}

const menuItems: MenuItem[] = [
  { name: 'Dashboard', icon: 'speedometer-outline', route: 'Dashboard' },
  { name: 'Device', icon: 'hardware-chip-outline', route: 'Device' },
  { name: 'Doctor', icon: 'medkit-outline', route: 'Doctor' },
  { name: 'Patient', icon: 'people-outline', route: 'Patient' },
  { name: 'Doctor Schedule', icon: 'calendar-outline', route: 'Doctor Schedule' },
  { name: 'Patient Appointment', icon: 'calendar-number-outline', route: 'Patient Appointment' },
  { name: 'Patient Case Studies', icon: 'document-text-outline', route: 'Patient Case Studies' },
  { name: 'Prescription', icon: 'medical-outline', route: 'Prescription' },
  { name: 'Login Page', icon: 'log-in-outline', route: 'Login Page' }
];

export default function CustomDrawerContent(props: DrawerContentComponentProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [logoutHovered, setLogoutHovered] = useState(false);
  const drawerWidth = useRef(new Animated.Value(280)).current;

  const toggleDrawer = () => {
    const toValue = isExpanded ? 80 : 280;
    Animated.timing(drawerWidth, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setIsExpanded(!isExpanded);
  };

  const MenuItemComponent = ({ item }: { item: MenuItem }) => {
    const [hovered, setHovered] = useState(false);
    const backgroundColor = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      Animated.timing(backgroundColor, {
        toValue: hovered ? 1 : 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }, [hovered]);

    const bgColorInterpolation = backgroundColor.interpolate({
      inputRange: [0, 1],
      outputRange: ['transparent', '#00695C']
    });

    return (
      <Pressable
        onPress={() => props.navigation.navigate(item.route)}
        onHoverIn={() => setHovered(true)}
        onHoverOut={() => setHovered(false)}
      >
        <Animated.View style={[
          styles.menuItemContainer,
          { backgroundColor: bgColorInterpolation }
        ]}>
          <Ionicons
            name={item.icon}
            size={24}
            color={hovered ? '#ffffff' : '#2F4858'}
          />
          {isExpanded && (
            <Text style={[
              styles.menuText,
              hovered && styles.menuTextHovered
            ]}>
              {item.name}
            </Text>
          )}
        </Animated.View>
      </Pressable>
    );
  };

  return (
    <Animated.View style={[styles.container, { width: drawerWidth }]}>
      <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContent}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
            {isExpanded && (
              <Text style={styles.logoText}>HealthEase</Text>
            )}
          </View>
          <TouchableOpacity onPress={toggleDrawer} style={styles.toggleButton}>
            <Ionicons
              name={isExpanded ? 'chevron-back-outline' : 'chevron-forward-outline'}
              size={24}
              color="#2F4858"
            />
          </TouchableOpacity>
        </View>

        {/* Profile Section */}
        <View style={styles.profileSection}>
          <Image
            source={require('../assets/profile.png')}
            style={styles.profileImage}
          />
          {isExpanded && (
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>Super Admin</Text>
              <Text style={styles.profileRole}>Administrator</Text>
            </View>
          )}
        </View>

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          {menuItems.map((item) => (
            <MenuItemComponent key={item.name} item={item} />
          ))}
        </View>

        {/* Logout */}
        <Pressable
          onPress={() => props.navigation.navigate('Login')}
          onHoverIn={() => setLogoutHovered(true)}
          onHoverOut={() => setLogoutHovered(false)}
          style={[
            styles.logoutButton,
            logoutHovered && styles.logoutButtonHovered
          ]}
        >
          <Ionicons name="log-out-outline" size={24} color="#FF4B4B" />
          {isExpanded && <Text style={styles.logoutText}>Log Out</Text>}
        </Pressable>
      </DrawerContentScrollView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  drawerContent: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E9EB',
    height: 80,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  logo: {
    width: 40,
    height: 40,
  },
  logoText: {
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 12,
    color: '#2F4858',
  },
  toggleButton: {
    padding: 4,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E9EB',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2F4858',
  },
  profileRole: {
    fontSize: 14,
    color: '#6B7280',
  },
  menuContainer: {
    flex: 1,
    paddingTop: 8,
    paddingHorizontal: 12,
  },
  menuItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    marginBottom: 4,
  },
  menuText: {
    fontSize: 16,
    marginLeft: 12,
    color: '#2F4858',
  },
  menuTextHovered: {
    color: '#ffffff',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E9EB',
  },
  logoutButtonHovered: {
    backgroundColor: '#FFF1F1',
  },
  logoutText: {
    fontSize: 16,
    marginLeft: 12,
    color: '#FF4B4B',
  },
});