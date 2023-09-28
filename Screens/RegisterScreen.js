import React, { useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import { isValidEmail, isValidObjField, updateError } from "../utils/methods";
import FormContainer from "../Form/FormContainer";
import FormInput from "../Form/FormInput";
import FormSubmitButton from "../Form/FormSubmitButton";
import { StackActions } from "@react-navigation/native";

import { Formik } from "formik";
import * as Yup from "yup";

import client from "../api/client";
import { ScrollView } from "react-native-gesture-handler";

const validationSchema = Yup.object({
  fullname: Yup.string()
    .trim()
    .min(3, " Invalid name!")
    .required(" Name is required!"),
  email: Yup.string().email(" Invalid email!").required(" Email is required!"),
  password: Yup.string()
    .trim()
    .min(8, " Password is too short!")
    .required(" Password is required!"),
  confirmPassword: Yup.string().equals(
    [Yup.ref("password"), null],
    " Password does not match!"
  ),
});

const RegisterScreen = ({ navigation }) => {
  const userInfo = {
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [error, setError] = useState("");

  const { fullname, email, password, confirmPassword } = userInfo;

  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };

  const isValidForm = () => {
    // we will accept only if all of the fields have value
    if (!isValidObjField(userInfo))
      return updateError("Required all fields!", setError);
    // if valid name with 3 or more characters
    if (!fullname.trim() || fullname.length < 3)
      return updateError("Invalid name!", setError);
    // only valid email id is allowed
    if (!isValidEmail(email)) return updateError("Invalid email!", setError);
    // password must have 8 or more characters
    if (!password.trim() || password.length < 8)
      return updateError("Password is less then 8 characters!", setError);
    // password and confirm password must be the same
    if (password !== confirmPassword)
      return updateError("Password does not match!", setError);

    return true;
  };

  const sumbitForm = () => {
    if (isValidForm()) {
      // submit form
      console.log(userInfo);
    }
  };

  const signUp = async (values, formikActions) => {
    const res = await client.post("/api/register", {
      ...values,
    });

    if (res.data.success) {
      const signInRes = await client.post("/api/login", {
        email: values.email,
        password: values.password,
      });
      if (signInRes.data.success) {
        navigation.dispatch(
          StackActions.replace("ImageUpload", {
            token: signInRes.data.token,
          })
        );
      }
    }

    formikActions.resetForm();
    formikActions.setSubmitting(false);
  };

  return (
    <FormContainer>
    <ScrollView>
      <Formik
        initialValues={userInfo}
        validationSchema={validationSchema}
        onSubmit={signUp}
      >

        {({
          values,
          errors,
          touched,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => {
          const { fullname, email, password, confirmPassword } = values;
          return (
            <View style={{ flex: 1, alignItems: "center", paddingLeft: 20, paddingRight: 20, justifyContent: "center" }}>

              <Image
                source={require("../assets/undraw_welcome.png")}
                style={{ width: 300, height: 250, position: "relative", alignSelf: "center", marginBottom: 5 }}
              />
              <Text style={{fontFamily: 'Satisfy_400Regular', fontSize: 20, color: "#E1E5E5", fontWeight : 'normal', marginBottom: 10, textAlign: "center"}}>
                Take the first step to a better you!
              </Text>
              <FormInput
                value={fullname}
                error={touched.fullname && errors.fullname}
                onChangeText={handleChange("fullname")}
                onBlur={handleBlur("fullname")}
                label={
                  <Text style={{ color: "#E1E5E5", fontWeight : 'normal'}}>
                    Full Name
                  </Text>
                }
                labelStyle={{ paddingRight: 5 }}
                placeholder="John Smith"
              />
              <FormInput
                value={email}
                error={touched.email && errors.email}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                autoCapitalize="none"
                label={
                  <Text style={{ color: "#E1E5E5", fontWeight : 'normal'}}>
                    Email
                  </Text>
                }
                labelStyle={{ marginLeft: 5 }}
                placeholder="example@email.com"
              />
              <FormInput
                value={password}
                error={touched.password && errors.password}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                autoCapitalize="none"
                secureTextEntry
                label={
                  <Text style={{ color: "#E1E5E5", fontWeight : 'normal'}}>
                    Password
                  </Text>
                }
                labelStyle={{ paddingRight: 5 }}
                placeholder="********"
              />
              <FormInput
                value={confirmPassword}
                error={touched.confirmPassword && errors.confirmPassword}
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                autoCapitalize="none"
                secureTextEntry
                label={
                  <Text style={{ color: "#E1E5E5", fontWeight : 'normal'}}>
                    Confirm Password
                  </Text>
                }
                labelStyle={{ paddingRight: 5 }}
                placeholder="********"
              />
              <FormSubmitButton
                submitting={isSubmitting}
                onPress={handleSubmit}
                title="Sign up"
              />
            </View>
          );
        }}
      </Formik>
      </ScrollView>
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

export default RegisterScreen;
