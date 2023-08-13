import React from "react";
import { Button, SafeAreaView, StyleSheet, Text} from "react-native";
import SubButton from "../Components/SubButton";
import SubButton2 from "../Components/SubButton2";
import SubButton4 from "../Components/SubButton4";

const TrendingHabits = (poses) => {
    return (
        <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Let's be Trendy!!</Text>
        <SubButton4 
            text=" Drink water"
            onPress={() => poses.navigation.navigate('FullScreen')}
            />

        <SubButton4
            text=" Eat fruits"
            onPress={() => poses.navigation.navigate('FullScreen')}
            />
        <SubButton4
            text="Exercise"
            onPress={() => poses.navigation.navigate('FullScreen')}
            />
        <SubButton4
            text="Go for a walk"
            onPress={() => poses.navigation.navigate('FullScreen')}
            />
        <SubButton4
            text="Read"
            onPress={() => poses.navigation.navigate('FullScreen')}
            />
        <SubButton4
            text="Sleep for 8 hours"
            onPress={() => poses.navigation.navigate('FullScreen')}
            />
        <SubButton4
            text=" Journalling"
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

export default TrendingHabits;