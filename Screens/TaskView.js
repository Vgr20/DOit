import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const DATA_Group = [
  {
    id: "1",
    title: "Tasks for the week",
    task1: "Maths Assignment",
    temp_date1: "2023/08/20",
    temp_duration1: "00:30:00",
    temp_start1: "12:00:00",
    temp_end1: "12:30:00",
    task1priority: "High",
    deadline1: "2023/08/23",
    task2: "Studey React.js",
    temp_date2: "2023/08/11",
    temp_duration2: "00:30:00",
    temp_start2: "12:00:00",
    temp_end2: "12:30:00",
    task2priority: "Low",
    deadline2: "2023/08/23",
    task3: "Course Work",
    temp_date3: "2023/08/11",
    temp_duration3: "00:30:00",
    temp_start3: "12:00:00",
    temp_end3: "12:30:00",
    task3priority: "Low",
    deadline3: "2023/08/23",
  },
  {
    id: "2",
    title: "Tasks for the day",
    task1: "Play Badminton",
    temp_date1: "2023/08/11",
    temp_duration1: "01:30:00",
    temp_start1: "12:30:00",
    temp_end1: "14:00:00",
    task1priority: "High",
    deadline1: "None",
  },
  {
    id: "3",
    title: "Less important Tasks ",
    task1: "Prepare Slides",
    temp_date1: "2023/08/13",
    temp_duration1: "02:30:00",
    temp_start1: "10:30:00",
    temp_end1: "13:00:00",
    task1priority: "Low",
    deadline1: "None",
    task3: "Create Content",
    temp_date3: "2023/08/13",
    temp_duration3: "00:30:00",
    temp_start3: "12:30:00",
    temp_end3: "13:00:00",
    task3priority: "Medium",
    deadline3: "2023/08/25",
  },
];

const Item = ({ item, onPress, onTrashPress, backgroundColor, textColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      styles.item,
      { backgroundColor },
      {
        backgroundColor: "#a9c0c0",
        // marginBottom: 20,
        borderRadius: 10,
        // padding: 10,
        alignItems: "center",
        // flexDirection: "row",
        // justifyContent: "space-between",
        // elevation: 10, // Android shadow
      },
    ]}
  >
    
      <Text
        style={[
          styles.title,
          {
            color: "black",
            fontSize: 23,
            fontWeight: "bold",
            alignItems: "center",
            marginBottom: 7,
          },
        ]}
      >
        {item.title}
      </Text>
      <Image
          source={require("../assets/undraw_schedule2.png")}
          style={{ width: 150, height: 150, alignSelf: "center", marginBottom: 0 }}
        />
      
          <Text style={[styles.titlesmall, { color: "#E1E5E5" }]}>
            {item.task1} (Priority: {item.task1priority})
          </Text>
      
          {item.task2 && (
            <Text style={[styles.titlesmall, { color: "#E1E5E5" }]}>
              {item.task2} (Priority: {item.task2priority})
            </Text>
          )}
        
          {item.task3 && (
            <Text style={[styles.titlesmall, { color: "#E1E5E5" }]}>
              {item.task3} (Priority: {item.task3priority})
            </Text>
          )}
        
      
      <View>
        <TouchableOpacity style={styles.noteDelete} onPress={onTrashPress}>
          <Icon name="trash" color="black" size={40} />
        </TouchableOpacity>
      </View>
    
  </TouchableOpacity>
);

const TaskView = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState();
  const [data, setData] = useState(DATA_Group); // Use a state for the data

  const hideItem = (itemId) => {
    const updatedData = data.filter((item) => item.id !== itemId);
    setData(updatedData);
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity>
        <Item
          item={item}
          onPress={() => navigation.navigate("TaskDetail", { item })} // Navigate to TaskDetail
          onTrashPress={() =>
            Alert.alert("Delete Group", "Are you sure you want to delete?", [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
              },
              {
                text: "OK",
                onPress: () => {
                  hideItem(item.id);
                },
              },
            ])
          }
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={{ color: "#E1E5E5", fontWeight : 'bold', alignSelf: "center", marginBottom: 0, fontSize: 40}}>
            Organize Yourself
          </Text>
      <Image
          source={require("../assets/undraw_grouping_tasks.png")}
          style={{ width: 180, height: 180, alignSelf: "center", marginTop: 0, marginBottom: 0 }}
        />

      <Text style={{ color: "#E1E5E5", fontWeight : 'normal', alignSelf: "center", marginBottom: 10}}>
          Let's break huge tasks into doable slices.
        </Text> */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        ListHeaderComponent={() => (
          <>
            <Text style={{ color: "#E1E5E5", fontWeight : 'bold', alignSelf: "center", marginBottom: 0, fontSize: 40}}>
              Organize Yourself
            </Text>
            <Image
              source={require("../assets/undraw_grouping_tasks.png")}
              style={{ width: 180, height: 180, alignSelf: "center", marginTop: 0, marginBottom: 0 }}
            />
            <Text style={{ color: "#E1E5E5", fontWeight : 'normal', alignSelf: "center", marginBottom: 10}}>
              Let's break huge tasks into doable slices.
            </Text>
          </>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  noteDelete: {
    // padding: 5,
    // marginStart: 195,
    // backgroundColor:'red',
    // right: "13%",
  },
  trashIcon: {
    fontSize: 50,
    color: "white",
  },
  bottomButton: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "baseline",
  },
  container: {
    backgroundColor: "#2f4f4f",
    flex: 1,
  },
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  titlesmall: {
    width:'90%',
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderRadius: 5,
    elevation: 15,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginBottom: 6,
    // color: "#aa8cc2",
  },
  headertitle: {
    height: "10%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  arrange: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  font: {
    color: "white",
    fontSize: 25,
    left: "20%",
  },
  buttonView: {
    justifyContent: "center",
    alignItems: "center",
    right: "10%",
  },
  taskDetails: {
    borderRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3,
    width: "75%",
    position: "relative",
  },
  taskGroups: {
    borderRadius: 10,
    padding: 5,
    marginBottom: 10,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 3,
  },
});

export default TaskView;
