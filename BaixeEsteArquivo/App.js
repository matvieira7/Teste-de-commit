import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts, LilitaOne_400Regular } from '@expo-google-fonts/lilita-one';


import SplashScreen from './pages/Splash';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';

import Periscopio from './pages/Periscopio';
import Basilico from './pages/Basilico';
import Maia from './pages/Maia';
import Mooca from './pages/Mooca';
import Novotel from './pages/Novotel';
import Pullman from './pages/Pullman';

import ChicoMendes from './pages/ChicoMendes';
import Iguatemi from './pages/Iguatemi';
import Raya from './pages/Raya';
import Novembro from './pages/Novembro';
import Campos from './pages/Campos';
import NovotelCampos from './pages/NovotelCampos';

import DomPedro from './pages/DomPedro';
import Cambui from './pages/Cambui';
import JoseMenino from './pages/JoseMenino';
import Tahiti from './pages/Tahiti';

import Perfil from './pages/Perfil';

import Restaurantes from './pages/Restaurantes';
import PetShop from './pages/PetShop';

import { View, Text } from 'react-native';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();



function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false }}>
            <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Periscopio" component={Periscopio} />
            <Stack.Screen name="Basilico" component={Basilico} />
            <Stack.Screen name="Maia" component={Maia} />
            <Stack.Screen name="Mooca" component={Mooca} />
            <Stack.Screen name="Novotel" component={Novotel} />
            <Stack.Screen name="Pullman" component={Pullman} />
            <Stack.Screen name="ChicoMendes" component={ChicoMendes} />
            <Stack.Screen name="Iguatemi" component={Iguatemi} />
            <Stack.Screen name="Raya" component={Raya} />
            <Stack.Screen name="Novembro" component={Novembro} />
            <Stack.Screen name="Campos" component={Campos} />
            <Stack.Screen name="NovotelCampos" component={NovotelCampos} />
            <Stack.Screen name="DomPedro" component={DomPedro} />
            <Stack.Screen name="Cambui" component={Cambui} />
            <Stack.Screen name="JoseMenino" component={JoseMenino} />
            <Stack.Screen name="Tahiti" component={Tahiti} />
            <Stack.Screen name="Perfil" component={Perfil} />
            <Stack.Screen name="Restaurantes" component={Restaurantes} />
            <Stack.Screen name="PetShop" component={PetShop} />
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="Login"
                screenOptions={{
                    drawerStyle: {
                        backgroundColor: '#fff6ea',
                    },
                    drawerActiveTintColor: '#925000',
                    drawerInactiveTintColor: '#925000',
                    headerTintColor: '#925000',
                    headerTitle: (props) => <Text style={{ fontFamily: 'LilitaOne_400Regular', color: '#925000', fontSize: 24 }}>PONTO.PET</Text>,

                }}
            >
                <Drawer.Screen name="PONTO.PET" component={StackNavigator} options={{ drawerItemStyle: { display: 'none' } }} />

                <Drawer.Screen
                    name="Destino"
                    component={() => null}
                    options={{
                        drawerLabel: () => <Text style={{ fontFamily: 'LilitaOne_400Regular', color: '#925000', fontSize: 20, padding: 10, }}>Destino</Text>,


                    }}
                />


                <Drawer.Screen
                    name="Restaurantes" component={Restaurantes} />
                <Drawer.Screen
                    name="Pet Shop" component={PetShop} />



                <Drawer.Screen name="Home" component={Home} options={{
                    drawerLabel: () => (
                        <Text style={{ fontFamily: 'LilitaOne_400Regular', color: '#925000', fontSize: 20, }}>
                            Home</Text>

                    )
                }} />


                <Drawer.Screen name="Perfil" component={Perfil} options={{
                    drawerLabel: () =>

                        <Text style={{ fontFamily: 'LilitaOne_400Regular', color: '#925000', fontSize: 20 }} >
                            Perfil</Text>

                }} />


                <Drawer.Screen name="Sair" component={Login} options={{
                    drawerLabel: () => (
                        <Text style={{ color: '#925000', fontSize: 15 }}>
                            Sair</Text>

                    )
                }} />

            </Drawer.Navigator>
        </NavigationContainer>
    );
}
