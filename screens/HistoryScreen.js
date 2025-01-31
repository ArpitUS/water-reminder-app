import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const HistoryScreen = () => {
  const [history, setHistory] = useState([
    { id: '1', date: '2025-01-30', intake: '2L' },
    { id: '2', date: '2025-01-29', intake: '1.5L' },
    { id: '3', date: '2025-01-28', intake: '2.2L' },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Water Intake History</Text>
      <FlatList
        data={history}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.historyItem}>
            <Text style={styles.date}>{item.date}</Text>
            <Text style={styles.intake}>{item.intake}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  date: {
    fontSize: 16,
  },
  intake: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HistoryScreen;
