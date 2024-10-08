import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useFonts, LilitaOne_400Regular } from '@expo-google-fonts/lilita-one';
import { StyleSheet, Text, View, Button, TextInput, Pressable, ImageBackground, TouchableOpacity } from 'react-native';

const imgbg1 = ('../../src/img/fundo.jpg');

export default function Cadastro() {

    const [fontsLoaded] = useFonts({
        LilitaOne_400Regular,
    });

    if (!fontsLoaded) {
        return null;
    }

    const nav = useNavigation();

    return (

        <View style={styles.container}>
            <ImageBackground source={require('../../src/img/fundo.png')} style={styles.imagem}>
                <Text style={styles.texto}>REGISTRE-SE</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    keyboardType="email-address"
                    autoComplete="email"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    autoCapitalize="none"
                    secureTextEntry
                />
                <View style={{ width: 500, height: 40 }}></View>


                <TouchableOpacity onPress={() => nav.navigate('Login')} >
                    <Text style={styles.texto2}>Possui Login?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => nav.navigate('Login')} >
                    <Text style={styles.buttonText}>REGISTRO</Text>
                </TouchableOpacity>

            </ImageBackground>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF6EA',
        alignItems: 'center',
        justifyContent: 'center',
    },

    imagem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',

    },

    texto: {
        color: '#925000',
        fontSize: 20,
        fontFamily: 'LilitaOne_400Regular',
    },
    texto2: {
        color: '#925000',
        fontSize: 10,
        padding: 10,
    },
    texto3: {
        color: '#ffffff',
        backgroundColor: '#925000',
        borderRadius: 40,
        fontSize: 15,
        padding: 10,
        fontFamily: 'monalisa',
    },
    input: {
        height: 45,
        width: 300,
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: '#EDB99F',
        color: '#925000',
        marginTop: 20,
        fontSize: 16,
        paddingLeft: 15,
        borderRadius: 25,
    },

    button: {
        backgroundColor: '#925000',
        padding: 15,
        borderRadius: 25,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'LilitaOne_400Regular',
    },

    image: {
        flex: 1,
    },

});
