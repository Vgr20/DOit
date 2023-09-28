import React, {useState, useEffect } from "react";
import { TouchableOpacity, ScrollView, StyleSheet, Text, Image, View, FlatList, Alert} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/FontAwesome";
import ReadMore from '@fawazahmed/react-native-read-more';
import SubButton22 from "../Components/SubButton22";
import habitStore from "./habitstore";
import { SafeAreaView } from "react-navigation";
import client from "../api/client";

const yourHabits = (poses) => {
    const [habits,setHabit] = useState([]);
    const [deletedHabits, setDeletedHabits] = useState([]);
    const [showCompletedHistory, setShowCompletedHistory] = useState(false);

    const fetchData = async ()=>{
        const response = await client.post("/api/NewHabitRoute");
        const data = await response.data;
        setHabit(data.response);
    };
    
    useEffect(() => {
        fetchData();
        loadCompletedHabits(); // Load completed habits when the component mounts
    
        return () => {
          // Clear deletedHabits when unmounting
          setDeletedHabits([]);
        };
      }, []);

    useEffect(() => {
        // Save completed habits to AsyncStorage whenever deletedHabits changes
        saveCompletedHabits();
    }, [deletedHabits]);

    const saveCompletedHabits = async () => {
        try {
          await AsyncStorage.setItem("completedHabits", JSON.stringify(deletedHabits));
        } catch (error) {
          console.error("Error saving completed habits: ", error);
        }
    };

    const loadCompletedHabits = async () => {
        try {
          const completedHabitsString = await AsyncStorage.getItem("completedHabits");
          if (completedHabitsString) {
            const completedHabitsArray = JSON.parse(completedHabitsString);
            setDeletedHabits(completedHabitsArray);
          }
        } catch (error) {
          console.error("Error loading completed habits: ", error);
        }
      };
    
      const handleCheck = (habitId) => {
        // Find the habit to complete by habitId
        const habitToComplete = habits.find((habit) => habit._id === habitId);
      
        if (habitToComplete) {
          // Remove the habit from habits
          const updatedHabits = habits.filter((habit) => habit._id !== habitId);
          setHabit(updatedHabits);
      
          // Store only the habit name and completion time as a string
          const completionTime = new Date().toLocaleTimeString(); // Current time
          setDeletedHabits([...deletedHabits, { newhabitname: habitToComplete.newhabitname, completionTime }]);
          saveCompletedHabits();
        }
      };

      const handleDelete = async (habitId) => {
        try {
          // Make a DELETE request to the API to delete the habit by its ID
          const response = await client.delete(`/api/NewHabitRoute/${habitId}`);
      
          if (response.status === 200) {
            // Successfully deleted the habit on the server, update the state locally
            const updatedHabits = habits.filter((habit) => habit._id !== habitId);
            setHabit(updatedHabits);
          } else {
            console.error("Failed to delete habit.");
          }
        } catch (error) {
          console.error("Error deleting habit: ", error);
        }
      };
    //   const handleDeletePress = () => {
    //     Alert.alert(
    //       'Confirm Deletion',
    //       'Are you sure you want to delete the habit?',
    //       [
    //         {
    //           text: 'No',
    //           style: 'cancel',
    //         },
    //         {
    //           text: 'Yes',
    //           onPress: () => {
    //             handleDelete(habit._id);
    //           },
    //         },
    //       ],
    //       { cancelable: false }
    //     );
    //   };
    return (
        <ScrollView style = {{flex: 1, backgroundColor:"#2f4f4f"}}>

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
        <View style={{alignSelf:'center',marginTop:10,marginEnd:"15%"}}>
            <Text style={[styles.buttonText_bigger,{padding:6}]}>
                    OnGoing Habits
            </Text>
        </View>
        <View>
            {habits.map((habit,index)=>{
                return(
                    <TouchableOpacity key={index}>
                        <View style = {styles.button}>
                            <Text style = {styles.buttonText_big}>{habit.newhabitname}</Text>
                            <ReadMore style = {styles.buttonText_small} numberOfLines={2}>
                                {habit.description}
                            </ReadMore>
                            <Text style = {styles.buttonText}>{"Priority: "+habit.prioritylevel}</Text>
                            <Text style = {styles.buttonText}>{"Repeat Interval: "+habit.intervaltype}</Text>
                            <Text style = {styles.buttonText}>{"Reminder: "+habit.remindertype}</Text>
                            <Text style = {styles.buttonText}>{"Duration: "+habit.preferedtime}</Text>
                            <TouchableOpacity style={styles.deleteButton} onPress={() => handleCheck(habit._id)}>
                                <Icon name="check" color="lightgreen" size={40} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.deleteButton1}
                                onPress={() =>
                                    Alert.alert(
                                    'Confirm Deletion',
                                    'Are you sure you want to delete the habit?',
                                    [
                                        {
                                        text: 'No',
                                        style: 'cancel',
                                        },
                                        {
                                        text: 'Yes',
                                        onPress: () => {
                                            handleDelete(habit._id);
                                        },
                                        },
                                    ],
                                    { cancelable: false }
                                    )
                                }
                                >
                                <Icon name="trash" color="grey" size={40} />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                )
            })}
        </View>
        <View style={{marginBottom: 6,alignSelf:'center'}}>
            <TouchableOpacity
                style={styles.dropdownButton}
                onPress={() => setShowCompletedHistory(!showCompletedHistory)}
            >
            <View style = {{flexDirection:'row'}}>
                <Text style={styles.buttonText_big}>
                Completed Habits History
                </Text>
                <Icon
                name={showCompletedHistory ? "chevron-up" : "chevron-down"}
                size={24}
                color="#E1E5E5"
                marginTop= {5}
                marginHorizontal= {30}
                />
            </View>
            </TouchableOpacity>
            {showCompletedHistory && (
                <View style={{marginBottom:20}}>
                {deletedHabits.slice(-6).reverse().map((item, index) => (
                    <View key={index} style={styles.deletedHabit}>
                    <Text style={styles.buttonText_small}>
                        {item.newhabitname} - Completed at: {item.completionTime.toLocaleString()}
                    </Text>
                    </View>
                ))}
                </View>
            )}
            </View>

        </ScrollView>
        <SafeAreaView style={styles.container}>
            <SubButton22
                text="Return to Dashboard"
                onPress={() => poses.navigation.navigate("HomeScreen")}
                />
        </SafeAreaView>
        </ScrollView>
        
    );
};
const styles = StyleSheet.create({
    deleteButton: {
        position: "absolute",
        top: 10,
        right: 10,
        padding: 5,
        borderRadius: 5,
    },
    deleteButton1: {
        top:15,
        width:40,
        padding:2,
        left:150
    },
    deleteButtonText: {
        color: "#FFF",
    },
    historyHeader: {
        color: "#E1E5E5",
        fontWeight: "bold",
        fontSize: 24,
        textAlign: "center",
        marginTop: 20,
    },
    deletedHabit: {
        backgroundColor: "#162626",
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 10,
    },
    deletedHabitText: {
        
    },
    buttonContainer: {
        backgroundColor: "#2f4f4f",
        alignItems: "center",
        justifyContent: "center",
    },
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
        marginVertical : 10,
        marginHorizontal : 10+"%",
        paddingEnd: "5%",
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
    buttonText_bigger : {
        color : 'white',
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
        flex: 1,
        paddingEnd:"10%",
        // padding: 15,
    }

});

export default yourHabits;