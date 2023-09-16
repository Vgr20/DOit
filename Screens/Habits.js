import React from "react";
import { Button, SafeAreaView, StyleSheet, Image, Text, ScrollView} from "react-native";
import SubButton from "../Components/SubButton";
import SubButton22 from "../Components/SubButton22";

const Habits = (poses) => {
    return (
        <ScrollView  Style={styles.container}> 
        {/* this downward scroll is to be fixed */}
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Habit Center</Text>
            <Image
            source={require("../assets/undraw_habits.png")}
            style={{ width: 180, height: 170, alignSelf: "center"}}
            />

            <Text style={{ color: "#E1E5E5", fontWeight : 'semibold', alignSelf: "center", marginBottom: 0, fontSize: 20}}>
            Let's build healthy habits!
            </Text>

            <SubButton
                text="Your Habits"
                img = {require('../assets/habits.png')}
                subtext={"Keep track of your habits"}
                onPress={() => poses.navigation.navigate('yourHabits')}
                />

            <Text style={styles.text}>Our Suggestions:</Text>

            <Image
            source={require("../assets/undraw_our_suggestions.png")}
            style={{ width: 230, height: 230, alignSelf: "center"}}
            />

            <Text style={{ color: "#E1E5E5", fontWeight : 'semibold', alignSelf: "center", marginBottom: 10, fontSize: 15}}>
            Our top informative articles on healthy habits!
            </Text>

            <SubButton 
                text="Make your Bed"
                img = {require('../assets/sleeping.png')}
                subtext="Start your day right"
                onPress={() => poses.navigation.navigate('TrendingHabitsScreen')}
                />

            <SubButton
                text="Drink Water"
                img = {require('../assets/drinkwater.png')}
                subtext={"Right after you wake up"}
                onPress={() => poses.navigation.navigate('TrendingHabitsScreen')}
                />
            <SubButton
                text="intermittent fasting"
                img = {require('../assets/stayathome2.png')}
                subtext={"Resetting your body's metabolism"}
                onPress={() => poses.navigation.navigate('TrendingHabitsScreen')}
                />
            <SubButton
                text="Exercise"
                img = {require('../assets/excercise.png')}
                subtext={"Elevate your physical well-being"}
                onPress={() => poses.navigation.navigate('TrendingHabitsScreen')}
                />

            <SubButton
                text="Journaling"
                img = {require('../assets/journaling2.png')}
                subtext={"Write every memory"}
                onPress={() => poses.navigation.navigate('TrendingHabitsScreen')}
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