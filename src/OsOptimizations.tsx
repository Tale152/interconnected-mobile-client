import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import * as Battery from 'expo-battery';
import BatteryOptimizations from './BatteryOptimizations';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function OsOptimizations() {
  const [isLoading, setIsLoading] = useState(true);
  const [isBatteryOptimizationEnabled, setIsBatteryOptimizationEnabled] =
    useState(true);

  Battery.isBatteryOptimizationEnabledAsync().then((value) => {
    setIsLoading(false);
    setIsBatteryOptimizationEnabled(value);
  });

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <BatteryOptimizations
          isBatteryOptimizationEnabled={isBatteryOptimizationEnabled}
        />
      )}
    </View>
  );
}
