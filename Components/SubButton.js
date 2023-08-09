import React from "react";
import { StyleSheet, Text, TouchableOpacity, View} from "react-native";

export default function SubButton({text,subtext, onPress}) {
    return (
        <TouchableOpacity onPress = {onPress}>
            <View style = {styles.button}>
                <Text style = {styles.buttonText}>{text}</Text>
                <Text style = {styles.subText}>{subtext}</Text>
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
        height : 115,
        marginVertical : 15,
    },
    buttonText : {
        color : '#E1E5E5',
        fontWeight : 'semibold',
        textTransform : 'uppercase',
        fontSize : 30,
        textAlign : 'left',
        paddingLeft : 15,
        paddingTop : 12,
    },
    subText : {
        color : '#a9c0c0',
        fontSize : 20,
        textAlign : 'left',
        paddingLeft : 15,
        paddingTop : 7,
        
    }
});

