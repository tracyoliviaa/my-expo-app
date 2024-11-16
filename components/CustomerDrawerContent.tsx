import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { RootDrawerParamList } from '../App';

// Define types for menu items
type MenuItem = {
  name: keyof typeof Ionicons.glyphMap;
};

// Define menu items
const menuItems: MenuItem[] = [
  { name: 'home-outline' },
  { name: 'hardware-chip-outline' },
  { name: 'medical-outline' },
  { name: 'person-outline' },
  { name: 'calendar-outline' },
  { name: 'document-text-outline' },
  { name: 'log-in-outline' }, // Changed from 'pill-outline'
];

export default function CustomDrawerContent(props: DrawerContentComponentProps) {
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
      <DrawerContentScrollView {...props} style={styles.drawerContent}>
        {/* ... (rest of the code remains unchanged) ... */}

        <View style={styles.menuContainer}>
          {menuItems.map((item) => (
            <DrawerItem
              key={item.name}
              label={() => (
                isExpanded ? <Text style={styles.menuText}>{item.name}</Text> : null
              )}
              icon={({ size }) => (
                <Ionicons name={item.name} size={size} color="#fff" />
              )}
              onPress={() => props.navigation.navigate(item.name)}
              style={styles.menuItem}
            />
          ))}

          <DrawerItem
            label={() => (
              isExpanded ? <Text style={styles.menuText}>Log Out</Text> : null
            )}
            icon={({ size }) => (
              <Ionicons name="log-out-outline" size={size} color="#fff" />
            )}
            onPress={() => {
              // Handle logout logic here
              props.navigation.navigate('Login Page');
            }}
            style={[styles.menuItem, styles.logoutButton]}
          />
        </View>
      </DrawerContentScrollView>
    </Animated.View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
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
    borderBottomColor: '#34495e',
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
  menuContainer: {
    flex: 1,
    paddingTop: 16,
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
    borderTopColor: '#34495e',
    marginHorizontal: 0,
  },
});
