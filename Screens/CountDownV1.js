import React, { useState, useEffect } from 'react';
import { View, Text , Alert, Image} from 'react-native';
import { StyleSheet } from 'react-native';
import MainButton from '../Components/MainButton';
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import BreakTimer from './BreakTimer';
import SubButton2 from '../Components/SubButton2';
import PercentageBar from '../Components/PercentageBar';
import BreakBar from '../Components/BreakBar';
import SubButton from '../Components/SubButton';
import SubButton22 from '../Components/SubButton22';

import { useTimerStatus, useTimerUpdate, useFinishTime, useTotalDuration, useAppPaused, usePauseStart } from '../Context/TimerStatus';

const Tips_list = [
    <SubButton
    text="Productivity Tip"
    img = {require('../assets/PrioritizeTasks.png')}
    subtext={"Prioritize Tasks\nClick to Read More"}
    onPress={() => 
        Alert.alert("Prioritize Tasks", "Rank activities based on urgency and impact to tackle the most critical first.", [
            {text: "Right!", onPress: () =>  
            console.log("Yippeee!")
            } ])
        }
    />, 

    <SubButton
    text="Productivity Tip"
    img = {require('../assets/ClearGoals.png')}
    subtext={"Set Clear Goals\nClick to Read More"}
    onPress={() => 
        Alert.alert("Set Actionable Clear Goals", "Clearly define your objectives and desired outcomes for a focused direction.", [
            {text: "Right!", onPress: () =>  
            console.log("Yippeee!")
            } ])
        }
    />, 

    <SubButton
    text="Productivity Tip"
    img = {require('../assets/QuietWork.png')}
    subtext={"Create a Quiet Workspace\nClick to Read More"}
    onPress={() => 
        Alert.alert("Create a Quiet Workspace", " Establish a clutter-free, peaceful environment for better concentration.", [
            {text: "Right!", onPress: () =>  
            console.log("Yippeee!")
            } ])
        }
    />, 

    <SubButton
    text="Productivity Tip"
    img = {require('../assets/rewards.png')}
    subtext={"Set Rewards\nClick to Read More"}
    onPress={() => 
        Alert.alert("Set Rewards", "Motivate yourself with small incentives for completing challenging tasks. Like that well-deserved break in a few minutes more.", [
            {text: "Right!", onPress: () =>  
            console.log("Yippeee!")
            } ])
        }
    />, 

    <SubButton
    text="Productivity Tip"
    img = {require('../assets/NoMultiTask.png')}
    subtext={"Eliminate Multitasking\nClick to Read More"}
    onPress={() => 
        Alert.alert("Eliminate Multitasking", "Focus on one task at a time for improved efficiency and better results.", [
            {text: "Right!", onPress: () =>  
            console.log("Yippeee!")
            } ])
        }
    />

]

var randomNum = Math.floor(Math.random() * 5);

function calculateBreakTimes(totalTime, workTime) {
    const breakMilestones = [];
    let currentTime = 0;

    while (currentTime + workTime < totalTime) {
    currentTime += workTime;
    const percentage = (currentTime / totalTime) * 100;
    breakMilestones.push(percentage);
    }

    return breakMilestones;
}

