import React, { useEffect } from "react";
import { Button, SafeAreaView, StyleSheet, Text, Image } from "react-native";
import SubButton2 from "../Components/SubButton2";
import * as Font from "expo-font";

const PastReflections = (poses) => {
  //   useEffect(() => {
  //     async function loadFont() {
  //       await Font.loadAsync({
  //         "Satisfy-Regular": require("../assets/fonts/Satisfy-Regular.ttf"),
  //         // Add more custom fonts if needed
  //       });
  //     }
  //     loadFont();
  //   }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          fontSize: 55,
          color: "white",
          fontWeight: "bold",
          marginVertical: 10,
          top: 10,
        }}
      >
        Past Reflections...
      </Text>

      <Image
        source={require("../assets/undraw_idea.png")}
        style={{ width: 300, height: 250, position: "relative", top: 20 }}
      />

      <Text style={styles.text2}>Empty.</Text>
      <Text style={styles.text2}>Start today!</Text>

      <SubButton2
        text="Productivity Pulse"
        onPress={() => poses.navigation.navigate("Stats")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2f4f4f",
    alignItems: "center",
    alignContent: "center",
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    marginVertical: 5,
    color: "#EAEAEA",
    alignContent: "center",
    paddingTop: 150,
  },
  text2: {
    fontSize: 25,
    fontWeight: "normal",
    marginVertical: 40,
    color: "#EAEAEA",
    top: 10,
    alignContent: "center",
  },
});

export default PastReflections;
