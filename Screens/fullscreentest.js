import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View , SafeAreaView} from "react-native";

export default function fullscreentest() {
    return (
        <View style = {styles.container}>
            <Text> Hello </Text>    
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#48494B',
        alignItems : 'center',
        justifyContent : 'center',
    },
});


