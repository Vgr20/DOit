import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image} from "react-native";

export default function SubButton({text, onPress, img}) {
    return (
        <TouchableOpacity onPress = {onPress}>
            <View style = {styles.button}>
            <Image source={img} 
                    style={{width: 70, 
                            height: 64, 
                            position: "absolute", 
                            right: 40, 
                            top: 5}}/>
                <Text style = {styles.buttonText}>{text}</Text>
            </View>        
            
        </TouchableOpacity>
    );
}   

const styles = StyleSheet.create({
    button : {
        borderRadius : 25,
        backgroundColor : '#162626',
        // paddingVertical : 35,
        // paddingHorizontal : 80,
        width : 350,
        height : 75,
        marginVertical : 7,
    },
    buttonText : {
        color : '#E1E5E5',
        fontWeight : 'semibold',
        textTransform : 'capitalize',
        fontSize : 30,
        textAlign : 'left',
        paddingTop : 20,
        left: 22,
    
    },
});

