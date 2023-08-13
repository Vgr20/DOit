import React from "react";
import { StyleSheet, Text, TouchableOpacity, View} from "react-native";

export default function SubButton({text, onPress}) {
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
        borderRadius : 20,
        backgroundColor : '#162626',
        // paddingVertical : 35,
        // paddingHorizontal : 80,
        width : 350,
        height : 65,
        marginVertical : 10,
    },
    buttonText : {
        color : '#E1E5E5',
        fontWeight : 'semibold',
        textTransform : 'uppercase',
        fontSize : 30,
        textAlign : 'center',
        paddingTop : 10,
    
    },
});

