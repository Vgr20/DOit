import React, { useState } from 'react';
import { SafeAreaView } from 'react-navigation';
import { Button, View , StyleSheet , Text, Alert, TextInput} from 'react-native';
import MainButton from '../Components/MainButton';
import CountDown from './CountDown';
import CheckBoxWithText from '../Components/CheckBoxWithText';
import SubButton from '../Components/SubButton';
import { useFocusEffect } from '@react-navigation/native';
import SubButton2 from '../Components/SubButton2';
import { ScrollView } from 'react-native-gesture-handler';

function FocusMode(props) {
    const [worktime, onChangeText1] = React.useState('60');
    const [breaktime, onChangeText2] = React.useState('30');
    const [breakinterval, onChangeText3] = React.useState('5');
    const [showCountdown, setShowCountdown] = React.useState(false);
    const [startCounter, setStartCounter] = React.useState(false);
    const handleCheckBoxChange = (isChecked) => {
        console.log('Checkbox checked:', isChecked);
    };
    const [isFocused, setIsFocused] = useState(true);

    return (

        
        <SafeAreaView style={styles.container}>
        <ScrollView>

            {!startCounter ? (
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
                    Enter Focus Mode 
                </Text>
                <Text style={styles.smalltext}>
                    Duration in Minutes
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText1}
                    value={worktime}
                />

                <Text style={styles.smalltext}>
                    How often you want 
                </Text>
                <Text style={styles.smalltext} >
                    your break?
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText2}
                    value={breaktime}
                />

                <Text style={styles.smalltext}>
                    How long do you
                </Text>
                <Text style={styles.smalltext} >
                    want your break?
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText3}
                    value={breakinterval}
                />

                <SubButton2 
                    text="Start Now"
                    onPress={() => 
                        Alert.alert("Focus Mode", "Are you ready to start Focus Mode?", [
                            {text: "Yes", onPress: () =>  
                                [setShowCountdown(true),
                                setStartCounter(true)]
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

            {showCountdown && (
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
                {/* <Text style={styles.titletext}>
                    Focus Mode
                </Text>    */}

                <View style={styles.text}>
                    <CountDown key={Date.now()} targetTime={worktime} breakInterval={breaktime} breakDuration = {breakinterval} poses={props}/>
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
});

export default FocusMode;