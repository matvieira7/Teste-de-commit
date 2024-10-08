import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useFonts, LilitaOne_400Regular } from '@expo-google-fonts/lilita-one';
import { StyleSheet, Text, View, TextInput, Pressable, ImageBackground, TouchableOpacity } from 'react-native';



const Login = () => {

    const [fontLoaded] = useFonts({
        LilitaOne_400Regular,
    });

    if (!fontLoaded) {
        return null;
    }

    const nav = useNavigation();

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../src/img/fundo.png')} style={styles.imagem}>
                <Text style={styles.texto}>LOGIN</Text>
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
                <TouchableOpacity onPress={() => nav.navigate('Cadastro')} >
                    <Text style={styles.texto2}>Não possui regristro?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => nav.navigate('Home')} >
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>

                <Pressable>
                    <Text style={styles.texto2}>Esqueci a Senha</Text>
                </Pressable>
            </ImageBackground>
        </View>
    );
}

export default Login;

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
        fontFamily: 'LilitaOne_400Regular',

    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'LilitaOne_400Regular',
    },
});
