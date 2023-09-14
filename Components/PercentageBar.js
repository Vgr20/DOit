import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PercentageBar = ({ percentage }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.progressBar, { width: `${percentage}%` }]}></View>
      <Text style={styles.percentageText}>{`${percentage}%`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 30,
    backgroundColor: '#ccc',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBar: {
    height: '100%',
    backgroundColor: 'green', // Change this to your desired bar color
    borderRadius: 5,
  },
  percentageText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default PercentageBar;
