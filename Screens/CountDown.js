import React, { useState, useEffect } from 'react';
import { View, Text , Alert} from 'react-native';
import { StyleSheet } from 'react-native';
import MainButton from '../Components/MainButton';
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import BreakTimer from './BreakTimer';

const CountDown = ({ targetTime , breakInterval, poses} ) => {
    const [timeRemaining, setTimeRemaining] = useState(targetTime);
    const [worktime, setWorktime] = useState(300)
    const [isBreak, setIsBreak] = useState(false);
    const [break_mins, setbreak_mins] = useState(5)
    const startTime = targetTime;
    const resetNumMinutes = () => {
        setbreak_mins(5);
    }
    

    useEffect(() => {
        const interval = setInterval(() => {
          setTimeRemaining((prevTime) => {
            if (prevTime > 0) {
                // console.log(prevTime);
                if ((prevTime) % breakInterval === 0 && prevTime !== startTime) {
                    console.log("Break")
                    setIsBreak(true);
                    const incrementNumMinutes = () => {
                        setbreak_mins(prevTime => prevTime - 1);
                    }
                    
                    incrementNumMinutes();
                    if (break_mins > 0){
                        console.log("Within Break")
                        console.log(break_mins)
                        setIsBreak(false);
                    } else {
                        // break_mins = 5;,
                        console.log(break_mins);
                        console.log("Reset")
                        resetNumMinutes();
                        console.log(break_mins);
                        setIsBreak(false);
                        return prevTime - 1;
                    }
                    return prevTime;
                } else {
                    console.log(prevTime);
                    return prevTime - 1;
                }
            } else {
              console.log('Done')
              clearInterval(interval);
              return 0;
            }
          });
        }, 60000); // Update every 1 minute
        // }, 1000); // Update every 1 second
        
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

              megatext: {
                fontSize: 135,
                color: 'orange',
                // fontFamily: 'AppleSDGothicNeo-Bold',
                textTransform: 'uppercase',
                fontWeight: 'bold',
                textAlign: 'center'
              },

              midmegatext: {
                fontSize: 105,
                color: 'white',
                // fontFamily: 'AppleSDGothicNeo-Bold',
                textTransform: 'uppercase',
                fontWeight: 'bold',
                textAlign: 'center'
              },
        });

    // Convert remaining time to minutes and seconds
    const num_breaks = Math.floor(timeRemaining / worktime)

    const hour = Math.floor(timeRemaining / 60);
    const minutes = timeRemaining % 60;
    // const millis = 0;

    return (
        <View style={styles.text}>
            {(timeRemaining) > 0 ? (
                
                <>
                {(timeRemaining) % breakInterval === 0  && timeRemaining !== startTime ? (
                    <>
                    <Text style={styles.titletext}>
                    Break Time
                    </Text>

                    <View style={styles.text}>
                        <BreakTimer key={Date.now()} targetTime={break_mins} />
                    </View>

                    <Text style={styles.titletext}>
                    Relax before Working
                    </Text>
                    
                    </>
                ) : (
                    <>
                    <Text style={styles.titletext}>
                    Time to Get It On!
                    </Text>
                    <Text style={styles.titletext}>
                    Eyes on the Clock 
                    </Text>
                    </>

                    // <Text style={styles.titletext}>
                    //     Run
                    // </Text>
                )}

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
                    {hour.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}
                </Text>
                <MainButton
                    style = {{bottom : 1000}}
                    text="Stop"
                    onPress={() => 
                        Alert.alert("Focus Mode Exit", "Are you sure to exit Focus Mode?", [
                            {text: "Yes", onPress: () =>     
                                setTimeRemaining(0)
                            },
                            {text: "No", onPress: () => console.log("Cancel")},
                          ])
                        }
                />
                
                </>
                
            ) : (
                <>
                <Text style={styles.text}> CountDown Over! </Text>

                <Text style={styles.smallertext}> Were you able to complete your task? </Text>

                <MainButton
                    style = {{bottom : 1000}}
                    text = "No, I need to reschedule :("
                    onPress={() => poses.navigation.navigate('NavigationBarScreen')}
                />
                <MainButton
                    style = {{bottom : 1000}}
                    text = "Yes, I am all good :)"
                    onPress={() => poses.navigation.navigate('HomeScreen')}
                />    
                </>
            )}
            
        </View>
    );
}

export default CountDown;