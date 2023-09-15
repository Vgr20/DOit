import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

const FormSubmitButton = ({ title, submitting, onPress }) => {
  const backgroundColor = submitting
    ? "rgba(27,27,51,0.4)"
    : "#fff";

  return (
    <TouchableOpacity
      onPress={!submitting ? onPress : null}
      style={[styles.container, { backgroundColor }]}
    >
      <Text style={{ fontSize: 18, color: "#ff6200", fontWeight : 'bold' }}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 65,
    width: 325,
    borderColor: "#ff6200",
    borderWidth: 2,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    
  },
});

export default FormSubmitButton;
