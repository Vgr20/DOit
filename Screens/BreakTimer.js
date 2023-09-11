import React, { useState, useEffect } from 'react';
import { View, Text , Alert} from 'react-native';
import { StyleSheet } from 'react-native';
import MainButton from '../Components/MainButton';
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";

const BreakTimer = ({ targetTime }) => {
    const [timeRemaining, setTimeRemaining] = useState(targetTime);
    // const [worktime, setWorktime] = useState(300)
    const [isBreak, setIsBreak] = useState(true);

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

                <Text style={styles.midmegatext}>
                    {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')} 
                </Text>
                <Text style={styles.titletext}>
                     minutes left
                </Text>

                <Text style={styles.smallertext}>
                    MM:SS
                </Text>

                <Text style={styles.titletext}>
                     
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