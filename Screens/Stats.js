import { StatusBar } from "expo-status-bar";
import { Svg, Circle } from "react-native-svg";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  Dimensions,
  Image,
  View,
  ScrollView,
} from "react-native";
import Animated, {
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { ReText } from "react-native-redash";
import { TextInput } from "react-native-gesture-handler";
import SubButton2 from "../Components/SubButton2";
import FormInput from "../Form/FormInput";

const INPUT_PROGRESS_VALUE = 0.73;

const BACKGROUND_STROKE_COLOR = "#162626";
const STROKE_COLOR = "#FF6200";
const CIRCLE_RADIUS = 160;
const CIRCLE_LENGTH = 2 * Math.PI * CIRCLE_RADIUS; // 2πr
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const { width, height } = Dimensions.get("window");

const rotateX = width / 2;
const rotateY = height / 3;
const transformString = `rotate(-90 ${rotateX} ${rotateY})`;

const Stats = (poses) => {
  const [enteredText, setEnteredText] = useState(""); // Initialize with an empty string
  const handleOnChangeText = (value) => {
    setEnteredText(value); // Update enteredText state with the entered value
  };

  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withTiming(INPUT_PROGRESS_VALUE, { duration: 2000 });
  }, []);

  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: CIRCLE_LENGTH * (1 - progress.value),
  }));

  const progressText = useDerivedValue(() => {
    return `${Math.floor(progress.value * 100)}%`;
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text
        style={{
          fontSize: 28,
          color: "white",
          fontWeight: "bold",
          marginVertical: 30,
        }}
      >
        Your Productivity Pulse
      </Text>

      <ReText style={styles.textStyle} text={progressText} />

      <Svg style={{ position: "absolute" }}>
        <Circle
          cx={width / 2}
          cy={height / 3}
          r={CIRCLE_RADIUS}
          stroke={BACKGROUND_STROKE_COLOR}
          strokeWidth="3%"
          fill="none"
        />

        <AnimatedCircle
          cx={width / 2} // "50%"
          cy={height / 3} // "30%"
          r={CIRCLE_RADIUS} //40% of the width of the svg or use R
          stroke={STROKE_COLOR}
          strokeWidth="2%"
          strokeDasharray={CIRCLE_LENGTH}
          animatedProps={animatedProps}
          strokeLinecap="round"
          transform={transformString} // Rotate the circle 90 degrees counterclockwise
          fill="none"
        />
      </Svg>

      <Text style={styles.mainTextStyle}>Well done!</Text>

      <Text
        style={{ fontSize: 20, color: "white", textAlign: "center", top: 205 }}
      >
        A little more to go.
      </Text>

      <Image
        source={require("../assets/undraw_self_reflection.png")}
        style={{ width: 230, height: 230, top: 225, position: "relative" }}
      />

      <Text
        style={{
          fontSize: 20,
          color: "white",
          textAlign: "center",
          top: 255,
          paddingBottom: 245,
        }}
      >
        What is your reflection today?
      </Text>

      <FormInput
        onChangeText={(value) => handleOnChangeText(value)}
        placeholder="Type your reflection here"
        autoCapitalize="none"
      />

        <SubButton2
          text="Past Reflections"
          onPress={() => poses.navigation.navigate("PastReflections")}
          // img = {require('../assets/signup.png')}
        />

      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          marginHorizontal: 15,
          marginVertical: 14,
        }}
      >
        

        <Text style={{ fontSize: 20, color: "white", textAlign: "center" }}>
          Ongoing Tasks: None
        </Text>

        <Image
          source={require("../assets/undraw_schedule.png")}
          style={{ width: 230, height: 200, position: "relative" }}
        />

        <Text style={{ fontSize: 20, color: "white", textAlign: "center" }}>
          Ongoing Habits: None
        </Text>

        <Image
          source={require("../assets/undraw_habits2.png")}
          style={{ width: 250, height: 200, position: "relative" }}
        />

        <SubButton2
          text="Dashboard"
          // onPress={() => this.props.navigation.navigate('HabitScreen')}
          onPress={() => poses.navigation.navigate("Dashboard")}
          // img = {require('../assets/signup.png')}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexGrow: 1,
    backgroundColor: "#2f4f4f",
    alignItems: "center",
    // justifyContent: 'center',
  },
  textStyle: {
    fontSize: 60,
    color: "white",
    textAlign: "center",
    left: 8,
    top: 130,
  },
  secondTextStyle: {
    fontSize: 25,
    color: "white",
    fontWeight: "semibold",
    marginVertical: 10,
    top: 220,
  },
  mainTextStyle: {
    fontSize: 25,
    color: "white",
    fontWeight: "normal",
    marginVertical: 20,
    alignContent: "center",
  },
});

export default Stats;
