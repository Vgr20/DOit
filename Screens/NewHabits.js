import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View , SafeAreaView} from "react-native";
import {Picker} from '@react-native-picker/picker'
import { TextInput } from "react-native-gesture-handler";
import Slider from "@react-native-community/slider";
import SubButton2 from "../Components/SubButton2";
import habitStore from "./habitstore";
class NewHabits extends React.Component {
    constructor() {
        super();
        this.state = {
            nameOfHabit : "",
            description : "",
            useState : "",
            repeatInterval : "",
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

     
    
    render(){
        
        return (
            <ScrollView style = {styles.container}>
                <TextInput
                placeholder="Name of Habit"
                onChangeText={(text) => this.setState({name : text})}
                onEndEditing={(text) => {
                    // console.log("Name of Habit:", this.state.name); 
                    habitStore.nameOfHabit = this.state.name;
                    }
                }
                style={{width : 370,
                    backgroundColor : '#fff',
                    padding : 15,
                    flexDirection : 'column',
                    flex : 1,
                    marginBottom : 10,
                    marginHorizontal : 10,
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
                    marginHorizontal : 10,
                    marginVertical : 15,
                    borderRadius : 10}}
                />

                <Text style = {{
                    color : '#E1E5E5',
                    fontWeight : 'semibold',
                    fontSize : 22,
                    textAlign : 'left',
                    marginVertical : 10,
                    marginHorizontal : 20,
                    
                }}>
                    {/* -----------  Select Repeat Interval  ----------- */}
                    Select Repeat Interval
                </Text>


                <Picker selectedValue = {this.state.user}
                onValueChange={(itemValue) => {
                    this.updateUser(itemValue);
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
                        marginHorizontal : 15}}>
                    <Picker.Item label = "Daily" value = "Daily"/>
                    <Picker.Item label = "Weekly" value = "Weekly"/>
                    <Picker.Item label = "Monthly" value = "Monthly"/>
                </Picker>

                <Text style = {{
                    color : '#E1E5E5',
                    fontWeight : 'semibold',
                    fontSize : 22,
                    textAlign : 'left',
                    marginVertical : 10,
                    marginHorizontal : 20,

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
                    <Text style = {{color : '#E1E5E5', fontWeight : 'bold', fontSize : 20, textTransform : 'uppercase', textAlign : 'left', marginVertical : 2, marginHorizontal : 20,}}>
                        Low
                    </Text>

                    <Text style = {{color : '#E1E5E5', fontWeight : 'bold', fontSize : 20, textTransform : 'uppercase', textAlign : 'right', marginVertical : 2, marginHorizontal : 20,}}>
                        High
                    </Text>

                </View>

                <View style = {{flexDirection : 'column', justifyContent : 'space-between', marginHorizontal : 8}}>

                    <SubButton2
                    text="Continue"
                    onPress={() => this.props.navigation.navigate('SelectGoals2')}
                    />

                    <SubButton2
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
