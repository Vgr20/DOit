import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image} from "react-native";

export default function MainButton({text, onPress, img}) {
    return (
        <TouchableOpacity onPress = {onPress}>
            <View style = {styles.button}>
            <Image source={img} 
                        style={{width: 40, 
                                height: 40, 
                                position: "absolute", 
                                right: 25, 
                                top: 13}}/>
                <Text style = {styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}   

const styles = StyleSheet.create({
    button : {
        borderRadius : 40,
        backgroundColor : '#230001',
        paddingVertical : 20,
        //paddingHorizontal : 80,
        //add colour gradient 
        width : 350,
        marginVertical : 5,
    },
    buttonText : {
        color : '#E1E5E5',
        fontWeight : 'bold',
        textTransform : 'capitalize',
        fontSize : 20,
        textAlign : 'left',
        left : 25,
        
    
    }
});

