import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SettingsScreen = () => {
  const [weight, setWeight] = useState('');
  const [goal, setGoal] = useState('');

  useEffect(() => {
    loadGoal();
  }, []);

  const calculateGoal = async () => {
    if (weight) {
      const calculatedGoal = (parseFloat(weight) * 35) / 1000; // 35ml per kg
      const goalValue = calculatedGoal.toFixed(2) + 'L';
      setGoal(goalValue);
      await AsyncStorage.setItem('waterGoal', goalValue);
    }
  };

  const loadGoal = async () => {
    const savedGoal = await AsyncStorage.getItem('waterGoal');
    if (savedGoal) setGoal(savedGoal);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Set Your Daily Water Goal</Text>
      <Text>Enter your weight (kg):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
        placeholder="Weight in kg"
      />
      <Button title="Calculate Goal" onPress={calculateGoal} />
      {goal ? <Text style={styles.goalText}>Recommended Intake: {goal}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  goalText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SettingsScreen;
