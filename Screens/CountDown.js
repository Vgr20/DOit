import React, { useState, useEffect } from 'react';
import { View, Text , Alert} from 'react-native';
import { StyleSheet } from 'react-native';
import MainButton from '../Components/MainButton';

function CountDown({ targetTime }) {
    const [timeRemaining, setTimeRemaining] = useState(targetTime);

    useEffect(() => {
        const interval = setInterval(() => {
          setTimeRemaining((prevTime) => {
            if (prevTime > 0) {
              return prevTime - 1;
            } else {
              clearInterval(interval);
              return 0;
            }
          });
        }, 1000); // Update every 1 second
        
        return () => {
            clearInterval(interval);
          };
    }, []);
      
        // Convert remaining time to minutes and seconds
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;

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

    return (
        <View style={styles.text}>
            {(minutes*60 + seconds) > 0 ? (
                
                <>
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
                />
                <MainButton
                    style = {{bottom : 1000}}
                    text = "Yes, I am all good :)"
                />    
                </>
            )}
            
        </View>
    );
}

export default CountDown;