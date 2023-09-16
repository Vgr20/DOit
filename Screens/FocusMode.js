import React, { useState } from 'react';
import { SafeAreaView } from 'react-navigation';
import { Button, View , StyleSheet , Text, Alert, TextInput, Image} from 'react-native';
import MainButton from '../Components/MainButton';
import CountDown from './CountDown';
import CheckBoxWithText from '../Components/CheckBoxWithText';
import SubButton from '../Components/SubButton';
import { useFocusEffect } from '@react-navigation/native';
import SubButton22 from '../Components/SubButton22';
import { ScrollView } from 'react-native-gesture-handler';
import CountDownV3 from './CountDownV3';

function FocusMode(props) {
    const [worktime, onChangeText1] = React.useState('60');
    const [breaktime, onChangeText2] = React.useState('25');
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

            <Text style={{ color: "#E1E5E5", fontWeight : 'bold', alignSelf: "center", marginTop: 20, fontSize: 30}}>
            Let's Focus
            </Text>   
            <Image
            source={require("../assets/undraw_focus.png")}
            style={{ width: 250, height: 250, alignSelf: "center"}}
            />

        {/* <Text style={{ color: "#E1E5E5", fontWeight : 'semibold', alignSelf: "center", fontSize: 20, left: 20, marginRight: 20}}>
        Every habit you form is a brushstroke on the canvas of your destiny. Keep painting your masterpiece
        </Text> */}
                <SubButton
                    text="Focus Mode"
                    img = {require('../assets/focused.png')}
                    subtext={"With Pomodoro technique \nLearn more here!"}
                    onPress={() => 
                        Alert.alert("Focus Mode", "Time management method: Work intensely for 25 minutes, "+
                        "then take a 5-minute break; repeat for focus and productivity."+
                        " Adjust the timings according to your preference!", [
                            {text: "Right!", onPress: () =>  
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
                    onChangeText={onChangeText1}
                    value={worktime}
                />

                <Text style={styles.smalltext}>
                    Working Duration of a Segment
                </Text>
                <Text style={styles.smallertext}>
                    in Minutes
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText2}
                    value={breaktime}
                />

                <Text style={styles.smalltext}>
                    Break Duration
                </Text>
                <Text style={styles.smallertext}>
                    in Minutes
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText3}
                    value={breakinterval}
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

                <SubButton22 
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

export default FocusMode;