import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Image } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import SubButton22 from '../Components/SubButton22';
import habitStore from './habitstore';
import client from "../api/client";

const data = [
    { label: 'Units', value: '1' },
    { label: 'Timer', value: '2' },
    { label: 'Nothing', value: '3' },
  ];
  
const units = [
  { label: '1', value: '11' },
  { label: '2', value: '12' },
  { label: '5', value: '13' },
  { label: '10', value: '14' },
  { label: '20', value: '15' },
  { label: 'Custom', value: '16' },
];

const timer = [
    { label: '5 minutes', value: '21' },
    { label: '10 minutes', value: '22' },
    { label: '15 minutes', value: '23' },
    { label: '30 minutes', value: '24' },
    { label: '45 minutes', value: '25' },
    { label: '1 hour', value: '26' },
    { label: '2 hour', value: '27' },
    { label: 'Custom', value: '16' },
  ];


const SelectGoals2 = (props) => {

  const [isTextInputVisible, setIsTextInputVisible] = useState(false);
  const [textInputValue, setTextInputValue] = useState('');

  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [isFocus1, setIsFocus1] = useState(false);
  const [isFocus2, setIsFocus2] = useState(false);

  const { route } = props.navigation.state;
  const {
    nameOfHabit = props.navigation.state.params.nameOfHabit,
    description = props.navigation.state.params.description,
    repeatInterval = props.navigation.state.params.repeatInterval,
    sliderValue = props.navigation.state.params.sliderValue,
  } = route?.params || {};

  // const {
  //   nameOfHabit=  poses.nameOfHabit,
  //   description=  poses.description,
  //   repeatInterval= poses.repeatInterval,
  //   sliderValue= poses.sliderValue,
  // } = poses;

  const handleAddHabitPress = async () => {
    try {
      const response = client.post("/api/NewHabitRoute/saveNewHabit",{
        newhabitname: nameOfHabit,
        description: description,
        intervaltype: repeatInterval,
        prioritylevel: sliderValue,
        remindertype: value1,
        preferedtime: value2
      });
      if(response.data.message === "Habit Added Successfullly"){
        console.log("Habit added successfully");
        console.log(prioritylevel);
      }
    } catch (error){
      console.log(error);
    
      console.log('Navigation State:', props.navigation.state);
      console.log(nameOfHabit)
    }
    props.navigation.navigate('FullScreen');
  };

  const renderLabel = () => {
    if (value1 || isFocus1) {
      return (
        <Text style={[styles.label, isFocus1 && { color: 'blue' }]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };

  return (
    <ScrollView style={styles.scrollContainer}>
            {/* <Text style={{ color: "#E1E5E5", fontWeight : 'bold', alignSelf: "center", marginTop: 20, fontSize: 28}}>Habit Center</Text> */}
            <Image
            source={require("../assets/undraw_goals.png")}
            style={{ width:250, height: 250, alignSelf: "center"}}
            />

            <Text style={{ color: "#E1E5E5", fontWeight : 'semibold', alignSelf: "center", marginBottom: 0, fontSize: 20}}>
            Your new habit is almost ready!
            </Text>
            <Text style = {{
                color : '#E1E5E5',
                fontWeight : 'semibold',
                fontSize : 20,
                textAlign : 'left',
                marginTop : 20,
                marginHorizontal : 20,  
            }}>
                {/* -----------  Select Repeat Interval  ----------- */}
                Select Type of Reminder
            </Text>
            <View style={styles.dropdownContainer}>
            <Dropdown
                style={[styles.dropdown, isFocus1 && { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus1 ? 'Select Type' : '...'}
                searchPlaceholder="Search..."
                value={value1}
                onFocus={() => setIsFocus1(true)}
                onBlur={() => setIsFocus1(false)}
                onChange={item => {
                    setValue1(item.value);
                    setValue2(null); // Reset second dropdown value when changing the first dropdown
                    setIsFocus1(false);
                    setIsFocus2(false);
                    // console.log("Selected Interval:", item.label);
                    habitStore.method = item.label;
                }}
            />
            </View>
            <Text style = {{
                color : '#E1E5E5',
                fontWeight : 'semibold',
                fontSize : 20,
                textAlign : 'left',
                // marginTop : 20,
                marginHorizontal : 20,  
            }}>
                {/* -----------  Select Repeat Interval  ----------- */}
                Select Times of preferred Reminder
            </Text>

            <View style={styles.dropdownContainer}>
            <Dropdown
                style={[styles.dropdown, isFocus2 && { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={value1 === '1' ? units : value1 === '2' ? timer : []}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus2 ? 'Select value' : '...'}
                searchPlaceholder="Search..."
                value={value2}
                onFocus={() => setIsFocus2(true)}
                onBlur={() => setIsFocus2(false)}
                onChange={item => {
                    setValue2(item.value);
                    setIsFocus2(false);
                    // console.log("Selected Interval:", item.label);
                    habitStore.value = item.label;
                    setIsTextInputVisible(item.value === '16');
                }}
   
            />
            </View>
            {isTextInputVisible && (
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Enter Custom Value"
                value={textInputValue}
                onChangeText={(text) => setTextInputValue(text)}
              />
            </View>
            )}



            <View style = {{flexDirection : 'column', justifyContent : 'space-between', marginHorizontal : 17}}>
                    <SubButton22
                    text="Save"
                    onPress={handleAddHabitPress}
                    />
                    {/* <SubButton22
                    text="Save"
                    onPress={() => poses.navigation.navigate('FullScreen')}
                    /> */}
                    <SubButton22
                    text="Cancel"
                    onPress={() => props.navigation.navigate('HabitScreen')}
                    />
            </View>
    </ScrollView>
  );
};

export default SelectGoals2;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2f4f4f',
    padding: 16,
    flex : 1,
    alignContent : 'center',
    justifyContent : 'center',
    
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom : 20
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
    dropdownContainer: 
    {backgroundColor:'#d9dddc',
        padding:10,
        borderRadius:20,
        marginVertical:20,
        marginHorizontal:10,

  },

  textInputContainer: {
    backgroundColor: '#d9dddc',
    padding: 10,
    borderRadius: 20,
    marginVertical: 20,
    marginHorizontal: 10,
  },
  textInput: {
    height: 40,
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 20,
  },
    scrollContainer: {
        flex: 1,
        backgroundColor: '#2f4f4f',
    }

});