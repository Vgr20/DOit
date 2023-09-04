import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image} from "react-native";

export default function MainButton({text, onPress, img}) {
    return (
        <TouchableOpacity onPress = {onPress}>
            <View style = {styles.button}>
            <Image source={img} 
                        style={{width: 90, 
                                height: 90, 
                                position: "absolute", 
                                right: 25, 
                                top: 10}}/>
                <Text style = {styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}   

const styles = StyleSheet.create({
    button : {
        borderRadius : 40,
        backgroundColor : '#162626',
        paddingVertical : 40,
        //paddingHorizontal : 80,
        //add colour gradient 
        width : 350,
        marginVertical : 20,
    },
    buttonText : {
        color : '#E1E5E5',
        fontWeight : 'semibold',
        textTransform : 'capitalize',
        fontSize : 28,
        textAlign : 'left',
        left : 25,
        
    
    }
});

