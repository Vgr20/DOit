import React from "react";
import { StyleSheet, Text, TouchableOpacity, View} from "react-native";

export default function SubButton2({text, onPress}) {
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
        borderRadius : 40,
        backgroundColor : '#ff6200',
        paddingVertical : 15,
        // paddingHorizontal : 80,
        width : 375,
        marginVertical : 15,
        
    },
    buttonText : {
        color : '#E1E5E5',
        fontWeight : 'bold',
        textTransform : 'uppercase',
        fontSize : 25,
        textAlign : 'center',
        
    
    }
});