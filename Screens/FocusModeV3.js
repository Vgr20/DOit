import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-navigation';
import { Button, View , StyleSheet , Text, Alert, TextInput} from 'react-native';
import MainButton from '../Components/MainButton';
import CountDown from './CountDown';
import CheckBoxWithText from '../Components/CheckBoxWithText';
import SubButton from '../Components/SubButton';
import { useFocusEffect } from '@react-navigation/native';
import SubButton2 from '../Components/SubButton2';
import { ScrollView } from 'react-native-gesture-handler';
import CounterV4 from './CountDownV4';
import BreakTimerV2 from './BreakTimerV2';

function FocusModeV3 (props) {
    const [totaltimeInput, onChangeTotalTimeInput] = React.useState('60');
    const [worktimeInput, onChangeWorkTimeInput] = React.useState('30');
    const [breaktimeInput, onChangeBreakTimeInput] = React.useState('5');

    const totaltime = totaltimeInput*60;
    const worktime = worktimeInput*60;
    const breaktime = breaktimeInput*60;

    var numBreaksLeft = Math.ceil(totaltime / worktime) - 1;
    const tot_breaks = Math.ceil(totaltime / worktime) - 1;

    const [activeCounter, setActiveCounter] = React.useState(false);
    const [isBreak, setIsBreak] = React.useState(false);

    useEffect(() => {
        if (activeCounter) {
            workLoop();
        }   
    }, [activeCounter])

    const workLoop = () => {
        const intervalId = setInterval(() => {
          if (numBreaksLeft > 0) {
            if (isBreak) {
              // Display Break Timer 
              setIsBreak(false);
            } else {
              // Display Work Timer
              numBreaksLeft -= 1;
              console.log(numBreaksLeft)
              setIsBreak(true);
            }
          } else {
            // Display Work Timer for remaining time
            clearInterval(intervalId);
            setIsBreak(true); // or false based on your final requirement
          }
        }, worktime * 1000); // Assumes worktime is in seconds
      };

    return (
        <SafeAreaView style={styles.container}>
        <ScrollView>
            {!activeCounter ? (
                <>
                <SubButton
                    text="Focus Mode"
                    img = {require('../assets/focused.png')}
                    subtext={"With Pomodoro technique"}
                    onPress={() => 
                        Alert.alert("Focus Mode", "Let's Get Focused!", [
                            {text: "Yippeee!", onPress: () =>  
                            console.log("Yippeee!")
                        } ])
                    }
                />

                <Text style={styles.smalltext}>
                    Total Duration of Task
                </Text>
                <Text style={styles.smallertext}>
                    in Minutes
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeTotalTimeInput}
                    value={totaltimeInput}
                />

                <Text style={styles.smalltext}>
                    Working Duration of a Segment
                </Text>
                <Text style={styles.smallertext}>
                    in Minutes
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeWorkTimeInput}
                    value={worktimeInput}
                />
                
                <Text style={styles.smalltext}>
                    Break Duration
                </Text>
                <Text style={styles.smallertext}>
                    in Minutes
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeBreakTimeInput}
                    value={breaktimeInput}
                />

                <SubButton2 
                    text="Start Now"
                    onPress={() => 
                        Alert.alert("Focus Mode", "Are you ready to start Focus Mode?", [
                            {text: "Yes", onPress: () =>  
                                [setActiveCounter(true),
                                console.log(worktime)]
                            },
                            {text: "No", onPress: () => console.log("Not Started")},
                        ])
                    }
                />  

                </>
            ) : (
                <>
                <MainButton 
                text="Focus Mode"
                img = {require('../assets/focused.png')}
                // onPress={() => poses.navigation.navigate('FocusMode')}
                onPress={() => 
                    Alert.alert("Focus Mode", "Let's Get it On!", [
                        {text: "Yesssss!", onPress: () =>  
                        console.log("Yessss!")
                        } ])
                    }
                />
                
                {!isBreak ? (
                    <View style={styles.text}>
                    <Text style={styles.titletext}>
                        Working Time
                    </Text>
                    <CounterV4 key={Date.now()} timeSec={worktime} />
                    </View>
                ) : (
                    <View style={styles.text}>
                    <Text style={styles.titletext}>
                        Take a Break
                    </Text>
                    <BreakTimerV2 key={Date.now()} timeSec={breaktime} />
                    </View>
                )

                }



                </>
            )}


        </ScrollView>
        </SafeAreaView>

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
        fontSize: 45,
        color: 'white',
        // fontFamily: 'AppleSDGothicNeo-Bold',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        textAlign: 'center'
    },

    smalltext: {
        fontSize: 20,
        color: 'white',
        // fontFamily: 'AppleSDGothicNeo-Bold',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        textAlign: 'center'

    },

    text: {
        fontSize: 30,
        color: 'white',
        // fontFamily: 'AppleSDGothicNeo-Bold',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        textAlign: 'center'

    },
    input: {
        height: 55,
        margin: 15,
        borderWidth: 4,
        padding: 12,
        fontSize:30,
        width: 60,
        alignSelf: "center",
        textAlign: "center"
      },

      smallertext: {
        fontSize: 15,
        color: 'white',
        // fontFamily: 'AppleSDGothicNeo-Bold',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        textAlign: 'center'
      },
});

export default FocusModeV3;