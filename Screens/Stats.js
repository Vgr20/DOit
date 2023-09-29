import { StatusBar } from "expo-status-bar";
import { Svg, Circle } from "react-native-svg";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState} from "react";
import {
  StyleSheet,
  Text,
  Dimensions,
  Image,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Animated, {
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { ReText } from "react-native-redash";
import { TextInput } from "react-native-gesture-handler";
import SubButton22 from "../Components/SubButton22";
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
  // const navigation = useNavigation();
  const [enteredText, setEnteredText] = useState(""); // Initialize with an empty string
  const [reflections, setReflections] = useState([]);
  const handleOnChangeText = (value) => {
    setEnteredText(value); // Update enteredText state with the entered value
  };

  const handleSaveReflection = async () => {
    if (enteredText) {
      const currentDate = new Date();
      // const dateTimeString = currentDate.toLocaleDateString();
      const dateString = currentDate.toLocaleDateString();
      const TimeString = currentDate.toLocaleTimeString();
      
  
      // Create a new reflection object
      const newReflection = { text: enteredText, date: dateString, time:TimeString };
  
      try {
        const storedReflections = await AsyncStorage.getItem("reflections");
        let existingReflections = [];
  
        if (storedReflections) {
          existingReflections = JSON.parse(storedReflections);
        }
        const updatedReflections = [...existingReflections, newReflection];
        await AsyncStorage.setItem("reflections", JSON.stringify(updatedReflections));
        setReflections(updatedReflections);
        setEnteredText("");
        poses.navigation.navigate("PastReflections");
      } catch (error) {
        console.error("Error saving reflection to local storage: ", error);
      }
    }
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

      <View style = {{flexDirection:'row', marginTop:30}}>  
        <FormInput
          onChangeText={(value) => setEnteredText(value)}
          value={enteredText}
          placeholder="Type your reflection here"
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.button} onPress={handleSaveReflection}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

        <SubButton22
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
        

        <Text style={{ fontSize: 20, color: "white", textAlign: "center"}}>
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

        <SubButton22
          text="Dashboard"
          // onPress={() => this.props.navigation.navigate('HabitScreen')}
          onPress={() => poses.navigation.navigate("HomeScreen")}
          // img = {require('../assets/signup.png')}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
button : {
  borderRadius : 10,
  backgroundColor : '#ff6200',
  // paddingHorizontal : 80,
  width : 40,
  height: 50,
  justifyContent:'center',
  alignItems:'center',
  marginStart:5,
  // marginVertical : 10,    
  },
  buttonText : {
      color : '#E1E5E5',
      fontWeight : 'bold',
      textTransform : 'capitalize',
      fontSize : 20,
      textAlign : 'center',
      // marginHorizontal : 80,
  },
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
