import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
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

type ButtonProps = {
  icon?: keyof typeof Ionicons.glyphMap;
  text: string;
  variant?: 'primary' | 'secondary';
  onPress?: () => void;
  showDropdown?: boolean;
};

const Header = () => {
  const navigation = useNavigation<DrawerNavigationProp<RootDrawerParamList>>();
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const HeaderButton: React.FC<ButtonProps> = ({ 
    icon, 
    text, 
    variant = 'secondary',
    onPress,
    showDropdown = false
  }) => {
    const buttonId = `${text}-${variant}`;
    const isHovered = hoveredButton === buttonId;

    return (
      <Pressable
        onPress={onPress}
        onHoverIn={() => setHoveredButton(buttonId)}
        onHoverOut={() => setHoveredButton(null)}
        style={({ pressed }) => [
          styles.button,
          variant === 'primary' ? styles.primaryButton : styles.secondaryButton,
          isHovered && (variant === 'primary' ? styles.primaryButtonHovered : styles.secondaryButtonHovered),
          pressed && styles.buttonPressed,
        ]}
      >
        {icon && (
          <Ionicons
            name={icon}
            size={20}
            color={variant === 'primary' ? '#FFFFFF' : '#00695C'}
            style={styles.buttonIcon}
          />
        )}
        <Text
          style={[
            styles.buttonText,
            variant === 'primary' ? styles.primaryButtonText : styles.secondaryButtonText,
          ]}
        >
          {text}
        </Text>
        {showDropdown && (
          <Ionicons
            name="chevron-down"
            size={16}
            color={variant === 'primary' ? '#FFFFFF' : '#00695C'}
            style={styles.dropdownIcon}
          />
        )}
      </Pressable>
    );
  };

  const MenuButton = () => (
    <Pressable
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      style={({ pressed }) => [
        styles.menuButton,
        pressed && styles.buttonPressed,
      ]}
    >
      <Ionicons name="menu" size={24} color="#FFFFFF" />
    </Pressable>
  );

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerContent}>
        <View style={styles.leftSection}>
          <MenuButton />
          <HeaderButton
            icon="globe-outline"
            text="Go To Website"
            variant="primary"
          />
        </View>

        <View style={styles.middleSection}>
          <HeaderButton
            icon="chatbubble-outline"
            text="Chat With Us"
          />
          <HeaderButton
            icon="business-outline"
            text="HealthEase"
            showDropdown
          />
        </View>

        <View style={styles.rightSection}>
          <HeaderButton
            icon="person-circle-outline"
            text="Mr Patient"
            showDropdown
          />
          <HeaderButton
            icon="flag-outline"
            text="EN"
            showDropdown
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E9EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 16,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  middleSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
    justifyContent: 'center',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  menuButton: {
    backgroundColor: '#00695C',
    padding: 8,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    gap: 6,
  },
  primaryButton: {
    backgroundColor: '#00695C',
  },
  secondaryButton: {
    backgroundColor: '#E0F2F1',
  },
  primaryButtonHovered: {
    backgroundColor: '#004D40',
  },
  secondaryButtonHovered: {
    backgroundColor: '#B2DFDB',
  },
  buttonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  buttonIcon: {
    marginRight: 4,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  primaryButtonText: {
    color: '#FFFFFF',
  },
  secondaryButtonText: {
    color: '#00695C',
  },
  dropdownIcon: {
    marginLeft: 2,
  },
});

export default Header;