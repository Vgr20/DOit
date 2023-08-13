import React from "react";
import { Button, SafeAreaView, StyleSheet, Text} from "react-native";
import SubButton from "../Components/SubButton";
import SubButton2 from "../Components/SubButton2";
import SubButton4 from "../Components/SubButton4";

const TimerGoal = (poses) => {
    return (
        <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Select a Preferred Timer</Text>
        <SubButton4 
            text="5 Minutes"
            onPress={() => poses.navigation.navigate('FullScreen')}
            />

        <SubButton4
            text="10 Minutes"
            onPress={() => poses.navigation.navigate('FullScreen')}
            />
        <SubButton4
            text="15 Minutes"
            onPress={() => poses.navigation.navigate('FullScreen')}
            />
        <SubButton4
            text="30 Minutes"
            onPress={() => poses.navigation.navigate('FullScreen')}
            />
        <SubButton4
            text="1 Hour"
            onPress={() => poses.navigation.navigate('FullScreen')}
            />
        <SubButton4
            text="2 Hours"
            onPress={() => poses.navigation.navigate('FullScreen')}
            />
        <SubButton4
            text="5 Hours"
            onPress={() => poses.navigation.navigate('FullScreen')}
            />
        <SubButton2 
            text="Cancel"
            onPress={() => poses.navigation.navigate('HabitScreen')}
            />
        
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#2f4f4f',
        alignItems : 'center',
    },
    text : {
        fontSize : 35,
        fontWeight : 'bold',
        marginVertical:5,
        color : '#EAEAEA',
    }
});

export default TimerGoal;