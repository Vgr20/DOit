import React, { useState, useEffect } from 'react';
import { View, Text} from 'react-native';
import { StyleSheet } from 'react-native';
import PercentageBar from '../Components/PercentageBar';
import SubButton2 from '../Components/SubButton2';

const CounterV4 = ({timeSec}) => {
    const workStart = Math.floor(Date.now() / 1000);
    const workEnd = workStart + timeSec;
    let workRemaining = workEnd - Math.floor(Date.now() / 1000)
    var stop = false;

    var [workMins, workSecs] = [0,0]

    function displayMMSS(timeSec) {
        const mins = Math.floor(timeSec / 60);
        const secs = timeSec % 60;
        return [mins, secs];
      }

    while (workRemaining > 0 && !stop) {
        [workMins, workSecs] = displayMMSS(workRemaining);
        // console.log(`Work : ${workMins}:${workSecs}`);
        workRemaining = workEnd - Math.floor(Date.now() / 1000)
    }

    return (
        <>
        <Text style={styles.megatext}>
            {workMins.toString().padStart(2, '0')}:{workSecs.toString().padStart(2, '0')}
        </Text>

        <PercentageBar percentage={Math.round(((workStart - workRemaining)/ timeSec) * 100)}/>

        <Text>{workStart} , {timeSec}, {Math.floor(Date.now() / 1000)}</Text>

        <Text style={styles.titletext}>
            Hours to go    
        </Text>

        <Text style={styles.smallertext}>
            H:MM:SS
        </Text>

        <SubButton2 
                    text="Stop"
                    onPress={() => Alert.alert("Focus Mode Exit", "Are you sure to exit Focus Mode?", [
                        {text: "Yes", onPress: () =>     
                            stop = true
                        },
                        {text: "No", onPress: () => console.log("Cancel")},
                      ])
                    }
                />

        </>
    )
}

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
        fontSize: 100,
        color: 'white',
        // fontFamily: 'AppleSDGothicNeo-Bold',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        textAlign: 'center'
      },

      midsmalltext: {
        fontSize: 30,
        color: 'white',
        // fontFamily: 'AppleSDGothicNeo-Bold',
        // textTransform: 'uppercase',
        // fontWeight: 'bold',
        textAlign: 'center'
      },
});

export default CounterV4;