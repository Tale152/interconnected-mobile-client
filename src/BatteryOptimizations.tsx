import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function batteryOptimizationsEnabled() {
  return (
    <View style={styles.container}>
      <Text>Battery optimization is Enabled ❌</Text>
      <Button
        title='Disable battery optimization'
        onPress={() => Alert.alert('Button pressed')}
      />
    </View>
  );
}

function batteryOptimizationsDisabled() {
  return (
    <View style={styles.container}>
      <Text>Battery optimization is Disabled ✔</Text>
    </View>
  );
}

export default function BatteryOptimizations(props: {
  isBatteryOptimizationEnabled: boolean;
}) {
  return props.isBatteryOptimizationEnabled
    ? batteryOptimizationsEnabled()
    : batteryOptimizationsDisabled();
}
