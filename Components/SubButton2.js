import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image, View} from "react-native";

export default function SubButton2({text, onPress,img}) {
    return (
        <TouchableOpacity onPress = {onPress}>
            <View style = {styles.button}>
                <Image source={img} 
                        style={{width: 40, 
                                height: 40, 
                                position: "absolute", 
                                right: 85, 
                                top: 8}}/>
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
        textAlign : 'left',
        marginHorizontal : 80,
        
    
    }
});