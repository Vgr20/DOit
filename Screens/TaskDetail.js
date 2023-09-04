import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import client from "../api/client";

const TaskDetail = ({ route }) => {
  const [tasks, setTasks] = useState([]);

  const fetchData = async () => {
    const response = await client.post("/api/TasksRoute");
    const data = await response.data;
    setTasks(data.response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const { item } = route.params;
  // const [taskDetails, setTaskDetails] = useState([]);
  const [taskVisibility, setTaskVisibility] = useState({
    task1: true,
    task2: true,
    task3: true,
  });
  // Function to format a date as a string (e.g., "MM/DD/YYYY")
  const formatDate = (date) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(date).toLocaleDateString(undefined, options);
  };
  const toggleTaskVisibility = (taskKey) => {
    setTaskVisibility((prevVisibility) => ({
      ...prevVisibility,
      [taskKey]: !prevVisibility[taskKey],
    }));
  };
  // const scheduledTasks = tasks.map((task) => (
  //     taskName = {task.taskName}
  // ))
  return (
    <ScrollView style={styles.container}>
      <View style={styles.item}>
        {tasks.map((task, index) => {
          return (
            <TouchableOpacity style={styles.box} key={index}>
              <View style={styles.taskDetails}>
                <Text style={styles.taskTitle}>{task.taskName}</Text>
                <Text style={styles.taskInfo}>Priority: {task.priority}</Text>
                <Text style={styles.taskInfo}>
                  Deadline: {formatDate(task.endDate)}
                </Text>
                <Text style={styles.taskInfo}>
                  Start: {formatDate(task.startDate)}
                </Text>
                <Text style={styles.taskInfo}>
                  End: {formatDate(task.endDate)}
                </Text>
                <Text style={styles.taskInfo}>
                  Created Date: {formatDate(task.createdAt)}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.noteDelete}
                onPress={() =>
                  Alert.alert(
                    "Delete Task",
                    "Are you sure you want to delete?",
                    [
                      {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel",
                      },
                      {
                        text: "OK",
                        onPress: () => {
                          toggleTaskVisibility("task1");
                        },
                      },
                    ]
                  )
                }
              >
                <Icon name="trash" style={styles.trashIcon}></Icon>
              </TouchableOpacity>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#a9c0c0",
    marginBottom: 20,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 10, // Android shadow
  },
  noteDelete: {
    alignContent: "space-around",
    padding: 10,
  },
  trashIconContainer: {
    marginTop: "auto",
  },
  trashIcon: {
    fontSize: 40,
    color: "black",
    alignItems: "flex-end",
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
    marginVertical: 10,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 30,
    color: "white",
  },
  titlesmall: {
    fontSize: 15,
    color: "white",
  },
  headertitle: {
    height: "10%",
    backgroundColor: "black",
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
    padding: 15,
    marginBottom: 20,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 3,
    width: "45%",
  },
  taskTitle: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
    color: "black",
    width: "150%",
  },
  taskInfo: {
    width: "220%",
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderRadius: 5,
    elevation: 15,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginBottom: 6,
    color: "white",
  },
});

export default TaskDetail;
