import React, {useState, useEffect } from "react";
import { TouchableOpacity, ScrollView, StyleSheet, Text, Image, View} from "react-native";
import SubButton22 from "../Components/SubButton22";
import habitStore from "./habitstore";
import { SafeAreaView } from "react-navigation";
import client from "../api/client";

const yourHabits = (poses) => {
    const [habits,setHabit] = useState([]);

    const fetchData = async ()=>{
        const response = await client.post("/api/NewHabitRoute");
        const data = await response.data;
        setHabit(data.response);
    };

    useEffect(()=>{
        fetchData();
    }, []);

    // const {item} = poses.params;
    // console.log(poses.navigation.state)

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
        <View>
            {habits.map((habit,index)=>{
                // Split the description into words
                const words = habit.description.split(' ');

                // Group words into lines of up to 4 words each
                const lines = [];
                for (let i = 0; i < words.length; i += 4) {
                    const lineWords = words.slice(i, i + 4);
                    lines.push(lineWords.join(' '));
                }
                return(
                    <TouchableOpacity >
                        <View style = {styles.button}>
                            <Text style = {styles.buttonText_big}>{habit.newhabitname}</Text>
                            {/* <Text style = {styles.buttonText}>{`Description: `}</Text> */}
                            {/* <Text style = {styles.buttonText_small}>{`${truncatedDescription}`}</Text> */}
                            {lines.map((line, lineIndex) => (
                                <Text key={lineIndex} style={styles.buttonText_small}>
                                    {line}
                                </Text>
                            ))}
                            <Text style = {styles.buttonText}>{"Priority: "+habit.prioritylevel}</Text>
                            <Text style = {styles.buttonText}>{"Repeat Interval: "+habit.intervaltype}</Text>
                            <Text style = {styles.buttonText}>{"Reminder: "+habit.remindertype}</Text>
                            <Text style = {styles.buttonText}>{"Duration: "+habit.preferedtime}</Text>
                        </View>
                    </TouchableOpacity>
                )
            })}
        </View>
        {/* <TouchableOpacity >
            <View style = {styles.button}>
                <Text style = {styles.buttonText}>{"Habit Name: "+habitStore.nameOfHabit}</Text>
                <Text style = {styles.buttonText}>{"Description: "+habitStore.description}</Text>
                <Text style = {styles.buttonText}>{"Priority: "+habitStore.sliderValue}</Text>
                <Text style = {styles.buttonText}>{"Repeat Interval: "+habitStore.repeatInterval}</Text>
                <Text style = {styles.buttonText}>{"Reminder: "+habitStore.method}</Text>
                <Text style = {styles.buttonText}>{"Duration: "+habitStore.value}</Text>
            </View>
        </TouchableOpacity> */}
        
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
        fontWeight : 'bold',
        textTransform : 'capitalize',
        fontSize : 18,
        textAlign : 'left',
        left : 25,
    },
    buttonText_big : {
        color : '#E1E5E5',
        fontWeight : 'bold',
        textTransform : 'capitalize',
        fontSize : 24,
        textAlign : 'left',
        left : 25,
    },
    buttonText_small:{
        color : '#E1E5E5',
        fontWeight : 'semibold',
        textTransform : 'capitalize',
        fontSize : 16,
        textAlign : 'left',
        left : 25,
    }

});

export default yourHabits;