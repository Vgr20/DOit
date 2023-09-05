import React from "react";
import { Button, SafeAreaView, StyleSheet, Text, ScrollView} from "react-native";
import SubButton from "../Components/SubButton";
import SubButton2 from "../Components/SubButton2";

const Habits = (poses) => {
    return (
        <ScrollView  contentContainerStyle={styles.container}> 
        {/* this downward scroll is to be fixed */}
            <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Begin your habit!</Text>

        <SubButton
            text="Your Habits"
            img = {require('../assets/habits.png')}
            subtext={"Keep track of your habits."}
            onPress={() => poses.navigation.navigate('FullScreen')}
            />

        <Text style={styles.text}>Our suggestions:</Text>

        <SubButton 
            text="Trending Habits"
            img = {require('../assets/trendinghabits.png')}
            subtext="Build better habits, one at a time."
            onPress={() => poses.navigation.navigate('TrendingHabitsScreen')}
            />

        <SubButton
            text="Morning Routine"
            img = {require('../assets/moringroutine.png')}
            subtext={"Start your day right."}
            onPress={() => poses.navigation.navigate('FullScreen')}
            />
        <SubButton
            text="Staying at Home"
            img = {require('../assets/stayathome2.png')}
            subtext={"Find joy in every corner of home."}
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