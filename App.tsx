// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CustomerDrawerContent from './components/CustomerDrawerContent';
import Header from './components/Header';

// Import all screens
import Dashboard from './screens/Dashboard';
import Device from './screens/Device';
import Doctor from './screens/Doctor';
import Patient from './screens/Patient';
import DoctorSchedule from './screens/DoctorSchedule';
import PatientAppointment from './screens/PatientAppointment';
import PatientCaseStudies from './screens/PatientCaseStudies';
import Prescription from './screens/Prescription';
import LoginPage from './screens/LoginPage';

// Define the type for drawer navigation parameters
export type RootDrawerParamList = {
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
          drawerContent={(props) => <CustomerDrawerContent {...props} />}
          screenOptions={{
            header: () => <Header />,
            drawerStyle: {
              width: 280,
            },
            drawerType: 'slide',
          }}
        >
          <Drawer.Screen name="Dashboard" component={Dashboard} />
          <Drawer.Screen name="Device" component={Device} />
          <Drawer.Screen name="Doctor" component={Doctor} />
          <Drawer.Screen name="Patient" component={Patient} />
          <Drawer.Screen name="Doctor Schedule" component={DoctorSchedule} />
          <Drawer.Screen name="Patient Appointment" component={PatientAppointment} />
          <Drawer.Screen name="Patient Case Studies" component={PatientCaseStudies} />
          <Drawer.Screen name="Prescription" component={Prescription} />
          <Drawer.Screen name="Login Page" component={LoginPage} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}