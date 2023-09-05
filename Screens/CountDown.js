import React, { useState, useEffect } from 'react';
import { View, Text , Alert} from 'react-native';
import { StyleSheet } from 'react-native';
import MainButton from '../Components/MainButton';
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import BreakTimer from './BreakTimer';

const CountDown = ({ targetTime , breakInterval}, poses) => {
    const [timeRemaining, setTimeRemaining] = useState(targetTime);
    const [worktime, setWorktime] = useState(300)
    const [isBreak, setIsBreak] = useState(false);
    const [num_minutes, setNum_minutes] = useState(5)
    const startTime = targetTime;
    const resetNumMinutes = () => {
        setNum_minutes(5);
    }
    

    useEffect(() => {
        const interval = setInterval(() => {
          setTimeRemaining((prevTime) => {
            if (prevTime > 0) {
                // console.log(prevTime);
                if ((prevTime) % breakInterval === 0) {
                    console.log("Break")
                    setIsBreak(true);
                    const incrementNumMinutes = () => {
                        setNum_minutes(prevTime => prevTime - 1);
                    }
                    
                    incrementNumMinutes();
                    if (num_minutes > 0){
                        console.log("Within Break")
                        console.log(num_minutes)
                        setIsBreak(false);
                    } else {
                        // num_minutes = 5;,
                        console.log(num_minutes);
                        console.log("Reset")
                        resetNumMinutes();
                        console.log(num_minutes);
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
        // }, 60000); // Update every 1 minute
        }, 1000); // Update every 1 second
        
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
                color: 'white',
                // fontFamily: 'AppleSDGothicNeo-Bold',
                textTransform: 'uppercase',
                fontWeight: 'bold',
                textAlign: 'center'
              },
        });

    // Convert remaining time to minutes and seconds
    const num_breaks = Math.floor(timeRemaining / worktime)

    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    return (
        <View style={styles.text}>
            {(timeRemaining) > 0 ? (
                
                <>
                {(timeRemaining) % breakInterval === 0 ? (
                    <>
                    <Text style={styles.titletext}>
                    Break Time
                    </Text>

                    <View style={styles.text}>
                        <BreakTimer key={Date.now()} targetTime={num_minutes} />
                    </View>

                    <Text style={styles.titletext}>
                    Paused
                    </Text>
                    
                    </>
                ) : (
                    <>
                    <Text style={styles.titletext}>
                    Time to Work
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

                <Text style={styles.megatext}>
                    {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
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
                    onPress={() => poses.navigation.navigate('AddTask')}
                />
                <MainButton
                    style = {{bottom : 1000}}
                    text = "Yes, I am all good :)"
                    onPress={() => poses.navigation.navigate('Dashboard')}
                />    
                </>
            )}
            
        </View>
    );
}

export default CountDown;