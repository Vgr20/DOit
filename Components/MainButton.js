import React from "react";
import { StyleSheet, Text, TouchableOpacity, View} from "react-native";

export default function MainButton({text, onPress}) {
    return (
        <TouchableOpacity onPress = {onPress}>
            <View style = {styles.button}>
                <Text style = {styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}   

const styles = StyleSheet.create({
    button : {
        borderRadius : 10,
        backgroundColor : '#D9DDDC',
        paddingVertical : 40,
        // paddingHorizontal : 80,
        width : 350,
        marginVertical : 20,
    },
    buttonText : {
        color : '#363636',
        fontWeight : 'bold',
        textTransform : 'uppercase',
        fontSize : 32,
        textAlign : 'center',
        fontFamily : 'Calibri',
    
    }
});

