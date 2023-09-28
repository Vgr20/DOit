import React, { useEffect, useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, Image, FlatList, View , TouchableOpacity} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SubButton22 from "../Components/SubButton22";
import * as Font from "expo-font";
import Icon from "react-native-vector-icons/FontAwesome";

const PastReflections = (poses) => {
  const [reflections, setReflections] = useState([]);

  useEffect(() => {
    // Retrieve the saved reflections from local storage
    const loadReflections = async () => {
      try {
        const storedReflections = await AsyncStorage.getItem("reflections");
        if (storedReflections) {
          setReflections(JSON.parse(storedReflections));
        }
      } catch (error) {
        console.error("Error loading reflections from local storage: ", error);
      }
    };

    loadReflections();
  }, []);

  const deleteReflection = async (index) => {
    try {
      const updatedReflections = [...reflections];
      updatedReflections.splice(index, 1); // Remove the reflection at the specified index
      await AsyncStorage.setItem("reflections", JSON.stringify(updatedReflections));
      setReflections(updatedReflections);
    } catch (error) {
      console.error("Error deleting reflection: ", error);
    }
  };

  return (
    
    <SafeAreaView style={styles.container}>

      {reflections.length > 0 ? (
        <FlatList
          data={reflections}
          keyExtractor={(item, index) => index.toString()}
          style = {styles.item}
          ListHeaderComponent={()=>(
            <>
            <View style = {styles.container}>
              <Text style={{fontSize: 55,color: "white",fontWeight: "bold",marginVertical: 10,top: 10,}}>
                Past Reflections...
              </Text>
              <Image
                source={require("../assets/undraw_idea.png")}
                style={{ width: 300, height: 250, position: "relative", top: 20 }}
              />
            </View>
            </>
          )}
          renderItem={({ item , index}) => (
              <View style = {{backgroundColor: "#162626", borderRadius: 15, padding:10, marginBottom:10,width:380,height:100, justifyContent:'center'}}>
                <View style={{flexDirection:'row',alignItems:"center",justifyContent:'space-between'}}>
                <View>
                  <Text style={styles.text3}>{item.text}</Text>
                  <Text style={styles.text4}>{item.date} at {item.time}</Text>
                  {/* <Text style={styles.text4}>{item.time}</Text> */}
                </View>
                <View>
                  <TouchableOpacity onPress={() => deleteReflection(index)}>
                    <Icon name="trash" color="black" size={40} padding={5}/>
                  </TouchableOpacity>
                </View>
                </View>
              </View>
          )}
          ListFooterComponent={(
            <>
              <SubButton22
                text="Productivity Pulse"
                onPress={() => poses.navigation.navigate("StatsScreen")}
              />

              <SubButton22
                text="Dashboard"
                onPress={() => poses.navigation.navigate("HomeScreen")}
              />
            </>
          )}
        />
      ) : (
        <View style = {styles.container}>
          <Text style={{fontSize: 55,color: "white",fontWeight: "bold",marginVertical: 10,top: 10,}}>
            Past Reflections...
          </Text>
          <Image
            source={require("../assets/undraw_idea.png")}
            style={{ width: 300, height: 250, position: "relative", top: 20 }}
          />
          <View style = {{backgroundColor: "#162626", borderRadius: 15, padding:10, marginBottom:10,width:380,height:100, justifyContent:'center'}}>
            <Text style={styles.text3}>Nothing to Show...</Text>
            <Text style={styles.text4}>Create Today !</Text>
          </View>
          <SubButton22 style={{justifyContent:'flex-end'}}
            text="Productivity Pulse"
            onPress={() => poses.navigation.navigate("StatsScreen")}
          />

          <SubButton22
            text="Dashboard"
            onPress={() => poses.navigation.navigate("HomeScreen")}
          />
        </View>
      )}

      
    </SafeAreaView>
   
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#2f4f4f",
    alignItems: "center",
    alignContent: "center",
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    marginVertical: 5,
    color: "#EAEAEA",
    alignContent: "center",
    paddingTop: 150,
  },
  text2: {
    fontSize: 25,
    fontWeight: "normal",
    marginVertical: 40,
    color: "#EAEAEA",
    top: 10,
    alignContent: "center",
  },
  text3: {
    padding:4,
    fontSize: 25,
    fontWeight: "normal",
    color: "#EAEAEA",
    top: 10,
    alignContent: "center",
  },
  text4: {
    padding:4,
    fontSize: 15,
    fontWeight: "normal",
    color: "#EAEAEA",
    top: 10,
    alignContent: "center",
  },
});

export default PastReflections;
