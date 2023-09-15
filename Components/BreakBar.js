import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BreakBar = ({ percentage, numBreaks }) => {
  const markers = [];

  // Generate markers based on the number of breaks
  for (let i = 0; i < numBreaks; i++) {
    markers.push(
      <View key={i} style={styles.marker}></View>,
      <View key={`bar-${i}`} style={[styles.progressBar, { width: `${percentage}%` }]}></View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={[styles.progressBar, { width: `${percentage}%` }]}></View>
      {markers}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '85%',
    height: 10,
    backgroundColor: '#ccc',
    borderRadius: 10,
    alignSelf: 'center',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#2f4f4f', // Change this to your desired bar color
    borderRadius: 5,
    position: 'relative',
  },
  marker: {
    width: 5, // Adjust the size of the marker dot
    height: 5, // Adjust the size of the marker dot
    backgroundColor: 'red', // Change this to your desired marker color
    borderRadius: 50, // Makes it a circle
    position: 'absolute',
    top: '50%', // Vertically centered
    transform: [{ translateX: -2.5 }], // Center the marker horizontally
  },
});

export default BreakBar;