const CountDownV1 = ({ targetTime , breakInterval, breakDuration, poses} ) => {
    let workFinish = useFinishTime().finishTime;
    const updateFinishTime = useFinishTime().changeFinishTime;

    const [timeRemaining, setTimeRemaining] = useState(Math.floor(workFinish - (Date.now()/1000)));
    const [worktime, setWorktime] = useState(breakInterval*60)
    // const worktime = useTotalDuration.totalDuration;
    const [isBreak, setIsBreak] = useState(false);
    const [break_mins, setbreak_mins] = useState(breakDuration*60)
    const startTime = useTotalDuration().totalDuration;
    const resetNumMinutes = () => {
        setbreak_mins(breakDuration*60);
    }
    const [num_breaks, setnum_breaks] = useState(Math.ceil((startTime/60) / (breakInterval)) - 1);
    const tot_breaks = Math.ceil((startTime/60) / (breakInterval)) - 1;
    
    const breakList = calculateBreakTimes(startTime, worktime)

    const isTimerActive = useTimerStatus();
    const toggleTimerStatus = useTimerUpdate();

    // var isPaused = false;

    let isPaused = useAppPaused().timerPaused;
    const updatePlayPause = useAppPaused().changePlayPause;

    let pauseStart = usePauseStart().pauseStartAt;
    const updatePauseStart = usePauseStart().changePauseStart;

    useEffect(() => {
        const interval = setInterval(() => {
          setTimeRemaining((prevTime) => {
            if (isPaused) {
                return prevTime + Math.floor(Date.now() / 1000) - pauseStart - (+ Math.floor(Date.now() / 1000) - pauseStart)
                // return prevTime;
            }

            if (prevTime > 0) {
                if (prevTime % 120 == 0) {
                    randomNum = Math.floor(Math.random() * 5);
                    console.log("New Habit:",randomNum)
                }
                if ((startTime - prevTime) % (breakInterval*60) === 0 && prevTime !== startTime) {
                    // updatePlayPause(true);
                    console.log("Break")
                    setIsBreak(true);
                    const incrementNumMinutes = () => {
                        setbreak_mins(prevTime => prevTime - 1);
                    }
                    
                    incrementNumMinutes();
                    if (break_mins > 1){
                        console.log("Within Break")
                        console.log(break_mins)
                        setIsBreak(false);
                    } else {
                        newFinishTime();
                        // updatePlayPause(true);
                        // console.log("Updated before break ", workFinish);
                        // const newFinish = break_mins + workFinish; 
                        // updateFinishTime(newFinish);
                        // console.log("should have been ", newFinish);
                        // console.log("Updated finish after break ", workFinish);
                        console.log(break_mins);
                        console.log("Reset");
                        resetNumMinutes();
                        console.log(break_mins);
                        setIsBreak(false);
                        setnum_breaks(num_breaks - 1)
                        return prevTime - 1;
                    }
                    return prevTime;
                } else {
                    // console.log(prevTime);
                    // console.log("Start_total:",targetTime, worktime)
                    console.log("start, remain, end_epoch ",startTime, timeRemaining, workFinish)
                    // console.log(breakList)
                    return prevTime - 1;
                }
            } else {
              console.log('Done')
              
              clearInterval(interval);
            //   return 0;
              stopCounter();
            }
          });
        // }, 60000); // Update every 1 minute
        }, 1000); // Update every 1 second
        // }, 100); // For debugging   
        
        return () => {
            clearInterval(interval);
          };
    }, [timeRemaining, isBreak]);

    // Convert remaining time to hours and minutes
    const hour = Math.floor(timeRemaining / 3600);
    const minutes = Math.floor((timeRemaining % 3600) / 60);
    const seconds = timeRemaining % 60;

    const stopCounter = () => {
        toggleTimerStatus()
        updatePlayPause(false)
        poses.navigation.navigate("FocusModeActive")
    }

    const newFinishTime = () => {
        console.log("Updated before break ", workFinish);
        console.log("break_dur",breakDuration*60)
        const newFinish = (breakDuration*60) + workFinish; 
        updateFinishTime(newFinish);
        console.log("should have been ", newFinish);
        console.log("Updated finish after break ", workFinish);
    }

    const applyPlayPause = () => {
        if (isPaused) {
          const addTime = Math.floor(Date.now() / 1000) - pauseStart;
      
          console.log(workFinish)
          // Update the finish time with the added time
          const newFinishTime = workFinish + addTime;
          updateFinishTime(newFinishTime);
          console.log("Updated finish ", workFinish)
      
          // Clear the pause start time
          updatePauseStart(0);
      
          // Update the pause state
          updatePlayPause(false);
        } else {
          // Set the pause start time to the current time
          updatePauseStart(Math.floor(Date.now() / 1000));
      
          // Update the pause state
          updatePlayPause(true);
        }
      };

    return (
        <View style={styles.text}>
            <Image
            source={require("../assets/undraw_time.png")}
            style={{ width: 200, height: 200, alignSelf: "center"}}
            />
            {(timeRemaining) > 0 ? (
                
                <>
                {(startTime - timeRemaining) % (breakInterval*60) === 0  && timeRemaining !== startTime ? (
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
                    {(isPaused) ? (
                        <Text style={styles.titletext}>
                        Timer Paused
                        </Text>
                    ) : (
                        <Text style={styles.titletext}>
                        Time to Get It On!
                        </Text>
                    )}                    

                    </>
                )}

                <Text style={styles.midmegatext}>
                    {hour.toString()}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
                </Text>

                <Text style={styles.titletext}>
                    Hours to go    
                </Text>

                <Text style={styles.smallertext}>
                    H:MM:SS
                </Text>

                {/* <Text style={styles.smallertext}>
                    
                </Text> */}

                <PercentageBar percentage={Math.round(((startTime - timeRemaining)/ startTime) * 100)}/>
                
                {/* <BreakBar percentage={worktime/startTime*100}></BreakBar>    */}

                <Text style={styles.midsmalltext}>
                    
                    You have {num_breaks}/{tot_breaks} breaks left!
                </Text>

                {Tips_list[randomNum]}

                {<SubButton22 
                    text={isPaused ? 'Play' : 'Pause'}
                    onPress={applyPlayPause}
                />}

                <SubButton22
                    text = "Stop"
                    onPress= {stopCounter}
                />
            
                {/* <SubButton22 
                    text="Stop"
                    onPress={() => Alert.alert("Focus Mode Exit", "Are you sure to exit Focus Mode?", [
                        {text: "Yes", onPress: () =>     
                            setTimeRemaining(0)
                        },
                        {text: "No", onPress: () => console.log("Cancel")},
                      ])
                    }
                /> */}
                
                </>
                
            ) : (
                <>
                <Text style={styles.text}> CountDown Over! </Text>

                <Text style={styles.smallertext}> Were you able to complete your task? </Text>

                <SubButton22 
                    text="No, I need to reschedule"
                    onPress={() => poses.navigation.navigate('NavigationBarScreen')}
                />
                <SubButton22 
                    text="Yes, I am all good !"
                    onPress={() => poses.navigation.navigate('HomeScreen')}
                />
                </>
            )}
            
        </View>
    );
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
        textTransform: 'capitalize',
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
        textTransform: 'capitalize',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20
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

export default CountDownV1;