// Filename: index.js
// Combined code from all files

import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, ScrollView, View, ActivityIndicator, FlatList } from 'react-native';

const WorkoutList = () => {
    const [workouts, setWorkouts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch the workouts from a mock API or database here
        // For demonstration purposes, we're using hardcoded data
        setTimeout(() => {
            setWorkouts([
                { id: '1', name: 'Push-Ups', sets: 3, reps: 15 },
                { id: '2', name: 'Squats', sets: 3, reps: 20 },
                { id: '3', name: 'Burpees', sets: 3, reps: 10 },
                { id: '4', name: 'Sit-Ups', sets: 3, reps: 25 },
                { id: '5', name: 'Lunges', sets: 3, reps: 15 },
            ]);
            setLoading(false);
        }, 2000);
    }, []);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    const renderItem = ({ item }) => (
        <View style={styles.workoutItem}>
            <Text style={styles.workoutName}>{item.name}</Text>
            <Text style={styles.workoutDetails}>Sets: {item.sets} | Reps: {item.reps}</Text>
        </View>
    );

    return (
        <FlatList
            data={workouts}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.list}
        />
    );
};

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Workout Tracker</Text>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <WorkoutList />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30, // Avoid overlapping with the status bar
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    scrollView: {
        flexGrow: 1,
    },
    list: {
        alignItems: 'center',
    },
    workoutItem: {
        backgroundColor: '#f9f9f9',
        padding: 20,
        borderRadius: 10,
        marginBottom: 10,
        width: '100%',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    },
    workoutName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    workoutDetails: {
        fontSize: 16,
        color: '#555',
    },
});

export default App;