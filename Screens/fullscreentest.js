import React from "react";
import { Button, SafeAreaView, StyleSheet, Text, Image} from "react-native";
import SubButton3 from "../Components/SubButton3";
import SubButton2 from "../Components/SubButton2";

const fullscreentest = (poses) => {
    return (
        <SafeAreaView style={styles.container}>
        <Image  source={require('../assets/celebrate2.png')} 
                style={{width: 150, 
                        height: 150, 
                        position: "center", 
                        left: 10, 
                        top: 100}}/>
        <Text style={styles.text}>CONGRATULATIONS!</Text>
        <Text style={styles.text2}>You have set a new habit!</Text>
        
        

        <SubButton2 
            text="Return to Dashboard"
            onPress={() => poses.navigation.navigate('HomeScreen')}
            />
        
        <SubButton2 
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
        fontSize : 40,
        fontWeight : 'bold',
        marginVertical:5,
        color : '#EAEAEA',
        alignContent : 'center',
        paddingTop : 150,
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