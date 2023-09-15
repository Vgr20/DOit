import React, { useEffect } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  BackHandler,
  Alert,
} from "react-native";
import { StatusBar } from "react-native";
import MainButton from "../Components/MainButton";

function handleBackPress() {
  Alert.alert(
    "Hold on!",
    "Are you sure you want to exit?",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => BackHandler.exitApp(),
      },
    ],
    {
      cancelable: false,
    }
  );
  return true;
}
const Dashboard = (poses) => {
  useEffect(() => {
    StatusBar.setHidden(true);
    const onBackPress = () => {
      if (poses.navigation.isFocused()) {
        // Only show the alert if the Dashboard is focused
        handleBackPress();
        return true; // Prevent default back behavior
      }
      return false; // Allow default back behavior for other screens
    };

    BackHandler.addEventListener("hardwareBackPress", onBackPress);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    };
  }, [poses.navigation]);

  const texts = "Dashboard";

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{texts}</Text>
      <MainButton
        text="Overall Stats"
        img={require("../assets/overallstats.png")}
        onPress={() => poses.navigation.navigate("StatsScreen")}
      />

      <MainButton
        text="Habits"
        img={require("../assets/habits.png")}
        onPress={() => poses.navigation.navigate("HabitScreen")}
      />

      <MainButton
        text="Task Scheduling"
        img={require("../assets/scheduling.png")}
        onPress={() => poses.navigation.navigate("NavigationBarScreen")}
      />

      <MainButton
        text="Focus Mode"
        img={require("../assets/focused.png")}
        onPress={() => poses.navigation.navigate("FocusMode")}
      />
    </SafeAreaView>
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
    marginVertical: 20,
  },
});

export default Dashboard;
