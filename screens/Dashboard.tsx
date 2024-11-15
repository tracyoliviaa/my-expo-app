import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Define the interface for StatCard props
interface StatCardProps {
  title: string;
  value: string | number;
  iconName: keyof typeof Ionicons.glyphMap;  // This ensures iconName is a valid Ionicons name
}

const StatCard: React.FC<StatCardProps> = ({ title, value, iconName }) => (
  <View style={styles.card}>
    <Ionicons name={iconName} size={24} color="#3498db" />
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardValue}>{value}</Text>
  </View>
);

export default function Dashboard() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.cardContainer}>
        <StatCard title="Department" value="8" iconName="business-outline" />
        <StatCard title="Doctor" value="14" iconName="person-outline" />
        <StatCard title="Patient" value="1" iconName="people-outline" />
        <StatCard title="Patient Appointment" value="3" iconName="calendar-outline" />
        <StatCard title="Patient Case Studies" value="0" iconName="document-text-outline" />
        <StatCard title="Invoice" value="0" iconName="receipt-outline" />
        <StatCard title="Prescription" value="0" iconName="medical-outline" />
        <StatCard title="Payment" value="0" iconName="card-outline" />
      </View>
      {/* Add charts and other dashboard elements here */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    width: '48%',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 14,
    color: '#7f8c8d',
    marginTop: 5,
  },
  cardValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginTop: 5,
  },
});