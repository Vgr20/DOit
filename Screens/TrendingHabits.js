import React from "react";
import { Button, SafeAreaView, StyleSheet, Text} from "react-native";
import SubButton from "../Components/SubButton";
import SubButton2 from "../Components/SubButton2";
import SubButton4 from "../Components/SubButton4";

const TrendingHabits = (poses) => {
    return (
        <SafeAreaView style={styles.container}>
            
        <Text style={styles.text}>Make your Bed!</Text>
        
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