import React from "react";
import { Button, SafeAreaView, StyleSheet, Text, Image} from "react-native";
import SubButton from "../Components/SubButton";
import SubButton2 from "../Components/SubButton2";
import SubButton4 from "../Components/SubButton4";

const Journaling = (poses) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Be Creative!</Text>
            <Image
            source={require("../assets/journalling.png")}
            style={{ width: 180, height: 180, alignSelf: "center", marginTop: 80, marginBottom: 50}}
            />

            <Text style={{ color: "#E1E5E5", fontWeight : 'semibold', alignSelf: "center", fontSize: 20, left: 20, marginRight: 20}}>
            Kickstart your day with journaling to infuse your daily routine with mindfulness and self-reflection. This simple yet impactful practice can have a profound effect, fostering emotional clarity and personal growth that resonates throughout your day, helping you make the most of it.
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

export default Journaling;