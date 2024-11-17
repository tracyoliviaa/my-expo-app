// Dashboard.tsx
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Ionicons } from '@expo/vector-icons';

// Types
interface StatCardProps {
  title: string;
  value: string | number;
  iconName: keyof typeof Ionicons.glyphMap;
  color?: string;
}

interface ChartData {
  labels: string[];
  datasets: {
    data: number[];
    color?: (opacity: number) => string;
    strokeWidth?: number;
  }[];
}

// Monthly data
const monthlyData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [{
    data: [60, 72, 60, 83, 68, 76, 57, 68, 40, 5, 3, 2],
    color: (opacity = 1) => `rgba(59, 130, 246, ${opacity})`,
    strokeWidth: 2
  }]
};

// StatCard Component
const StatCard: React.FC<StatCardProps> = ({ title, value, iconName, color = "#3498db" }) => (
  <View style={styles.card}>
    <View style={[styles.iconContainer, { backgroundColor: `${color}20` }]}>
      <Ionicons name={iconName} size={24} color={color} />
    </View>
    <View style={styles.cardContent}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardValue}>{value}</Text>
    </View>
  </View>
);

// Analytics Card Component
const AnalyticsCard: React.FC = () => (
  <View style={styles.analyticsCard}>
    <View style={styles.analyticsHeader}>
      <Text style={styles.analyticsTitle}>Monthly Earning</Text>
      <View style={styles.analyticsButtons}>
        <Text style={styles.activeButton}>Weekly</Text>
        <Text style={styles.inactiveButton}>Monthly</Text>
      </View>
    </View>
    
    <View style={styles.earningSection}>
      <Text style={styles.earningLabel}>This Week</Text>
      <Text style={styles.earningValue}>$29.5</Text>
      <Text style={styles.earningChange}>-31.08% From Previous week</Text>
    </View>

    <View style={styles.analyticsGrid}>
      <View style={styles.analyticsItem}>
        <Text style={styles.analyticsPercentage}>-40.56%</Text>
        <Text style={styles.analyticsLabel}>1st 15 days Analytics</Text>
      </View>
      <View style={styles.analyticsItem}>
        <Text style={styles.analyticsPercentage}>-30.56%</Text>
        <Text style={styles.analyticsLabel}>last 15 days Analytics</Text>
      </View>
    </View>
  </View>
);

// Dashboard Component
const Dashboard: React.FC = () => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>Dashboard</Text>
          <Text style={styles.headerRight}>Dashboard</Text>
        </View>

        <View style={styles.statsGrid}>
          <StatCard
            title="Department"
            value="8"
            iconName="business-outline"
            color="#3498db"
          />
          <StatCard
            title="Doctor"
            value="14"
            iconName="people-outline"
            color="#2ecc71"
          />
          <StatCard
            title="Patient"
            value="1"
            iconName="person-outline"
            color="#3498db"
          />
          <StatCard
            title="Patient Appointment"
            value="3"
            iconName="calendar-outline"
            color="#f1c40f"
          />
          <StatCard
            title="Patient Case Studies"
            value="0"
            iconName="document-text-outline"
            color="#f1c40f"
          />
          <StatCard
            title="Invoice"
            value="0"
            iconName="receipt-outline"
            color="#3498db"
          />
          <StatCard
            title="Prescription"
            value="0"
            iconName="medical-outline"
            color="#2ecc71"
          />
          <StatCard
            title="Payment"
            value="0"
            iconName="card-outline"
            color="#3498db"
          />
        </View>

        <View style={styles.chartCard}>
          <Text style={styles.chartTitle}>Monthly Registered Users</Text>
          <LineChart
            data={monthlyData}
            width={screenWidth - 40}
            height={220}
            chartConfig={{
              backgroundColor: '#ffffff',
              backgroundGradientFrom: '#ffffff',
              backgroundGradientTo: '#ffffff',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(59, 130, 246, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#3b82f6'
              }
            }}
            bezier
            style={styles.chart}
          />
        </View>

        <AnalyticsCard />

        <Text style={styles.footer}>
          Copyright © 2024 HealthEase Medical. All rights reserved.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerRight: {
    color: '#e91e63',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    gap: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    width: '47%',
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconContainer: {
    padding: 10,
    borderRadius: 8,
    marginRight: 12,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 4,
  },
  cardValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  chartCard: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  analyticsCard: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  analyticsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  analyticsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  analyticsButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  activeButton: {
    backgroundColor: '#14b8a6',
    color: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    fontSize: 12,
  },
  inactiveButton: {
    color: '#64748b',
    paddingHorizontal: 12,
    paddingVertical: 6,
    fontSize: 12,
  },
  earningSection: {
    marginBottom: 20,
  },
  earningLabel: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 4,
  },
  earningValue: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  earningChange: {
    fontSize: 14,
    color: '#ef4444',
  },
  analyticsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  analyticsItem: {
    alignItems: 'center',
  },
  analyticsPercentage: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  analyticsLabel: {
    fontSize: 12,
    color: '#64748b',
  },
  footer: {
    textAlign: 'center',
    color: '#64748b',
    fontSize: 12,
    padding: 20,
  },
});

export default Dashboard;