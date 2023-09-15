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
    width: '85%',
    height: 50,
    backgroundColor: '#ccc',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center'
  },
  progressBar: {
    height: '100%',
    backgroundColor: 'green', // Change this to your desired bar color
    borderRadius: 5,
  },
  percentageText: {
    marginLeft: 10,
    fontSize: 25,
    fontWeight: 'bold'
  },
});

export default PercentageBar;
