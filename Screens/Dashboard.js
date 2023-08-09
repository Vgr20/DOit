import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View , SafeAreaView} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MainButton from '../Components/MainButton';

const Dashboard = (poses) => {
    
    const texts = "Dashboard";
    return (
        <SafeAreaView style={styles.container}>
            <Text style = {styles.text}>{texts}</Text>
            <MainButton 
            text="Overall Stats"
            onPress={() => poses.navigation.navigate('SecondScreen')}
            />  

            <MainButton 
            text="Habits"
            onPress={() => poses.navigation.navigate('FullScreen')}
            />

            <MainButton 
            text="Streaks"
            onPress={() => poses.navigation.navigate('FullScreen')}
            />

            <MainButton 
            text="Score"
            onPress={() => poses.navigation.navigate('FullScreen')}
            />
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3c4b54',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    text: {
        fontSize: 50,
        color: 'white',
        textTransform: 'uppercase',
        fontWeight: 'bold',
    }
});

export default Dashboard;