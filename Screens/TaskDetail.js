import React, {useState} from 'react';
import { View, Text ,StyleSheet ,ScrollView, TouchableOpacity,Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const DATA_Group = [
    {
      id: '1',
      title: 'Group 1',
      task1: 'Task 1',
      temp_date1: "2023/08/20",
      temp_duration1: "00:30:00",
      temp_start1: "12:00:00",
      temp_end1: "12:30:00",
      task1priority: 'High',
      deadline1: '2023/08/23',
      task2: 'Task 2',
      temp_date2: "2023/08/11",
      temp_duration2: "00:30:00",
      temp_start2: "12:00:00",
      temp_end2: "12:30:00",
      task2priority: 'Low',
      deadline2: '2023/08/23',
      task3: 'Task 3',
      temp_date3: "2023/08/11",
      temp_duration3: "00:30:00",
      temp_start3: "12:00:00",
      temp_end3: "12:30:00",
      task3priority: 'Low',
      deadline3: '2023/08/23',
    },
    {
      id: '2',
      title: 'Group 2',
      task1: 'Task 1',    
      temp_date1: "2023/08/11",
      temp_duration1: "01:30:00",
      temp_start1: "12:30:00",
      temp_end1: "14:00:00",
      task1priority: 'High',
      deadline1: 'None',
  
    },
    {
      id: '3',
      title: 'Group 3',
      task1: 'Task A',
      temp_date1: "2023/08/13",
      temp_duration1: "02:30:00",
      temp_start1: "10:30:00",
      temp_end1: "13:00:00",
      task1priority: 'Low',
      deadline1: 'None',
      task3: 'Task C',
      temp_date3: "2023/08/13",
      temp_duration3: "00:30:00",
      temp_start3: "12:30:00",
      temp_end3: "13:00:00",
      task3priority: 'Medium',
      deadline3: '2023/08/25',
    },
  ];


  const TaskDetail = ({ route }) => {
    const { item } = route.params;
    const [taskVisibility, setTaskVisibility] = useState({
      task1: true,
      task2: true,
      task3: true,
    });
  
    const toggleTaskVisibility = (taskKey) => {
      setTaskVisibility((prevVisibility) => ({
        ...prevVisibility,
        [taskKey]: !prevVisibility[taskKey],
      }));
    };
  
    // ... Other code
  
    return (

      <ScrollView style={styles.container}>
        <View style={styles.item}>
          <Text style={styles.title}>{item.title}</Text>
          <Text> </Text>
  
          {/* Display task 1 details */}
          {item.task1 && taskVisibility.task1 && (
            <TouchableOpacity style={styles.box}>
              <View style={styles.taskDetails}>
                <Text style={styles.taskTitle}>{item.task1}</Text>
                <Text style={styles.taskInfo}>Priority: {item.task1priority}</Text>
                <Text style={styles.taskInfo}>Deadline: {item.deadline1}</Text>
                <Text style={styles.taskInfo}>Start: {item.temp_start1}</Text>
                <Text style={styles.taskInfo}>End: {item.temp_end1}</Text>
                <Text style={styles.taskInfo}>Duration: {item.temp_duration1}</Text>
                <Text style={styles.taskInfo}>Date: {item.temp_date1}</Text>
              </View>
            <TouchableOpacity
              style={styles.noteDelete}
              // onPress={() => toggleTaskVisibility('task1')}
              onPress= {()=> Alert.alert('Delete Task', 'Are you sure you want to delete?', [
                          {
                            text: 'Cancel',
                            onPress: () => console.log('Cancel Pressed'),
                            style: 'cancel',
                          },
                          {text: 'OK', onPress: () => {toggleTaskVisibility('task1')}},
                          ])}
            >
              <Icon name='trash' style={styles.trashIcon}></Icon>
            </TouchableOpacity>
            </TouchableOpacity>
          )}
  
          {/* Display task 2 details (if exists) */}
          {item.task2 && taskVisibility.task2 && (
            <TouchableOpacity style={styles.box}>
              <View style={styles.taskDetails}>
                <Text style={styles.taskTitle}>{item.task2}</Text>
                <Text style={styles.taskInfo}>Priority: {item.task2priority}</Text>
                <Text style={styles.taskInfo}>Deadline: {item.deadline2}</Text>
                <Text style={styles.taskInfo}>Start: {item.temp_start2}</Text>
                <Text style={styles.taskInfo}>End: {item.temp_end2}</Text>
                <Text style={styles.taskInfo}>Duration: {item.temp_duration2}</Text>
                <Text style={styles.taskInfo}>Date: {item.temp_date2}</Text>
              </View>
              <TouchableOpacity
                style={styles.noteDelete}
                onPress= {()=> Alert.alert('Delete Task', 'Are you sure you want to delete?', [
                          {
                            text: 'Cancel',
                            onPress: () => console.log('Cancel Pressed'),
                            style: 'cancel',
                          },
                          {text: 'OK', onPress: () => {toggleTaskVisibility('task2')}},
                          ])}
              >
                <Icon name='trash' style={styles.trashIcon}></Icon>
              </TouchableOpacity>
            </TouchableOpacity>
          )}
  
          {/* Display task 3 details (if exists) */}
          {item.task3 && taskVisibility.task3 && (
            <TouchableOpacity style={styles.box}>
              <View style={styles.taskDetails}>
                <Text style={styles.taskTitle}>{item.task3}</Text>
                <Text style={styles.taskInfo}>Priority: {item.task3priority}</Text>
                <Text style={styles.taskInfo}>Deadline: {item.deadline3}</Text>
                <Text style={styles.taskInfo}>Start: {item.temp_start3}</Text>
                <Text style={styles.taskInfo}>End: {item.temp_end3}</Text>
                <Text style={styles.taskInfo}>Duration: {item.temp_duration3}</Text>
                <Text style={styles.taskInfo}>Date: {item.temp_date3}</Text>
              </View>

              <TouchableOpacity
                style={styles.noteDelete}
                onPress= {()=> Alert.alert('Delete Task', 'Are you sure you want to delete?', [
                          {
                            text: 'Cancel',
                            onPress: () => console.log('Cancel Pressed'),
                            style: 'cancel',
                          },
                          {text: 'OK', onPress: () => {toggleTaskVisibility('task3')}},
                          ])}
              >
                <View style={styles.trashIconContainer}>
                <Icon name='trash' style={styles.trashIcon}></Icon>
                </View>
              </TouchableOpacity>
            </TouchableOpacity>
          )}
  
          {/* Include other relevant details */}
        </View>
      </ScrollView>
    );
  };


const styles = StyleSheet.create({
    box:{
        backgroundColor: '#a9c0c0',
        marginBottom:20,
        borderRadius:10,
        padding:10,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        elevation: 10, // Android shadow
    },
    noteDelete:{
      alignContent:'space-around',
      padding: 10,
    },
    trashIconContainer: {
      marginTop: 'auto',
    },
    trashIcon:{
      fontSize:40,
      color:'black',
      alignItems: 'flex-end'
    },
    bottomButton:{
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'baseline'
  
    },
    container: {
      backgroundColor:'#2f4f4f',
      flex: 1,
    },
    item: {
      marginVertical:10,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 30,
      color:'white'
    },
    titlesmall:{
      fontSize: 15,
      color: 'white'
    },
    headertitle:{
      height: '10%',
      backgroundColor:'black',
      justifyContent:'center',
      alignItems:'center'
    },
    arrange:{
      flexDirection:"row",
      justifyContent:'space-between'
    },
    font:{
      color: 'white',
      fontSize: 25,
      left:'20%',
    },
    buttonView:{
      justifyContent:'center',
      alignItems:'center',
      right:'10%',
    },
    taskDetails: {

      borderRadius: 10,
      padding: 15,
      marginBottom: 20,
      shadowColor: 'rgba(0, 0, 0, 0.1)',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 1,
      shadowRadius: 3,
      elevation: 3,
      width: '45%'
    },
    taskTitle: {
      fontSize: 25,
      fontWeight: 'bold',
      marginBottom: 10,
      color: 'black',
    },
    taskInfo: {
      width: '220%',
      padding: 10,
      backgroundColor:'rgba(0, 0, 0, 0.7)',
      borderRadius: 5,
      elevation: 15,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      marginBottom: 6,
      color:'white',
    },
  });

export default TaskDetail;