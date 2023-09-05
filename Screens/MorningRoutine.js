import React from "react";
import { Button, SafeAreaView, StyleSheet, Text} from "react-native";
import SubButton from "../Components/SubButton";
import SubButton2 from "../Components/SubButton2";
import SubButton4 from "../Components/SubButton4";

const MorningRoutine = (poses) => {
    return (
        <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Let's be trendy!</Text>
        <SubButton4 
            text="Drink water"
            img = {require('../assets/drinkwater.png')}
            onPress={() => poses.navigation.navigate('FullScreen')}
            />

        <SubButton4
            text="Eat fruits"
            img = {require('../assets/eatingfruits.png')}
            onPress={() => poses.navigation.navigate('FullScreen')}
            />
        <SubButton4
            text="Exercise"
            img = {require('../assets/excercise.png')}
            onPress={() => poses.navigation.navigate('FullScreen')}
            />
        <SubButton4
            text="Go for a walk"
            img = {require('../assets/walk2.png')}
            onPress={() => poses.navigation.navigate('FullScreen')}
            />
        <SubButton4
            text="Read"
            img = {require('../assets/read2.png')}
            onPress={() => poses.navigation.navigate('FullScreen')}
            />
        <SubButton4
            text="Sleep for 8 hours"
            img = {require('../assets/sleeping.png')}
            onPress={() => poses.navigation.navigate('FullScreen')}
            />
        <SubButton4
            text=" Journaling"
            img = {require('../assets/journaling2.png')}
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

export default MorningRoutine;