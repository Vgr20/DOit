import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image, View} from "react-native";

export default function SubButton2({text, onPress, img}) {
    return (
        <TouchableOpacity onPress = {onPress}>
            <View style = {styles.button}>
                <Image source={img} 
                        style={{width: 45, 
                                height: 45, 
                                position: "absolute", 
                                right: 85, 
                                top: 7}}/>
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
        marginVertical : 10,
        
    },
    buttonText : {
        color : '#E1E5E5',
        fontWeight : 'bold',
        textTransform : 'capitalize',
        fontSize : 20,
        textAlign : 'center',
        marginHorizontal : 80,
        
    
    }
});