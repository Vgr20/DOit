import React from "react";
import { Button, SafeAreaView, StyleSheet, Text} from "react-native";
import SubButton3 from "../Components/SubButton3";
import SubButton2 from "../Components/SubButton2";

const passerror = (poses) => {
    return (
        <SafeAreaView style={styles.container}>
        <Text style={styles.text}>SORRY !!</Text>
        <Text style={styles.text2}>Your Username or Password is Wrong.</Text>
        
        

        <SubButton2 
            text="Return to Sign In"
            onPress={() => poses.navigation.navigate('SignInScreen')}
            />
        
        <SubButton2 
            text="Don't have an account? Sign Up"
            onPress={() => poses.navigation.navigate('HabitScreen')}
            />


        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#2f4f4f',
        alignItems : 'center',
        alignContent : 'center',
    },
    text : {
        fontSize : 40,
        fontWeight : 'bold',
        marginVertical:5,
        color : '#EAEAEA',
        alignContent : 'center',
        paddingTop : 200,
    },
    text2 : {
        fontSize : 30,
        fontWeight : 'bold',
        marginVertical:5,
        color : '#EAEAEA',
        alignContent : 'center',
    }

});

export default passerror;