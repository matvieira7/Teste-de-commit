import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonProps {
    title: string;
    onPress: () => void;
}

export function Button({ title, onPress }: ButtonProps) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            
            <Text style={styles.title}>{title}</Text>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 250,
        padding: 16,
        backgroundColor: 'rgb(238 208 168)',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginBottom: 40,
    },

    title: {
        color: '#925000',
        fontSize: 20,
        textAlign: 'center',
    },
});
