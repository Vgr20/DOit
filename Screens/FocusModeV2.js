import React , {useEffect, useState} from "react";
import { SafeAreaView } from "react-native";
import SubButton from "../Components/SubButton";
import { StyleSheet, View, Alert, Text, TextInput, ScrollView } from "react-native";
import SubButton2 from "../Components/SubButton2";
import MainButton from "../Components/MainButton";
import _BackgroundTimer from "react-native-background-timer";
// import { setIn } from "formik";
// import { UseSelector } from "react-redux/es/hooks/useSelector";
// import Dispatch from "redux";
// import { useDispatch } from "react-redux";


const FocusModeV2 = (poses) => {
    const [totaltimeInput, onChangeTotalTimeInput] = React.useState('60');
    const [worktimeInput, onChangeWorkTimeInput] = React.useState('30');
    const [breaktimeInput, onChangeBreakTimeInput] = React.useState('5');

    const totaltime = totaltimeInput*60;
    const worktime = worktimeInput*60;
    const breaktime = breaktimeInput*60;

    let numBreaksLeft = Math.ceil(totaltime / worktime) - 1;

    const [timerOn, setTimerOn] = React.useState(false);
    const [breakOn, setBreakOn] = React.useState(false);
    // const [activeCounter, setActiveCounter] = React.useState(false);
    const [startTime, setStartTime] = React.useState(Math.floor(Date.now() / 1000))
    var finishTime = 0;
    const [distance, setDistance] = React.useState(0);

    let activeCounter = false;
    let isBreak = false;

    function breakCounter(timeSec) {
        const breakStart = Math.floor(Date.now() / 1000);
        const breakEnd = breakStart + timeSec;
        let breakRemaining = breakEnd - Math.floor(Date.now() / 1000);
      
        while (breakRemaining > 0) {
          const minutes = Math.floor(breakRemaining / 60);
          const seconds = breakRemaining % 60;
          console.log(`Break: ${minutes}:${seconds}`);
          breakRemaining = breakEnd - Math.floor(Date.now() / 1000);
        }
    }

    const clockify = (distance) => {

        let hours = Math.floor(distance / 60 / 60)
        let mins = Math.floor(distance / 60 % 60)
        let secs = Math.floor(distance % 60 )
    
        let displayHours = hours;
        let displayMins = mins < 10 ? '0'+mins : mins;
        let displaySecs = secs < 10 ? '0'+secs : secs;
    
        return {
            displayHours,
            displayMins,
            displaySecs,
        }
    }

    const beginTimer = (totaltime) => {
        setStartTime(Date.now());
        finishTime = startTime + (totaltime*1000); 
        console.log(startTime);
        console.log(finishTime);
    }

    // useEffect(() => {
    //     if (timerOn) startTimer();
    //     else backtimer.stopBackgroundTimer();

    //     return () => {
    //         backtimer.stopBackgroundTimer();
    //     }
    // }, [timerOn])


    // useEffect(() => {
    //     var now = new Date().getTime();
    //     distance = Math.floor((finishTime - now)/1000);

    //     if (distance < 0) {
    //         distance = 0
    //     }
    //     return distance;
    // }, 1000)

    useEffect(() => {
        const interval = setInterval(() => {
            setDistance((distance) => {
                if (distance > 0) {
                    console.log(distance)
                    return finishTime - Date.now()
                } else {
                    console.log(0);
                    clearInterval(interval);
                    return 0;
                }
            })
        });
    }, 1000);
    // }, 100);  // for debugging


    // var timer = setInterval(function() {
    //     var now = new Date().getTime();
    //     distance = Math.floor((finishTime - now)/1000);

    //     if (distance < 0) {
    //         clearInterval(timer);
    //     }
    //     return distance;
    // }, 1000)

    // useEffect(() => {
    //     if (activeCounter) returntimer;
    // }, [activeCounter])

    return (
        <SafeAreaView style={styles.container}>
        <ScrollView>
        
            {!activeCounter ? (
                <>
                <ScrollView>
                <SubButton
                    text = "Focus Mode"
                    img = {require('../assets/focused.png')}
                    subtext={"With Pomodoro technique"}
                    // onPress={() => poses.navigation.navigate('FullScreen')}
                    onPress={() => 
                        Alert.alert("Focus Mode", "Let's Get Focused!", [
                            {text: "Yippeee!", onPress: () =>  
                            console.log("Yippeee!")
                            } ])
                        }
                />

                <Text style={styles.smalltext}>
                    Enter Total Duration 
                </Text>
                <Text style={styles.smalltext}>
                    of Task in Minutes
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeTotalTimeInput}
                    value={totaltimeInput}
                />

                <Text style={styles.smalltext}>
                    How long do you want 
                </Text>
                <Text style={styles.smalltext} >
                     to work continuously?
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeWorkTimeInput}
                    value={worktimeInput}
                />

                <Text style={styles.smalltext}>
                    Duration of Break
                </Text>
                {/* <Text style={styles.smalltext} >
                     want your break?
                </Text> */}
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
                                [beginTimer(totaltime),
                                 setActiveCounter(true)
                                ]
                            },
                            {text: "No", onPress: () => console.log(startCounter)},
                        ])
                    }
                />
                </ScrollView>
                </>
                ) : (
                    <></>
                )
            }

            {activeCounter && (
                <>
                <ScrollView>
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


                <View style={styles.text}>
                    <Text style={styles.megatext}>
                        {clockify(distance).displayHours.toString()}:{clockify(distance).displayMins}:{clockify(distance).displaySecs}
                    </Text>
                    <Text style={styles.titletext}>
                        Get It On!
                    </Text>



                
                </View>
                </ScrollView>
                </>
            )

            }
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
        textAlign:'center',
        borderWidth: 4,
        padding: 12,
        fontSize:30,
        width: 75,
        alignSelf: 'center'
      },

    megatext: {
        fontSize: 105,
        color: 'orange',
        // fontFamily: 'AppleSDGothicNeo-Bold',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        textAlign: 'center'
    },
});

export default FocusModeV2;