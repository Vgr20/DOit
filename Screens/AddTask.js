import DateTimePicker from '@react-native-community/datetimepicker';
import React from "react";
import {Animated,Easing, SafeAreaView, View, Text, StatusBar, StyleSheet, Button ,TextInput, ScrollView, TouchableHighlight, TouchableOpacity, Image} from "react-native";
import Icon from "react-native-vector-icons//FontAwesome";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import { NavigationContainer } from '@react-navigation/native';
import TaskView from './TaskView';


const AddTask = ()=>{
  const buttonScale = new Animated.Value(1);
  const [selectedGroup, setSelectedGroup] = React.useState("group1"); // Default selected group
  const [newGroup, setNewGroup] = React.useState("");
  const [addingNewGroup, setAddingNewGroup] = React.useState(false);


  const handleAddButtonPress = () => {
    // Animate the button with a bounce effect
    Animated.sequence([
      Animated.timing(buttonScale, {
        toValue: 0.9,
        duration: 100,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
      Animated.spring(buttonScale, {
        toValue: 1,
        friction: 4,
        tension: 50,
        useNativeDriver: true,
      }),
    ]).start();

    // Navigate to Task View screen
    navigation.navigate('Task View');
  };
  const handleGroupChange = (itemValue) => {
    if (itemValue === "newGroup") {
      setAddingNewGroup(true);
    } else {
      setSelectedGroup(itemValue);
      setAddingNewGroup(false);
    }
  };
    const navigation = useNavigation(); 
    const [text, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');

    //Star rating 
    const [rating, setRating] = React.useState(0);

    const handleStarPress = (starNumber) => {
      setRating(starNumber);
    };
    
    // AM or PM
    const getMeridiem = (hours) => {
      return hours >= 12 ? "PM" : "AM";
    };

    // Month Name
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    // DatetimePicker
    const [date, setDate] = React.useState(new Date());
    const [mode, setMode] = React.useState('date');
    const [show, setShow] = React.useState(false);
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate;
      setShow(false);
      setDate(currentDate);
    };
  
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
  
    const showTimepicker = () => {
      showMode('time');
    };


    // Second DateTimePicker
    const [date2, setDate2] = React.useState(new Date());
    const [mode2, setMode2] = React.useState('date');
    const [show2, setShow2] = React.useState(false);

    const onChange2 = (event, selectedDate) => {
      const currentDate = selectedDate || date2;
      setShow2(false);
      setDate2(currentDate);
    };

    const showMode2 = (currentMode) => {
      setShow2(true);
      setMode2(currentMode);
    };

    const showDatepicker2 = () => {
      showMode2('date');
    };

    const showTimepicker2 = () => {
      showMode2('time');
    };

    // Third DateTimePicker
    const [date3, setDate3] = React.useState(new Date());
    const [mode3, setMode3] = React.useState('date');
    const [show3, setShow3] = React.useState(false);
    
    const onChange3 = (event, selectedDate) => {
      const currentDate = selectedDate || date3;
      setShow3(false);
      setDate3(currentDate);
    };

    const showMode3 = (currentMode) => {
      setShow3(true);
      setMode3(currentMode);
    };


    const showDatepicker3 = () => {
      showMode3('date');
    };

    const showTimepicker3 = () => {
      showMode3('time');
    };

    return (
      <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text> </Text>
        {/*<Image  source={require('../assets/celebrate2.png')} 
                style={{width: 50, 
                        height: 50, 
                        position: "relative", 
                        left: 10, 
                top: 100}}/>*/}
        {/* Task Name */}
        <View style={styles.box}>
            <Text style={styles.font}>TASK GROUP</Text>
            <Picker style={[styles.box,{backgroundColor:'rgba(0, 0, 0, 0.2)',marginRight:10,marginTop:5}]}
              selectedValue={addingNewGroup ? "newGroup" : selectedGroup}
              onValueChange={handleGroupChange}
              itemStyle={{ color: "#26214a" }}
            >
              <Picker.Item label="Group 1" value="group1" />
              <Picker.Item label="Group 2" value="group2" />
              <Picker.Item label="Group 3" value="group3" />
              <Picker.Item label="Add New Group" value="newGroup" />
              {/* Add more items as needed */}
            </Picker>

            {addingNewGroup && (
              <TextInput style={styles.input}
                placeholderTextColor={'white'}
                placeholder="Enter New Group Name"
                cursorColor={'black'}
                value={newGroup}
                onChangeText={setNewGroup}
              />
            )}
            {/* <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholderTextColor={'grey'}
            underlineColorAndroid={'transparent'}
            cursorColor={'white'}
            placeholder="Task Group 1"
            /> */}
        </View>
       
        {/* Level of game */}
        <View style={styles.box}>
        <Text style={styles.font}>TASK NAME</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholderTextColor={'white'}
          underlineColorAndroid={'transparent'}
          cursorColor={'black'}
          placeholder="Task Name"
        />
        </View>

        {/* Starting Task Time */}
        <View style={styles.box}>
        <Text style={styles.font}>START AT</Text>
        <Text> </Text>
          <View style={styles.selectdatetime}>
          <TouchableOpacity onPress={showDatepicker} style={{borderRadius:12}}>
              <View style={styles.iconstyle}>
                <Text style={styles.fontbutton}>Date   </Text>
                <Icon style={{color:'#155937',}} name="calendar" size={40}/>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={showTimepicker} style={{borderRadius:12}}>
              <View style={styles.iconstyle}>
                <Text style={styles.fontbutton}>Starting   </Text>
                <Icon style={{alignItems:'center',color:'#155937',}} name="clock-o" beat size={40}/>
              </View>
          </TouchableOpacity>
          </View>
          <View style={{alignItems:'center'}}>  
            <Text style={{fontSize:30, color:'black',fontWeight:'bold'}}>{date.getFullYear()}</Text>
            <Text style={{fontSize:35, color:'black',fontWeight:'bold'}}>{monthNames[date.getMonth()]} {date.getDate()}</Text>
            <Text style={{fontSize:35, color:'black',fontWeight:'bold'}}>{("0" + (date.getHours() % 12 || 12)).slice(-2)}:{("0" + date.getMinutes()).slice(-2)} {getMeridiem(date.getHours())}</Text>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={false}
                onChange={onChange}
              />
            )}
          </View>
        </View>

        {/* Ending Task Time */}
        <View style={styles.box}>
        <Text style={styles.font}>END AT</Text>
        <Text> </Text>
          <View style={styles.selectdatetime}>
            <TouchableOpacity onPress={showDatepicker2} style={{ borderRadius: 12 }}>
              <View style={styles.iconstyle}>
                <Text style={styles.fontbutton}>Date   </Text>
                <Icon style={{color:'#672429',}} name="calendar" size={40} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={showTimepicker2} style={{ borderRadius: 12 }}>
              <View style={styles.iconstyle}>
                <Text style={styles.fontbutton}>Ending   </Text>
                <Icon style={{ alignItems: 'center',color:'#672429', }} name="clock-o" beat size={40} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{alignItems:'center'}}>  
            <Text style={{fontSize:30, color:'black',fontWeight:'bold'}}>{date2.getFullYear()}</Text>
            <Text style={{fontSize:35, color:'black',fontWeight:'bold'}}>{monthNames[date2.getMonth()]} {date2.getDate()}</Text>
            <Text style={{fontSize:35, color:'black',fontWeight:'bold'}}>{("0" + (date2.getHours() % 12 || 12)).slice(-2)}:{("0" + date2.getMinutes()).slice(-2)} {getMeridiem(date2.getHours())}</Text>
            {show2 && (
              <DateTimePicker
                testID="dateTimePicker2"
                value={date2}
                mode={mode2}
                is24Hour={false}
                onChange={onChange2}
              />
            )}
          </View>
        </View>
        
        {/* Deadline Task Time */}
        <View style={styles.box}>

        <Text style={styles.font}>DEAD-LINE(Optional)</Text>
        <Text> </Text>
          <View style={styles.selectdatetime}>
            <TouchableOpacity onPress={showDatepicker3} style={{ borderRadius: 12 }}>
              <View style={styles.iconstyle}>
                <Text style={styles.fontbutton}>Date   </Text>
                <Icon style={{color:'black',}} name="calendar" size={40} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={showTimepicker3} style={{ borderRadius: 12 }}>
              <View style={styles.iconstyle}>
                <Text style={styles.fontbutton}>Time   </Text>
                <Icon style={{ alignItems: 'center',color:'black', }} name="clock-o" beat size={40} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{alignItems:'center'}}>  
            <Text style={{fontSize:30, color:'black',fontWeight:'bold'}}>{date3.getFullYear()}</Text>
            <Text style={{fontSize:35, color:'black',fontWeight:'bold'}}>{monthNames[date3.getMonth()]} {date3.getDate()}</Text>
            <Text style={{fontSize:35, color:'black',fontWeight:'bold'}}>{("0" + (date3.getHours() % 12 || 12)).slice(-2)}:{("0" + date3.getMinutes()).slice(-2)} {getMeridiem(date3.getHours())}</Text>
            {show3 && (
              <DateTimePicker
                testID="dateTimePicker3"
                value={date3}
                mode={mode3}
                is24Hour={false}
                onChange={onChange3}
              />
            )}
          </View>
        </View>

        {/* Level of Importance */}
       <View style={styles.box}>
        <Text style={styles.font}>LEVEL OF IMPORTANCE</Text>
        <View style={styles.stars}>
          {[1, 2, 3].map((starNumber) => (
            <TouchableOpacity
              key={starNumber}
              underlayColor="transparent"
              onPress={() => handleStarPress(starNumber)}
            >
              <View style={styles.star}>
                <MaterialIcons
                  name={rating >= starNumber ? "star" : "star-border"}
                  size={50}
                  style={styles.starIcon}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      
      <View style={styles.footer}>
          <Animated.View style={[styles.addButton, { transform: [{ scale: buttonScale }] }]}>
            <TouchableOpacity onPress={handleAddButtonPress}>
              <Text style={[styles.addButtonText, { fontSize: 40},{alignItems:'center'}]}>+</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>

      
      </ScrollView>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  footer:{
    position:'relative',
    alignItems:'center',
    height:100,
    bottom: 0,
    left:0,
    right:0
  },
  addButton:{
    backgroundColor:'rgba(0, 0, 0, 0.4)',
    borderWidth:3,
    width:70,
    height:70,
    borderRadius: 50,
    borderColor: '#bcf2f5',
    alignItems:'center',
    justifyContent:'center',
    elevation: 35,
  },
  addButtonText:{
    color: 'white',
    fontSize:18,
    alignSelf:'center'
  },
  stars: {
    display: "flex",
    flexDirection: "row",
    alignItems:'center',
    justifyContent:'center',
  },
  star: {
    padding: 4,

  },
  starIcon: {
    color:'#194d33',
    
  },
  fontbutton:{
    fontSize:20,
    justifyContent:'center',
    color:'#b7bcba',
    marginTop:10,
    color:'black'
    
  },
  iconstyle:{
    padding: 10,
    flexDirection:'row',
    borderRadius:6,
    backgroundColor:'rgba(0, 0, 0, 0.2)',
    elevation:25,

  },
  selectdatetime:{
      flexDirection:'row',
      justifyContent:'space-evenly',
    },
  box:{
      backgroundColor:'#a9c0c0',
      borderColor:'white',
      padding:10,
      marginEnd:15,
      marginStart:15,

      borderBlockColor:'white',
      marginBottom:10,
      borderRadius:5,
      elevation:10,
  },
  font:{
    color:'black',
    marginLeft: 10,
    fontWeight:'bold',
    alignSelf:'center',
    fontWeight:'bold',
    fontSize:20
      
  },
  container:{
      backgroundColor: "#2f4f4f",
  },
  input: {
      height: 40,
      margin: 12,
      borderRadius:5,
      padding: 10,
      color: 'white',
      backgroundColor:'rgba(0, 0, 0, 0.2)',
      
  },
}) 

export default AddTask