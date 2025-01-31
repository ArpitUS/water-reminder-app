import React, { useState } from 'react';
import { View, Text, StyleSheet, ProgressBarAndroid, Button } from 'react-native';

const HomeScreen = () => {
    const [hydrationLevel, setHydrationLevel] = useState(0);

    const addWater = () => {
    if (hydrationLevel < 1) {
        setHydrationLevel(hydrationLevel + 0.1);
    }
};

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hydration Meter</Text>
            <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={hydrationLevel} />
            <Text style={styles.progressText}>{Math.round(hydrationLevel * 100)}% Hydrated</Text>
            <Button title="Add Water" onPress={addWater} />
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
});

export default HomeScreen;