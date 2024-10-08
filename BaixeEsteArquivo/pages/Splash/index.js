import React, { Component } from "react";
import { View, StyleSheet, Text, Image } from "react-native";

class SplashScreen extends Component {

    componentDidMount() {

        setTimeout(() => {

        }, 5000);
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../../src/img/logo.png')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF6EA',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        color: '#925000',
        fontFamily: 'Rubik_500Medium',
    },
});

export default SplashScreen;



