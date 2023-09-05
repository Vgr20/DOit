import React, { useState } from 'react';
import { SafeAreaView } from 'react-navigation';
import { Button, View , StyleSheet , Text, Alert, TextInput} from 'react-native';
import MainButton from '../Components/MainButton';
import CountDown from './CountDown';
import CheckBoxWithText from '../Components/CheckBoxWithText';
import SubButton from '../Components/SubButton';
import { useFocusEffect } from '@react-navigation/native';

function FocusMode(props) {
    const [worktime, onChangeText1] = React.useState('60');
    const [breaktime, onChangeText2] = React.useState('30');
    const [showCountdown, setShowCountdown] = React.useState(false);
    const [startCounter, setStartCounter] = React.useState(false);
    const handleCheckBoxChange = (isChecked) => {
        console.log('Checkbox checked:', isChecked);
    };
    const [isFocused, setIsFocused] = useState(true);

    // useFocusEffect(
    //     React.useCallback(() => {
    //         setIsFocused(true);
    //         console.log("In Focus");
    //         return () => {
    //             setIsFocused(false);
    //             console.log("In Focus");
    //         };
    //     },[])
    // );


    return (

        <SafeAreaView style={styles.container}>

            {/* <Text style={styles.titletext}>
                Focus Mode
            </Text>

            <Text style={styles.smalltext}>
                Together with Pomodoro technique
            </Text>

            <Text style={styles.smalltext}>
                Enter Focus Mode Duration in Minutes
            </Text>

            <TextInput
                style={styles.input}
                onChangeText={onChangeText1}
                value={worktime}
            />
  
            <Text style={styles.smalltext}>
                After how many minutes do you want a 5-minute break?
            </Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText2}
                value={breaktime}
            /> */}

            {!startCounter ? (
                <>

                {/* <MainButton 
                text="Focus Mode"
                img = {require('../assets/focused.png')}
                // onPress={() => poses.navigation.navigate('FocusMode')}
                /> */}

                <SubButton
                    text="Focus Mode"
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

                {/* <Text style={styles.smalltext}>
                    Together with Pomodoro technique
                </Text> */}

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
    
                {/* <Text style={styles.smalltext}>
                    After how many minutes do you want a 5-minute break?
                </Text> */}

                <Text style={styles.smalltext}>
                    How often you want 
                </Text>
                <Text style={styles.smalltext} >
                     your 5-minute break?
                </Text>


                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText2}
                    value={breaktime}
                />

                {/* <Text style={styles.smalltext}>
                    Select the Apps to Block during Focus Mode

                </Text>

                <CheckBoxWithText
                    label="Whatsapp"
                    initialValue={true}
                    onChange={handleCheckBoxChange}
                />

                <CheckBoxWithText
                    label="Facebook"
                    initialValue={true}
                    onChange={handleCheckBoxChange}
                />

                <CheckBoxWithText
                    label="Instagram"
                    initialValue={true}
                    onChange={handleCheckBoxChange}
                />

                <CheckBoxWithText
                    label="Phone"
                    initialValue={true}
                    onChange={handleCheckBoxChange}
                /> */}


                <MainButton 
                style = {{bottom : 1000}}
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
                    <CountDown key={Date.now()} targetTime={worktime} breakInterval={breaktime} poses={props}/>
                </View>
                </>
            )}

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
        height: 60,
        margin: 15,
        borderWidth: 4,
        padding: 12,
        fontSize:30,
      },
});

export default FocusMode;