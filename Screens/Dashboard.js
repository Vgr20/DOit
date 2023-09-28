import React, { useEffect } from "react";
import {
  Button,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  SafeAreaView,
  BackHandler,
  Alert,
} from "react-native";
import { StatusBar } from "react-native";
import MainButton from "../Components/MainButton";
import MainButton2 from "../Components/MainButton2";
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useTimerStatus } from "../Context/TimerStatus";

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



const signOut = async () => {
  try {
    // Clear user-specific data from AsyncStorage
    await AsyncStorage.removeItem("authToken");
    await AsyncStorage.removeItem("userData");
    await AsyncStorage.removeItem("KeepLoggedIn");

  } catch (error) {
    console.error("Error while signing out:", error);
  }
};


const Dashboard = (poses) => {

  const isTimerActive = useTimerStatus();

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

  const texts = "Activity Hub";

  const handleFocusModeDirect = () => {
    console.log("Focus Pressed")
    if (isTimerActive) {
      poses.navigation.navigate("FocusModeActive")
    } else {
      poses.navigation.navigate("FocusMode")
    }
  }

  return (
    <ScrollView style={styles.scrollviewcontainer}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>{texts}</Text>
        <Image
          source={require("../assets/undraw_habits2.png")}
          style={{ width: 270, height: 230, position: "relative" }}
        />

        <Text style={{ fontSize: 20, color: "white", textAlign: "center", paddingVertical: 15}}>
          Go Get On & Complete Each Section!
        </Text>

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
          onPress={() => handleFocusModeDirect() }
          // onPress={() => poses.navigation.navigate("FocusMode")}
        />

        <MainButton2
          text="Sign Out"
          img={require("../assets/cancel.png")}
          onPress={() => {
            signOut();
            poses.navigation.navigate("SignInScreen");
          }}
        />
      </SafeAreaView>
    </ScrollView>
    
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
    textTransform: "capitalize",
    fontWeight: "bold",
    marginVertical: 20,
  },
  scrollviewcontainer: {
    flex: 1,
    backgroundColor: "#2f4f4f",
  },
});

export default Dashboard;
