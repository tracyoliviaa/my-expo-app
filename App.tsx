import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentComponentProps } from '@react-navigation/drawer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Dashboard from './screens/Dashboard';
import Header from './components/Header';
import CustomDrawerContent from './components/CustomerDrawerContent';



// Define the root parameter list type
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

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Dashboard"
          drawerContent={(props: DrawerContentComponentProps) => (
            <CustomDrawerContent {...props} />
          )}
          screenOptions={{
            header: (props) => <Header />
          }}
        >
          <Drawer.Screen name="Dashboard" component={Dashboard} />
          {/* Add other screens here */}
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}