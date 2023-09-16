import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image} from "react-native";

export default function MainButton({text, onPress, img}) {
    return (
        <TouchableOpacity onPress = {onPress}>
            <View style = {styles.button}>
            <Image source={img} 
                        style={{width: 55, 
                                height: 55, 
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
        borderRadius : 20,
        backgroundColor : '#162626',
        paddingVertical : 21,
        //paddingHorizontal : 80,
        //add colour gradient 
        width : 350,
        // borderColor: "#ffffff",
        borderWidth: 1,
        marginVertical : 5,
    },
    buttonText : {
        color : '#E1E5E5',
        fontWeight : 'semibold',
        textTransform : 'capitalize',
        fontWeight: "bold",
        fontSize : 22,
        textAlign : 'left',
        left : 25,
        
    
    }
});

