import React, { useState, useEffect } from 'react';
import { View, Text} from 'react-native';
import { StyleSheet } from 'react-native';

const BreakTimerV2 = (timeSec) => {
    const breakStart = Math.floor(Date.now() / 1000);
    const breakEnd = breakStart + timeSec;
    let breakRemaining = breakEnd - Math.floor(Date.now() / 1000);
  
    var [breakMins, breakSecs] = [0,0]

    function displayMMSS(timeSec) {
      const mins = Math.floor(timeSec / 60);
      const secs = timeSec % 60;
      return [mins, secs];
    }

    while (breakRemaining > 0) {
      [breakMins, breakSecs] = displayMMSS(breakRemaining);
      console.log(`Break : ${breakMins}:${breakSecs}`);
      breakRemaining = breakEnd - Math.floor(Date.now() / 1000);
    }

    return (
        <Text style={styles.midmegatext}>
            {breakMins.toString().padStart(2, '0')}:{breakSecs.toString().padStart(2, '0')} 
        </Text>
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

export default BreakTimerV2;