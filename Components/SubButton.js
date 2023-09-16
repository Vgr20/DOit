import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image} from "react-native";

export default function SubButton({text,subtext, onPress, img}) {
    return (
        <TouchableOpacity onPress = {onPress}>
            <View style = {styles.button}>
            <Image source={img} 
                        style={{width: 50, 
                                height: 50, 
                                position: "absolute", 
                                right: 10, 
                                top: 13}}/>
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
        borderWidth: 1,
        // paddingVertical : 35,
        // paddingHorizontal : 80,
        width : 350,
        height : 100,
        marginVertical : 8,
        left: 15
    },
    buttonText : {
        color : '#E1E5E5',
        fontWeight : 'semibold',
        textTransform : 'capitalize',
        fontSize : 20,
        textAlign : 'left',
        paddingLeft : 15,
        paddingTop : 10,
        fontWeight: "bold"
    },
    subText : {
        color : '#a9c0c0',
        fontSize : 15,
        textAlign : 'left',
        paddingLeft : 15,
        paddingTop : 4,
        
    }
});

