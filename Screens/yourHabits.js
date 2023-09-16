import React from "react";
import { TouchableOpacity, ScrollView, StyleSheet, Text, Image, View} from "react-native";
import SubButton22 from "../Components/SubButton22";
import habitStore from "./habitstore";
import { SafeAreaView } from "react-navigation";

const yourHabits = (poses) => {
    return (
        <ScrollView  style = {{flex: 1, backgroundColor:"#2f4f4f"}}> 

        <Text style = {{
            color : '#E1E5E5',
            fontWeight : 'bold',
            fontSize : 40,
            textAlign : 'center',
            marginVertical : 20,
            marginHorizontal : 10+"%",
            }}>Your Habits
        </Text>

        <Image
            source={require("../assets/undraw_your_habits.png")}
            style={{ width: 250, height: 250, alignSelf: "center", marginTop: 0, marginBottom: 0}}
            />

        <Text style={{ color: "#E1E5E5", fontWeight : 'semibold', alignSelf: "center", fontSize: 20, left: 20, marginRight: 20}}>
        Every habit you form is a brushstroke on the canvas of your destiny. Keep painting your masterpiece
        </Text>

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
        <SubButton22 
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
        borderWidth: 1,
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