import React , { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View , SafeAreaView, Image} from "react-native";
import {Picker} from '@react-native-picker/picker'
import { TextInput } from "react-native-gesture-handler";
import Slider from "@react-native-community/slider";
import SubButton22 from "../Components/SubButton22";
import habitStore from "./habitstore";


const timesOfDay = [
    { label: "Morning", value: "Morning" },
    { label: "Afternoon", value: "Afternoon" },
    { label: "Evening", value: "Evening" },
    { label: "Night", value: "Ninght" },
  ];

const daysOfWeek = [
    { label: "Sunday", value: "Sunday" },
    { label: "Monday", value: "Monday" },
    { label: "Tuesday", value: "Tuesday" },
    { label: "Wednesday", value: "Wednesday" },
    { label: "Thursday", value: "Thursday" },
    { label: "Friday", value: "Friday" },
    { label: "Saturday", value: "Saturday" },
  ];

  const monthsOfYear = [
    { label: "January", value: "January" },
    { label: "February", value: "February"},
    { label: "March", value: "March" },
    { label: "April", value: "April"},
    { label: "May", value: "May" },
    { label: "June", value: "June"},
    { label: "July", value: "July" },
    { label: "August", value: "August"},
    { label: "September", value: "Spetember" },
    { label: "October", value: "October"},
    { label: "November", value: "November" },
    { label: "December", value: "December"}, 
  ];


class NewHabits extends React.Component {
    constructor() {
        super();
        this.state = {
            nameOfHabit : "",
            description : "",
            useState : "",
            repeatInterval : "",
            selectedDay: "", 
        };

        };

        state = {user : ''}
        updateUser = (user) => {
            this.setState({user : user})
        }

