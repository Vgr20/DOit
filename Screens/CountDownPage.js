import React from 'react';
import { View, StyleSheet } from 'react-native';

const CountdownPage = () => {
  const targetTime = 300; // 5 minutes in seconds

  return (
    <View style={styles.container}>
      <CountdownTimer targetTime={targetTime} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CountdownPage;
