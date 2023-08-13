import React from "react";
import { Button, SafeAreaView, StyleSheet, Text} from "react-native";
import SubButton3 from "../Components/SubButton3";
import SubButton2 from "../Components/SubButton2";

const SelectGoals = (poses) => {
    return (
        <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Set Goals!!</Text>
        <SubButton3 
            text="Units"
            subtext="Get ready to compete against yourself."
            onPress={() => poses.navigation.navigate('FullScreen')}
            />

        <SubButton3
            text="Timer"
            subtext={"Get ready to compete against the clock."}
            onPress={() => poses.navigation.navigate('TimerGoalScreen')}
            />
        <SubButton3
            text="No Goals"
            subtext={"Ok !! You are on your own."}
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
        fontSize : 40,
        fontWeight : 'bold',
        marginVertical:5,
        color : '#EAEAEA',
    }
});

export default SelectGoals;