import React from "react";
import { TouchableOpacity, ScrollView, StyleSheet, Text, Image,View} from "react-native";
import SubButton2 from "../Components/SubButton2";
import habitStore from "./habitstore";
import { SafeAreaView } from "react-navigation";

const yourHabits = (poses) => {
    return (
        <ScrollView  style = {{flex: 1, backgroundColor:"#2f4f4f"}}> 
            <TouchableOpacity >
            <View style = {styles.button}>
                <Text style = {styles.buttonText}>{"Habit Name: "+habitStore.nameOfHabit}</Text>
                <Text style = {styles.buttonText}>{"Description: "+habitStore.description}</Text>
                <Text style = {styles.buttonText}>{"Priority: "+habitStore.sliderValue}</Text>
                <Text style = {styles.buttonText}>{"Repeat Interval: "+habitStore.repeatInterval}</Text>
                <Text style = {styles.buttonText}>{"Reminder: "+habitStore.method}</Text>
                <Text style = {styles.buttonText}>{"Duration: "+habitStore.value}</Text>

            </View>
        </TouchableOpacity>
        <SafeAreaView style={styles.container}>
        <SubButton2 
            text="Return to Dashboard"
            onPress={() => poses.navigation.navigate('HomeScreen')}
            />
        
            



        </SafeAreaView>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container : {
        backgroundColor : '#2f4f4f',
        alignItems : 'center',
        justifyContent : 'center',
    },
    button : {
        borderRadius : 40,
        backgroundColor : '#162626',
        paddingVertical : 40,
        //paddingHorizontal : 80,
        //add colour gradient 
        width : 80 + "%",
        marginVertical : 20,
        marginHorizontal : 10+"%",
    },
    buttonText : {
        color : '#E1E5E5',
        fontWeight : 'semibold',
        textTransform : 'capitalize',
        fontSize : 20,
        textAlign : 'left',
        left : 25,
        
    
    }

});

export default yourHabits;