        state = {sliderValue : 0}
        updateSlider = (sliderValue) => {
            this.setState({sliderValue : sliderValue})
        }



        
          addHabit = () => {
            const { nameOfHabit, description, repeatInterval, sliderValue } = this.state;
        
            if (nameOfHabit && description && repeatInterval !== "") {
              const newHabit = {
                nameOfHabit,
                description,
                repeatInterval,
                sliderValue,
              };
        
              habitStore.habits.push(newHabit);

              this.setState({
                nameOfHabit: "",
                description: "",
                repeatInterval: "",
                sliderValue: 0,
              });
            }
          };
    sendIt = () => {
        console.log("navigation prop: ", this.state)
        this.props.navigation.navigate('SelectGoals2', {
            nameOfHabit: this.state.nameOfHabit,
            description: this.state.description,
            repeatInterval: this.state.repeatInterval,
            sliderValue: this.state.sliderValue,
          });
    }   
    render(){
        

        const { repeatInterval } = this.state;

        return (
            <ScrollView style = {styles.container}>
                <Text style={{ color: "#E1E5E5", fontWeight : 'bold', alignSelf: "center", marginTop: 10, fontSize:30}}>
                    Create A New Habit
                </Text>
                <Image
                    source={require("../assets/undraw_habits3.png")}
                    style={{ width: 230, height: 230, alignSelf: "center"}}
                    />
                <Text style={{ color: "#E1E5E5", fontWeight : 'semibold', alignSelf: "center", marginBottom: 0, fontSize: 18}}>
                    Transform routines into enduring habits.
                    </Text>
                <TextInput
                placeholder="Name of Habit"
                onChangeText={(text) => this.setState({nameOfHabit : text})}
                onEndEditing={(text) => {
                    // console.log("Name of Habit:", this.state.name); 
                    habitStore.nameOfHabit = this.state.nameOfHabit;
                    }
                }
                style={{width : 370,
                    backgroundColor : '#fff',
                    padding : 15,
                    flexDirection : 'column',
                    flex : 1,
                    marginBottom : 10,
                    marginHorizontal : 20,
                    marginVertical : 25,
                    borderRadius : 10}}
                    
                />
            <TextInput
                placeholder="Description"
                onChangeText={(text) => this.setState({description : text})}
                onEndEditing={(text) => {
                    // console.log("Name of Habit:", this.state.description); 
                    habitStore.description = this.state.description;
                    }
                }
                style={{width : 370,
                    height : 150,
                    verticalAlign : 'top',
                    backgroundColor : '#fff',
                    padding : 15, 
                    marginBottom : 10,
                    marginHorizontal : 20,
                    marginVertical : 10,
                    borderRadius : 10}}
                />

                <Text style = {{
                    color : '#E1E5E5',
                    fontWeight : 'semibold',
                    fontSize : 18,
                    textAlign : 'left',
                    marginVertical : 10,
                    marginHorizontal : 25,
                    
                }}>
                    {/* -----------  Select Repeat Interval  ----------- */}
                    Select Repeat Interval
                </Text>


                <Picker selectedValue = {this.state.user}
                onValueChange={(itemValue) => {
                    this.updateUser(itemValue);
                    this.setState({ repeatInterval: itemValue, selectedDay: "" });
                    // console.log("Selected Interval:", itemValue);
                    habitStore.repeatInterval = itemValue;
                }}


                style = {{
                        // height : 200,
                        width : 360,
                        backgroundColor : "white",
                        borderRadius : 20,
                        marginVertical : 10,
                        // alignContent : 'right',
                        marginHorizontal : 25}}>
                    <Picker.Item label = "Daily" value = "Daily"/>
                    <Picker.Item label = "Weekly" value = "Weekly"/>
                    <Picker.Item label = "Monthly" value = "Monthly"/>
                </Picker>


                {repeatInterval === "Daily" && (
                <Picker
                    selectedValue={this.state.selectedDay}
                    onValueChange={(itemValue) => {
                    this.setState({ selectedDay: itemValue });
                    }}
                    style = {{
                        // height : 200,
                        width : 360,
                        backgroundColor : "white",
                        borderRadius : 20,
                        marginVertical : 10,
                        // alignContent : 'right',
                        marginHorizontal : 15}}
                >
                    <Picker.Item label="Select Time" value="" />
                    {timesOfDay.map((day) => (
                    <Picker.Item key={day.value} label={day.label} value={day.value} />
                    ))}
                </Picker>
                )}

                {repeatInterval === "Weekly" && (
                <Picker
                    selectedValue={this.state.selectedDay}
                    onValueChange={(itemValue) => {
                    this.setState({ selectedDay: itemValue });
                    }}
                    style = {{
                        // height : 200,
                        width : 360,
                        backgroundColor : "white",
                        borderRadius : 20,
                        marginVertical : 10,
                        // alignContent : 'right',
                        marginHorizontal : 15}}
                >
                    <Picker.Item label="Select Day" value="" />
                    {daysOfWeek.map((day) => (
                    <Picker.Item key={day.value} label={day.label} value={day.value} />
                    ))}
                </Picker>
                )}

                {repeatInterval === "Monthly" && (
                <Picker
                    selectedValue={this.state.selectedDay}
                    onValueChange={(itemValue) => {
                    this.setState({ selectedDay: itemValue });
                    }}
                    style = {{
                        // height : 200,
                        width : 360,
                        backgroundColor : "white",
                        borderRadius : 20,
                        marginVertical : 10,
                        // alignContent : 'right',
                        marginHorizontal : 15}}
                >
                    <Picker.Item label="Select Month" value="" />
                    {monthsOfYear.map((day) => (
                    <Picker.Item key={day.value} label={day.label} value={day.value} />
                    ))}
                </Picker>
                )}

                <Text style = {{
                    color : '#E1E5E5',
                    fontWeight : 'semibold',
                    fontSize : 18,
                    textAlign : 'left',
                    marginVertical : 10,
                    marginHorizontal : 25,

                }}>
                    {/* ------------  Select Priority Level  ------------ */}
                    Select Priority Level
                </Text>


                <Slider
                style = {{width : 350, height : 40, marginVertical : 5, marginHorizontal : 25}}
                minimumValue = {0}
                maximumValue = {1}
                minimumTrackTintColor = "tomato"
                maximumTrackTintColor = "#000000"
                thumbTintColor="tomato"
                // onValueChange = {this.updateSlider}
                onValueChange={(sliderValue) => {
                    this.setState({ sliderValue: sliderValue });
                }}
                onSlidingComplete={() => {
                    // console.log("Slider Value (Completed):", this.state.sliderValue);
                    habitStore.sliderValue = this.state.sliderValue;
                }}
                
                />

                <View style = {{flexDirection : 'row', justifyContent : 'space-between', marginHorizontal : 25}}>
                    <Text style = {{color : '#E1E5E5', fontWeight : 'bold', fontSize : 18, textTransform : 'uppercase', textAlign : 'left', marginVertical : 2, marginHorizontal : 20,}}>
                        Low
                    </Text>

                    <Text style = {{color : '#E1E5E5', fontWeight : 'bold', fontSize : 18, textTransform : 'uppercase', textAlign : 'right', marginVertical : 2, marginHorizontal : 20,}}>
                        High
                    </Text>

                </View>

                <View style = {{flexDirection : 'column', justifyContent : 'space-between', marginHorizontal : 8}}>

                    <SubButton22
                    text="Continue"
                    // onPress={() => this.props.navigation.navigate('SelectGoals2'
                    //     ,{
                    //     nameOfHabit: this.state.nameOfHabit,
                    //     description: this.state.description,
                    //     repeatInterval: this.state.repeatInterval,
                    //     sliderValue: this.state.sliderValue,  
                    //     },
                        
                    // )}
                    onPress={this.sendIt}
                    
                    />

                    <SubButton22
                    text="Cancel"
                    onPress={() => this.props.navigation.navigate('HabitScreen')}
                    />
                </View>

                

            </ScrollView>
        );
    };

}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#2f4f4f',
        // marginLeft : 20,
        // alignItems : 'center',
        // justifyContent : 'center',
    },
    input : {
        width : 200,
        backgroundColor : '#fff',
        padding : 15,
        marginBottom : 10,
        borderRadius : 20,
        alignItems : 'flex-start',
    },
});

export default NewHabits;
