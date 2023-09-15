import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

const FormInput = (props) => {
  const { placeholder, label, error, labelStyle, errorStyle } = props;
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          // justifyContent: "space-between",
          // textAlign: "left",
          marginBottom: 3,
        }}
      >
        <Text style={[{ fontWeight: "bold" }, labelStyle]}>{label}</Text>
        {error ? (
          <Text style={[{color: "red", fontSize: 16}, errorStyle]}>{error}</Text>
        ) : null}
      </View>
      <TextInput {...props}
        placeholder={placeholder}
        style={[styles.input, { backgroundColor: "#597272" }]} />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#000000",
    height: 50,
    width: 325,
    borderRadius: 40,
    fontSize: 16,
    paddingLeft: 10,
    marginBottom: 20,
  },
});

export default FormInput;
