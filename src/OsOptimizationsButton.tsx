import React from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function OsOptimizationsButton() {
  return (
    <View style={styles.container}>
      <Button
        title='Disable Android Optimizations'
        onPress={() => Alert.alert('Button pressed')}
      />
    </View>
  );
}
