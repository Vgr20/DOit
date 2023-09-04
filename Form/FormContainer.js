import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const FormContainer = ({ children }) => {
  return (
    <KeyboardAvoidingView
      enabled
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={styles.container}
    >
      {children}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2f4f4f",
    alignItems: "center",
    width: Dimensions.get("window").width,
    paddingHorizontal: 20,
    // justifyContent: 'center',
  },
  text: {
    fontSize: 50,
    color: "white",
    fontWeight: "bold",
  },
});

export default FormContainer;
