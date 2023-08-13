import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text,  View} from "react-native";
import * as Progress from 'react-native-progress';

const Stats = () => {
    const progress = 0.55;
    return (
        
        <View style = {styles.container}>

            <Text style = {styles.mainTextStyle}>
                LET'S SEE HOW YOU ARE DOING!
            </Text>

            
            <Text style = {styles.secondTextStyle}>
            Your current progress is 55%
            </Text>
            
            <Progress.Circle 
                size={150} 
                indeterminate={true} 
                progress={55}
                endAngle={0.55} 
                borderWidth={7} 
                color="green"
                formatText={(progress) => `${Math.round(progress * 100)}%`}
                textStyle={{ color: 'blue' }} 
                indeterminateAnimationDuration = {7000}
                borderColor="#e5e5f5"
                showsText = {true}
                marginVertical = {20}
                
            />
    
            <StatusBar style = 'auto'/>

            <Text style = {styles.secondTextStyle}>
                You are on your 8th day streak!
            </Text>

            <Progress.Circle 
                size={150} 
                indeterminate={true} 
                progress={55}
                endAngle={0.65} 
                borderWidth={7} 
                color="green"
                formatText={(progress) => `${Math.round(progress * 100)}%`}
                textStyle={{ color: 'blue' }} 
                indeterminateAnimationDuration = {3000}
                borderColor="#e5e5f5"
                showsText = {true}
                marginVertical = {20}
                
            />

            <Text style = {styles.textStyle}>
                Your Overall Score is 80%
            </Text>

            <Text style = {styles.textStyle}>
                Congratulations!!
            </Text>

        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#2f4f4f',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    textStyle : {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        marginVertical: 20,
        alignContent: 'center',
    },
    secondTextStyle : {
        fontSize: 20,
        color: 'white',
        fontWeight: 'semibold',
        marginVertical: 10,
    },
    mainTextStyle : {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
        marginVertical: 20,
        alignContent: 'center',
    },

});

export default Stats;