import React from "react";
import { Button, SafeAreaView, StyleSheet, Text, Image} from "react-native";
import SubButton from "../Components/SubButton";
import SubButton22 from "../Components/SubButton22";
import SubButton4 from "../Components/SubButton4";

const DrinkWater = (poses) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Drink Adequately!</Text>
            <Image
            source={require("../assets/drinkingwater.png")}
            style={{ width: 180, height: 180, alignSelf: "center", marginTop: 80, marginBottom: 50}}
            />

            <Text style={{ color: "#E1E5E5", fontWeight : 'semibold', alignSelf: "center", fontSize: 20, left: 20, marginRight: 20}}>
            Start your day with a glass of water to infuse your daily routine with a touch of health and hydration. This simple yet significant habit can have a cascading impact, promoting overall well-being and keeping you refreshed throughout the day.
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
        top:40,
    }
});

export default DrinkWater;