import React, { useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import client from "../api/client";
import { isValidEmail, isValidObjField, updateError } from "../utils/methods";
import FormContainer from "../Form/FormContainer";
import FormInput from "../Form/FormInput";
import FormSubmitButton from "../Form/FormSubmitButton";
import SubButton2 from "../Components/SubButton2";
import { withNavigation } from "react-navigation";

const SignInScreen = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const { email, password } = userInfo;

  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };

  const isValidForm = () => {
    if (!isValidObjField(userInfo))
      return updateError("Required all fields!", setError);

    if (!isValidEmail(email)) return updateError("Invalid email!", setError);

    if (!password.trim() || password.length < 8)
      return updateError("Password is too short!", setError);

    return true;
  };

  const submitForm = async () => {
    if (isValidForm()) {
      try {
        const res = await client.post("/api/login", { ...userInfo });

        if (res.data.message === "Login Succesful!") {
          setUserInfo({ email: "", password: "" });
          navigation.navigate("HomeScreen");
          // No need to setProfile and setIsLoggedIn here
        }

        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <FormContainer>
      {error ? (
        <Text style={{ color: "red", fontSize: 18, textAlign: "center" }}>
          {error}
        </Text>
      ) : null}
      <FormInput
        value={email}
        onChangeText={(value) => handleOnChangeText(value, "email")}
        label="Email"
        placeholder="example@email.com"
        autoCapitalize="none"
      />
      <FormInput
        value={password}
        onChangeText={(value) => handleOnChangeText(value, "password")}
        label="Password"
        placeholder="********"
        autoCapitalize="none"
        secureTextEntry
      />
      <FormSubmitButton onPress={submitForm} title="Login" />
      <SubButton2
        text="Sign Up"
        onPress={() => navigation.navigate("RegisterScreen")}
      />
    </FormContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2f4f4f",
    alignItems: "center",
    // justifyContent: 'center',
  },
  text: {
    fontSize: 50,
    color: "white",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default withNavigation(SignInScreen); // Wrap the component with withNavigation
