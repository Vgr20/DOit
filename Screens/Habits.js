import React from "react";
import { Button, SafeAreaView, StyleSheet, Text, ScrollView} from "react-native";
import SubButton from "../Components/SubButton";
import SubButton2 from "../Components/SubButton2";

const Habits = (poses) => {
    return (
        <ScrollView  style = {{flex: -1}}> 
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
            text="Trending Habits"
            img = {require('../assets/trendinghabits.png')}
            subtext="Build better habits, one at a time."
            onPress={() => poses.navigation.navigate('TrendingHabitsScreen')}
            />
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
            text="Go For a Walk"
            img = {require('../assets/walk2.png')}
            subtext={"Feel the Environment."}
            onPress={() => poses.navigation.navigate('FullScreen')}
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
            text="Journalling"
            img = {require('../assets/journaling2.png')}
            subtext={"Write evry memory."}
            onPress={() => poses.navigation.navigate('FullScreen')}
            />
        
        <SubButton2 
            text="+ Add New Habit"
            onPress={() => poses.navigation.navigate('NewHabitsScreen')}
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