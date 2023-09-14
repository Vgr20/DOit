import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View , SafeAreaView} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MainButton from '../Components/MainButton';
import { ScrollView } from 'react-native-gesture-handler';

const Dashboard = (poses) => {
    
    const texts = "Dashboard";
    return (
        <ScrollView>
        <SafeAreaView style={styles.container}>
            <Text style = {styles.text}>{texts}</Text>
            <MainButton 
            text="Overall Stats"
            img = {require('../assets/overallstats.png')}
            onPress={() => poses.navigation.navigate('StatsScreen')}
            />  

            <MainButton 
            text="Habits"
            img = {require('../assets/habits.png')}
            onPress={() => poses.navigation.navigate('HabitScreen')}
            />

            <MainButton 
            text="Task Scheduling"
            img = {require('../assets/scheduling.png')}
            onPress={() => poses.navigation.navigate('NavigationBarScreen')}
            />

            <MainButton 
            text="Focus Mode"
            img = {require('../assets/focused.png')}
            onPress={() => poses.navigation.navigate('FocusMode')}
            />
        </SafeAreaView>
        </ScrollView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2f4f4f',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    text: {
        fontSize: 50,
        color: 'white',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        marginVertical: 20,
    }
});

export default Dashboard;