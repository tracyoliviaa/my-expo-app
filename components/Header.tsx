import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
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

const Header = () => {
  const navigation = useNavigation<DrawerNavigationProp<RootDrawerParamList>>();
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  // Custom button component with hover effect
  const CustomButton = ({
    icon,
    text,
    style,
    variant = 'default',
    onPress,
    identifier,
  }: {
    icon: string;
    text?: string;
    style?: any;
    variant?: 'primary' | 'secondary' | 'default';
    onPress?: () => void;
    identifier: string;
  }) => {
    const getColors = () => {
      switch (variant) {
        case 'primary':
          return {
            default: { bg: '#00695C', text: '#ffffff', icon: '#ffffff' },
            pressed: { bg: '#004D40', text: '#ffffff', icon: '#ffffff' },
            hovered: { bg: '#004D40', text: '#ffffff', icon: '#ffffff' },
          };
        case 'secondary':
          return {
            default: { bg: '#E0F2F1', text: '#00695C', icon: '#00695C' },
            pressed: { bg: '#B2DFDB', text: '#00695C', icon: '#00695C' },
            hovered: { bg: '#B2DFDB', text: '#00695C', icon: '#00695C' },
          };
        default:
          return {
            default: { bg: '#E0F2F1', text: '#00695C', icon: '#00695C' },
            pressed: { bg: '#B2DFDB', text: '#00695C', icon: '#00695C' },
            hovered: { bg: '#B2DFDB', text: '#00695C', icon: '#00695C' },
          };
      }
    };

    const colors = getColors();
    const isHovered = hoveredButton === identifier;

    return (
      <Pressable
        onPress={onPress}
        onHoverIn={() => setHoveredButton(identifier)}
        onHoverOut={() => setHoveredButton(null)}
        style={({ pressed }) => [
          styles.button,
          style,
          { backgroundColor: isHovered ? colors.hovered.bg : colors.default.bg },
          pressed && { backgroundColor: colors.pressed.bg, transform: [{ scale: 0.98 }] },
        ]}
      >
        <Ionicons
          name={icon as any}
          size={20}
          color={isHovered ? colors.hovered.icon : colors.default.icon}
        />
        {text && (
          <Text
            style={[
              styles.buttonText,
              { color: isHovered ? colors.hovered.text : colors.default.text },
            ]}
          >
            {text}
          </Text>
        )}
        {identifier.includes('dropdown') && (
          <Ionicons
            name="chevron-down"
            size={16}
            color={isHovered ? colors.hovered.icon : colors.default.icon}
          />
        )}
      </Pressable>
    );
  };

  return (
    <View style={styles.headerContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.headerScroll}>
        <View style={styles.header}>
          <View style={styles.leftSection}>
            <CustomButton
              icon="menu-outline"
              variant="primary"
              identifier="menu"
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
              style={styles.menuButton}
            />
            
            <CustomButton
              icon="globe-outline"
              text="Go To Website"
              variant="primary"
              identifier="website"
              style={styles.websiteButton}
            />
          </View>

          <View style={styles.rightSection}>
            <CustomButton
              icon="chatbubble-outline"
              text="Chat With Us"
              identifier="chat"
              style={styles.actionButton}
            />

            <CustomButton
              icon="business-outline"
              text="HealthEase"
              identifier="business-dropdown"
              style={styles.dropdownButton}
            />

            <CustomButton
              icon="person-circle-outline"
              text="Mr Patient"
              identifier="user-dropdown"
              style={styles.dropdownButton}
            />

            <CustomButton
              icon="flag-outline"
              text="EN"
              identifier="language-dropdown"
              style={styles.languageButton}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    minWidth: '100%',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 48,
    gap: 24, // Increased gap between menu and website button
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24, // Increased gap between buttons
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  buttonText: {
    fontWeight: '600',
    marginLeft: 8,
    marginRight: 4,
    fontSize: 14,
  },
  menuButton: {
    padding: 10,
  },
  websiteButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  actionButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  dropdownButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  languageButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
});

export default Header;