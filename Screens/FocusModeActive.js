import React, { useState } from 'react';
import { SafeAreaView } from 'react-navigation';
import { Button, View , StyleSheet , Text, Alert, TextInput, Image} from 'react-native';
import MainButton from '../Components/MainButton';
import CountDownV1 from './CountDownV1';
import CheckBoxWithText from '../Components/CheckBoxWithText';
import SubButton from '../Components/SubButton';
import { useFocusEffect } from '@react-navigation/native';
import SubButton22 from '../Components/SubButton22';
import { ScrollView } from 'react-native-gesture-handler';
// import CountDownV3 from './CountDownV3';

import { useTimerStatus, useTimerUpdate , useFinishTime , useSetFinishTime} from '../Context/TimerStatus';

function FocusModeActive(props) {
    const [worktime, onChangeText1] = React.useState('60');
    const [breaktime, onChangeText2] = React.useState('25');
    const [breakinterval, onChangeText3] = React.useState('5');
    const [showCountdown, setShowCountdown] = React.useState(false);
    const [startCounter, setStartCounter] = React.useState(false);
    const handleCheckBoxChange = (isChecked) => {
        console.log('Checkbox checked:', isChecked);
    };
    const isTimerActive = useTimerStatus();
    const toggleTimerStatus = useTimerUpdate();
    const workFinish = useFinishTime();
    const updateFinishTime = useSetFinishTime();

    var inProgress = isTimerActive;

    return (

        
        <SafeAreaView style={styles.container}>
        <ScrollView>

            {!isTimerActive ? (
                <>
                <Image
                img = {require('../assets/focused.png')}
                style={{ width: 200, height: 200, alignSelf: "center"}}
                />
                <SubButton 
                text="Focus Mode"
                subtext={"Let's Go Get On!"}
                img = {require('../assets/focused.png')}
                // onPress={() => poses.navigation.navigate('FocusMode')}
                onPress={() => 
                    Alert.alert("Focus Mode", "Let's Get it On!", [
                        {text: "Yesssss!", onPress: () =>  
                        console.log("Yessss!")
                        } ])
                    }
                />

            <Text style={styles.text}> CountDown Over! </Text>

            <Text style={styles.smallertext}> Were you able to complete your task? </Text>

            <SubButton22 
                text="No, I need to reschedule"
                onPress={() => props.navigation.navigate('NavigationBarScreen')}
            />
            <SubButton22 
                text="Yes, I am all good !"
                onPress={() => props.navigation.navigate('HomeScreen')}
            />

                </>
                ) : (
                    <></>
                )
            }

            {isTimerActive && (
                <>
                <SubButton 
                text="Focus Mode Activated"
                subtext={"Let's Go Get On!"}
                img = {require('../assets/focused.png')}
                // onPress={() => poses.navigation.navigate('FocusMode')}
                onPress={() => 
                    Alert.alert("Focus Mode", "Let's Get it On!", [
                        {text: "Yesssss!", onPress: () =>  
                        console.log("Yessss!")
                        } ])
                    }
                />
                {/* <Text style={styles.titletext}>
                    Focus Mode
                </Text>    */}

                <View style={styles.text}>
                    <CountDownV1 key={Date.now()} targetTime={worktime} breakInterval={breaktime} breakDuration = {breakinterval} poses={props}/>
                </View>
                </>
            )}

        </ScrollView>
        </SafeAreaView> 
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
        fontSize: 45,
        color: 'white',
        // fontFamily: 'AppleSDGothicNeo-Bold',
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },

    smalltext: {
        fontSize: 20,
        color: 'white',
        // fontFamily: 'AppleSDGothicNeo-Bold',
        textTransform: "capitalize",
        // textTransform: 'uppercase',
        fontWeight: 'bold',
        textAlign: 'center'

    },

    text: {
        fontSize: 30,
        color: 'white',
        // fontFamily: 'AppleSDGothicNeo-Bold',
        // textTransform: 'uppercase',
        textTransform: "capitalize",
        fontWeight: 'bold',
        textAlign: 'center'

    },
    input: {
        height: 55,
        margin: 15,
        borderWidth: 3,
        borderRadius: 10,
        padding: 12,
        fontSize:25,
        width: 60,
        fontWeight: 'bold',
        alignSelf: "center",
        textAlign: "center",
        backgroundColor: "#829595"
      },

      smallertext: {
        fontSize: 15,
        color: 'white',
        // fontFamily: 'AppleSDGothicNeo-Bold',
        // textTransform: 'uppercase',
        textTransform: "capitalize",
        fontWeight: 'semibold',
        textAlign: 'center'
      },
});

export default FocusModeActive;