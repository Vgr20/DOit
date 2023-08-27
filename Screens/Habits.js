import React from "react";
import { Button, SafeAreaView, StyleSheet, Text} from "react-native";
import SubButton from "../Components/SubButton";
import SubButton2 from "../Components/SubButton2";

const Habits = (poses) => {
    return (
        <SafeAreaView style={styles.container}>
        <Text style={styles.text}>PICK A NEW HABIT...</Text>
        <SubButton 
            text="Trending Habits"
            subtext="Most popular habits this week."
            onPress={() => poses.navigation.navigate('TrendingHabitsScreen')}
            />

        <SubButton
            text="Morning Routine"
            subtext={"Start your day right."}
            onPress={() => poses.navigation.navigate('FullScreen')}
            />
        <SubButton
            text="Must-Have Habits"
            subtext={"Habits that everyone should have."}
            onPress={() => poses.navigation.navigate('FullScreen')}
            />
        <SubButton
            text="Staying at Home"
            subtext={"Habits to keep you busy at home."}
            onPress={() => poses.navigation.navigate('FullScreen')}
            />
        <SubButton2 
            text="+ Create your own Habit."
            onPress={() => poses.navigation.navigate('NewHabitsScreen')}
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
        marginVertical:10,
        color : '#EAEAEA',

    }
});

export default Habits;