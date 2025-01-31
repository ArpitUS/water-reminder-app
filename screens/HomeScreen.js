import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ProgressBarAndroid } from 'react-native';

const HomeScreen = () => {
  const [hydrationLevel, setHydrationLevel] = useState(0);
  const [streak, setStreak] = useState(0);

  const addWater = () => {
    if (hydrationLevel < 1) {
      setHydrationLevel(hydrationLevel + 0.1);
      if (hydrationLevel + 0.1 >= 1) {
        setStreak(streak + 1); // Increase streak when goal is met
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hydration Meter</Text>
      <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={hydrationLevel} />
      <Text style={styles.progressText}>{Math.round(hydrationLevel * 100)}% Hydrated</Text>
      <Button title="Add Water" onPress={addWater} />
      <Text style={styles.streakText}>🔥 Streak: {streak} days</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  progressText: {
    marginTop: 10,
    fontSize: 18,
  },
  streakText: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff5733',
  },
});

export default HomeScreen;
