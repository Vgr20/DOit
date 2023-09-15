import React, { useState, useEffect } from 'react';
import { View, Text , Alert} from 'react-native';
import { StyleSheet } from 'react-native';
import MainButton from '../Components/MainButton';
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import SubButton from '../Components/SubButton';

const Habits_list = [
    <SubButton
    text="Drinking Water"
    img = {require('../assets/drinkwater.png')}
    subtext={"Make sure you drink enough.\nClick to Read More"}
    onPress={() => 
        Alert.alert("Drinking Water", "Stay hydrated: Sip water throughout the day for optimal energy and vitality.", [
            {text: "Right!", onPress: () =>  
            console.log("Yippeee!")
            } ])
        }
    />, 

    <SubButton
    text="Going For a Walk"
    img = {require('../assets/walk2.png')}
    subtext={"Feel the Environment.\nClick to Read More"}
    onPress={() => 
        Alert.alert("Going For A Walk", "Take daily walks: Boost mood and creativity while improving physical health.", [
            {text: "Right!", onPress: () =>  
            console.log("Yippeee!")
            } ])
        }
    />,

    <SubButton
    text="Meditating"
    img = {require('../assets/stayathome2.png')}
    subtext={"Make your mind Focus.\nClick to Read More"}
    onPress={() => 
        Alert.alert("Meditating", "Meditate daily: Relieve stress, enhance focus, and find inner peace.", [
            {text: "Right!", onPress: () =>  
            console.log("Yippeee!")
            } ])
        }
    />, 

    <SubButton
    text="Exercise"
    img = {require('../assets/excercise.png')}
    subtext={"Get ready you body.\nClick to Read More"}
    onPress={() => 
        Alert.alert("Exercising", "Exercise regularly: Boost energy, stay fit, and improve your mood.", [
            {text: "Right!", onPress: () =>  
            console.log("Yippeee!")
            } ])
        }
    />,

    <SubButton
    text="Journaling"
    img = {require('../assets/journaling2.png')}
    subtext={"Write every memory.\nClick to Read More"}
    onPress={() => 
        Alert.alert("Journaling", "Journal daily: Reflect on your thoughts, feelings, and experiences for mental clarity and self-discovery.", [
            {text: "Right!", onPress: () =>  
            console.log("Yippeee!")
            } ])
        }
    />

]

var randomNum = Math.floor(Math.random() * 5);

const BreakTimer = ({ targetTime }) => {
    const [timeRemaining, setTimeRemaining] = useState(targetTime);
    // const [worktime, setWorktime] = useState(300)
    const [isBreak, setIsBreak] = useState(true);

    // Generates a random number between 0 and 4
    console.log("habit no: "+randomNum); // Output a random number between 0 and 4

    useEffect(() => {
        const interval = setInterval(() => {
          setTimeRemaining((prevTime) => {
            if (prevTime > 0) {
                if (prevTime % 60 == 0) {
                    randomNum = Math.floor(Math.random() * 5);
                    console.log("New Habit:",randomNum)
                }
              return prevTime - 1;
            } else {
              clearInterval(interval);
              return 0;
            }
          });
        // }, 60000); // Update every 1 minute
        }, 999.9); // Update every 1 second
        // }, 99.99); // For debugging  
        
        return () => {
            clearInterval(interval);
          };
    }, [timeRemaining, isBreak]);
      


        const styles = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: '#2f4f4f',
                alignItems: 'center',
                justifyContent: 'center',
            },

            titletext: {
                fontSize: 30,
                color: 'white',
                // fontFamily: 'AppleSDGothicNeo-Bold',
                textTransform: 'uppercase',
                fontWeight: 'bold',
                textAlign: 'center',
            },

            text: {
                fontSize: 30,
                color: 'white',
                // fontFamily: 'AppleSDGothicNeo-Bold',
                textTransform: 'uppercase',
                fontWeight: 'bold',
                textAlign: 'center',
            },
            input: {
                height: 41,
                margin: 12,
                borderWidth: 1,
                padding: 10,
                fontSize:20,
              },

              smallertext: {
                fontSize: 15,
                color: 'white',
                // fontFamily: 'AppleSDGothicNeo-Bold',
                textTransform: 'uppercase',
                fontWeight: 'bold',
                textAlign: 'center'
              },

              midmegatext: {
                fontSize: 80,
                color: 'yellow',
                // fontFamily: 'AppleSDGothicNeo-Bold',
                textTransform: 'uppercase',
                fontWeight: 'bold',
                textAlign: 'center'
              },

              megatext: {
                fontSize: 135,
                color: 'white',
                // fontFamily: 'AppleSDGothicNeo-Bold',
                textTransform: 'uppercase',
                fontWeight: 'bold',
                textAlign: 'center'
              },
        });

    // Convert remaining time to minutes and seconds

    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    return (
        <View style={styles.text}>
            {(minutes*60 + seconds) > 0 ? (
                
                <>
                {/* {(isBreak) ? (
                    <Text style={styles.titletext}>
                    Break Time
                    </Text>
                ) : (
                    <Text style={styles.titletext}>
                    Time to Work
                    </Text>
                )} */}

                <Text style={styles.midmegatext}>
                    {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')} 
                </Text>
                <Text style={styles.titletext}>
                     minutes left
                </Text>

                <Text style={styles.smallertext}>
                    MM:SS
                </Text>

                <Text>

                </Text>

                <Text style={styles.titletext}>
                    Try out
                    <View>
                        {Habits_list[4]}
                    </View>
                </Text>
                
                </>
                
            ) : (
                
                <>
                <Text style={styles.text}> Over! </Text>
                <Text style={styles.text}> Back to Work! </Text>

               
                </>
            )}
            
        </View>
    );
}

export default BreakTimer;