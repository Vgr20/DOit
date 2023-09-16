import React from "react";
import { Button, SafeAreaView, StyleSheet, Text, Image} from "react-native";
import SubButton3 from "../Components/SubButton3";
import SubButton22 from "../Components/SubButton22";
import habitStore from "./habitstore";


const fullscreentest = (poses) => {
    return (
        <SafeAreaView style={styles.container}>
        <Image  source={require('../assets/undraw_celebration3.png')} 
                style={{width: 250, 
                        height: 250, 
                        top: 10}}/>
        <Text style={styles.text}>CONGRATULATIONS!</Text>
        {/* <Text style={styles.text2}>You have set a new habit!</Text> */}
        <Text style={{ color: "#E1E5E5", fontWeight : 'semibold', alignSelf: "center", marginBottom: 0, fontSize: 15}}>
            You have created a new habit!
        </Text>
        <Text/>
        <Text style={{ color: "#E1E5E5", fontWeight : 'semibold', alignSelf: "center", marginBottom: 0, fontSize: 15}}>
            Your dedication to sticking with the routine 
            </Text>
        <Text style={{ color: "#E1E5E5", fontWeight : 'semibold', alignSelf: "center", marginBottom: 5, fontSize: 15}}>
            is the secret to establishing this habit.
        </Text>
        <Image  source={require('../assets/undraw_celebration2.png')} 
                style={{width: 230, 
                        height: 230, 
                        top: 0}}/>
        <SubButton22 
            text="Return to Dashboard"
            onPress={() => poses.navigation.navigate('HomeScreen')}
            />
        
        <SubButton22
            text="Create Another Habit"
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
        alignContent : 'center',
    },
    text : {
        fontSize : 30,
        fontWeight : 'bold',
        marginVertical:5,
        color : '#EAEAEA',
        alignContent : 'center',
        paddingTop : 10,
    },
    text2 : {
        fontSize : 30,
        fontWeight : 'bold',
        marginVertical:5,
        color : '#EAEAEA',
        alignContent : 'center',
    }

});

export default fullscreentest;