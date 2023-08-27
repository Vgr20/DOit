import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View , SafeAreaView} from "react-native";
import {Picker} from '@react-native-picker/picker'
import { TextInput } from "react-native-gesture-handler";
import Slider from "@react-native-community/slider";
import SubButton2 from "../Components/SubButton2";

class NewHabits extends React.Component {
    constructor() {
        super();
        this.state = {
            nameOfHabit : "",
            description : "",
            useState : "",
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

        
    
    render(){
        
        return (
            <ScrollView style = {styles.container}>
                <TextInput
                placeholder="Name of Habit"
                onChangeText={(text) => this.setState({name : text})}
                style={{width : 370,
                    backgroundColor : '#fff',
                    padding : 15,
                    marginBottom : 10,
                    marginHorizontal : 20,
                    marginVertical : 25,
                    borderRadius : 10}}
                />

            <TextInput
                placeholder="Description"
                onChangeText={(text) => this.setState({description : text})}
                style={{width : 370,
                    height : 150,
                    verticalAlign : 'top',
                    backgroundColor : '#fff',
                    padding : 15,
                    marginBottom : 10,
                    marginHorizontal : 20,
                    marginVertical : 20,
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


                <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}
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

                {/* <Text style = {{
                    color : '#E1E5E5',
                    fontWeight : 'bold',
                    fontSize : 20,
                    textTransform : 'uppercase',
                    textAlign : 'left',
                    marginVertical : 2,
                    marginHorizontal : 20,
                    paddingHorizontal : 16,
                    paddingVertical : 15,
                    borderRadius : 30,
                    backgroundColor : '#162626',
                }}>
                    Low                                                  High 
                </Text> */}

                <Slider
                style = {{width : 350, height : 40, marginVertical : 5, marginHorizontal : 25}}
                minimumValue = {0}
                maximumValue = {1}
                minimumTrackTintColor = "tomato"
                maximumTrackTintColor = "#000000"
                thumbTintColor="tomato"
                onValueChange = {this.updateSlider}
                />

                <View style = {{flexDirection : 'row', justifyContent : 'space-between', marginHorizontal : 25}}>
                    <Text style = {{color : '#E1E5E5', fontWeight : 'bold', fontSize : 20, textTransform : 'uppercase', textAlign : 'left', marginVertical : 2, marginHorizontal : 20,}}>
                        Low
                    </Text>

                    <Text style = {{color : '#E1E5E5', fontWeight : 'bold', fontSize : 20, textTransform : 'uppercase', textAlign : 'right', marginVertical : 2, marginHorizontal : 20,}}>
                        High
                    </Text>

                </View>

                <View style = {{flexDirection : 'column', justifyContent : 'space-between', marginHorizontal : 25}}>

                    <SubButton2
                    style = {{marginVertical : 5, marginHorizontal : 25}}
                    text="Save and Continue"
                    onPress={() => this.props.navigation.navigate('SelectGoalsScreen')}
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
