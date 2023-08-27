import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View , SafeAreaView, Image} from "react-native";
import {Picker} from '@react-native-picker/picker'
import { TextInput } from "react-native-gesture-handler";
import Slider from "@react-native-community/slider";
import SubButton2 from "../Components/SubButton2";

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            name : "",
            password : "",    
        };

    }
    
    render(){    
        return (
            <View style = {styles.container}>
                <Text style = {{
                    color : '#E1E5E5',
                    fontWeight : 'semibold',
                    fontSize : 45,
                    textAlign : 'left',
                    marginVertical : 10,
                    paddingVertical : 125,
                    marginHorizontal : 20,
                    
                }}>
                    GO... GET... ON!
                </Text>

                

                <TextInput
                placeholder="Username"
                onChangeText={(text) => this.setState({name : text})}
                onEndEditing={() => {console.log("Typed Value:", this.state.name);}}
                style={{width : 370,
                    backgroundColor : '#fff',
                    padding : 15,
                    marginBottom : 10,
                    marginHorizontal : 20,
                    marginVertical : 20,
                    borderRadius : 10}}
                />

            <TextInput
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(text) => this.setState({password : text})}
                onEndEditing={() => {console.log("Typed Value:", this.state.password);}}
                style={{width : 370,
                    backgroundColor : '#fff',
                    padding : 15,
                    marginBottom : 10,
                    marginHorizontal : 20,
                    marginVertical : 5,
                    borderRadius : 10}}
                />
                
                {/* Make this button navigate to the home screen  iff username = admin and password =*/}
                {/* <SubButton2
                text="Sign In"
                 onPress={() => this.props.navigation.navigate('HomeScreen')}
                /> */}

                <SubButton2
                text="Sign In"
                onPress={() => {
                    if (this.state.name === "admin" && this.state.password === "admin") {
                    {
                    if (this.state.name === "admin" && this.state.password === "admin") {
                    this.props.navigation.navigate('HomeScreen');
                    } else {
                    // Handle incorrect credentials, show an error message, etc.
                    this.props.navigation.navigate('PassError');
                    }
                };
                    } else {
                    // Handle incorrect credentials, show an error message, etc.
                    // Create an alert box here.
                    alert("Invalid Username or Password", "Please try again.", )

                    // this.props.navigation.navigate('PassError');
                    }
                }}
                />

                <Text style = {{
                    color : '#E1E5E5',
                    fontWeight : 'semibold',
                    fontSize : 25,
                    textAlign : 'left',
                    marginVertical : 10,
                    marginHorizontal : 20,

                }}>
                    Don't have an account?
                </Text>

                {/* Make this button navigate to the sign up screen */}

                <SubButton2
                text="Sign Up"
                onPress={() => this.props.navigation.navigate('HabitScreen')}
                />

            </View>
        );
    };

}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#2f4f4f',
        alignItems : 'center',
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

export default SignIn;
