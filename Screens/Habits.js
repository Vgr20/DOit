import React from "react";
import { Button, SafeAreaView, StyleSheet, Text, ScrollView} from "react-native";
import SubButton from "../Components/SubButton";
import SubButton22 from "../Components/SubButton22";

const Habits = (poses) => {
    return (
        <ScrollView  Style={styles.container}> 
        {/* this downward scroll is to be fixed */}
            <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Begin your habit!</Text>

        <SubButton
            text="Your Habits"
            img = {require('../assets/habits.png')}
            subtext={"Keep track of your habits."}
            onPress={() => poses.navigation.navigate('yourHabits')}
            />

        <Text style={styles.text}>Our suggestions:</Text>

        <SubButton 
            text="Make your Bed"
            img = {require('../assets/sleeping.png')}
            subtext="Start your day right"
            onPress={() => poses.navigation.navigate('TrendingHabitsScreen')}
            />

        <SubButton
            text="Drink Water"
            img = {require('../assets/drinkwater.png')}
            subtext={"Make sure you drink enough."}
            onPress={() => poses.navigation.navigate('MorningRoutine')}
            />
        <SubButton
            text="Meditate"
            img = {require('../assets/stayathome2.png')}
            subtext={"Make your mind Focus."}
            onPress={() => poses.navigation.navigate('FullScreen')}
            />
        <SubButton
            text="Exercise"
            img = {require('../assets/excercise.png')}
            subtext={"Get ready you body."}
            onPress={() => poses.navigation.navigate('FullScreen')}
            />

        <SubButton
            text="Journaling"
            img = {require('../assets/journaling2.png')}
            subtext={"Write every memory."}
            onPress={() => poses.navigation.navigate('FullScreen')}
            />
        
        <SubButton22 
            text="+ Add New Habit"
            onPress={() => poses.navigation.navigate('NewHabitsScreen')}
            />
        <SubButton22 
            text="Dashboard"
            onPress={() => poses.navigation.navigate('HomeScreen')}
            />
        
        </SafeAreaView>
        </ScrollView>
        
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
        marginVertical:10,
        color : '#EAEAEA',

    }
});

export default Habits;