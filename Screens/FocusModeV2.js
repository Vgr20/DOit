import React , {useState} from "react";
import { SafeAreaView } from "react-native";
import SubButton from "../Components/SubButton";
import { StyleSheet, View, Alert, Text, TextInput, ScrollView } from "react-native";
import SubButton2 from "../Components/SubButton2";

const FocusModeV2 = (poses) => {
    const [totaltime, onChangeTotalTime] = React.useState('60');
    const [worktime, onChangeWorkTime] = React.useState('30');
    const [breaktime, onChangeBreakTime] = React.useState('5');
    const [timerOn, setTimerOn] = React.useState(false);
    const [breakOn, setBreakOn] = React.useState(false);
    const [activeCounter, setActiveCounter] = React.useState(false);

    return (
        <ScrollView>
        <SafeAreaView style={styles.container}>
            {!activeCounter ? (
                <>
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
                    onChangeText={onChangeTotalTime}
                    value={totaltime}
                />

                <Text style={styles.smalltext}>
                    How long do you want 
                </Text>
                <Text style={styles.smalltext} >
                     to work continuously?
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeWorkTime}
                    value={worktime}
                />

                <Text style={styles.smalltext}>
                    Duration of Break
                </Text>
                {/* <Text style={styles.smalltext} >
                     want your break?
                </Text> */}
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeBreakTime}
                    value={breaktime}
                />

                <SubButton2 
                    text="Start Now"
                    onPress={() => 
                        Alert.alert("Focus Mode", "Are you ready to start Focus Mode?", [
                            {text: "Yes", onPress: () =>  
                                [activeCounter(true),
                                timerOn(true)]
                            },
                            {text: "No", onPress: () => console.log(startCounter)},
                        ])
                    }
                />
                </>
                ) : (
                    <></>
                )
            }

            {activeCounter && (
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

                <View style={styles.text}>
                    {/* <CountDownV2 key={Date.now()} targetTime={worktime} breakInterval={breaktime} breakDuration = {breakinterval} poses={props}/> */}
                    
                
                </View>

                </>
            )

            }
        </SafeAreaView>
        </ScrollView>
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
      },
});

export default FocusModeV2;