import React from "react";
import { Button, SafeAreaView, StyleSheet, Text, Image} from "react-native";
import SubButton from "../Components/SubButton";
import SubButton2 from "../Components/SubButton2";
import SubButton4 from "../Components/SubButton4";

const Exercise = (poses) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Work it Out!</Text>
            <Image
            source={require("../assets/exercise.png")}
            style={{ width: 180, height: 180, alignSelf: "center", marginTop: 80, marginBottom: 50}}
            />

            <Text style={{ color: "#E1E5E5", fontWeight : 'semibold', alignSelf: "center", fontSize: 20, left: 20, marginRight: 20}}>
            Begin your day with exercise to infuse your daily routine with a dose of vitality and physical well-being. This uncomplicated yet powerful habit can create a ripple effect, boosting your mood, energy, and overall health, setting a positive tone for the rest of your day.
            </Text>
        <Text style={styles.text}>Are you up for it?</Text>
        
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
        // left:90,
        color : '#EAEAEA',
        top:40
    }
});

export default Exercise;