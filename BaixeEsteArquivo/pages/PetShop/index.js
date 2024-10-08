import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { Button } from 'react-native';
import { useFonts, LilitaOne_400Regular } from '@expo-google-fonts/lilita-one';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { useNavigation } from '@react-navigation/native';



export default function Home() {
  const nav = useNavigation();


  const [fonteLoaded] = useFonts({
    LilitaOne_400Regular
  });


  if (!fonteLoaded) {
    return null;
  }


  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer} showsVerticalScrollIndicator={false} >

      <View style={styles.container}>
        <Text style={styles.texto}>Pet Shop</Text>
        <View style={styles.linha}></View>
        <TouchableOpacity onPress={() => nav.navigate('Cambui')}>
          <View style={styles.cardum}>
            <Text style={styles.cardTitle}>Petz Cambui</Text>
            <Image style={styles.cardImage} source={require('../../src/img/cambui.jpg')} />

            <Image style={styles.starsImage} source={require('../../src/img/star5.png')} />
          </View>
        </TouchableOpacity>
      </View>

   

      <View style={styles.container}>
        <TouchableOpacity onPress={() => nav.navigate('Tahiti')}>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Tahiti</Text>
            <Image style={styles.cardImage} source={require('../../src/img/tahiti.jpg')} />

            <Image style={styles.starsImage} source={require('../../src/img/star5.png')} />
          </View>
        </TouchableOpacity>
      </View>




      <View style={styles.container}>
        <TouchableOpacity onPress={() => nav.navigate('DomPedro')}>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Shopping Parque Dom Pedro</Text>
            <Image style={styles.cardImage} source={require('../../src/img/dompedro.jpg')} />

            <Image style={styles.starsImage} source={require('../../src/img/star5.png')} />
          </View>
        </TouchableOpacity>
      </View>


      <View style={styles.container}>
        <TouchableOpacity onPress={() => nav.navigate('Iguatemi')}>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Shopping Iguatemi Esplanada</Text>
            <Image style={styles.cardImage} source={require('../../src/img/iguatemi.jpg')} />

            <Image style={styles.starsImage} source={require('../../src/img/star5.png')} />
          </View>
        </TouchableOpacity>
      </View>


      <View style={styles.container}>
        <TouchableOpacity onPress={() => nav.navigate('Mooca')}>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Mooca Plaza Shopping</Text>
            <Image style={styles.cardImage} source={require('../../src/img/mooca.jpg')} />

            <Image style={styles.starsImage} source={require('../../src/img/star5.png')} />
          </View>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff6ea',

  },

  texto: {
    color: '#925000',
    fontSize: 30,
    fontFamily: 'LilitaOne_400Regular',
    marginBottom: -5,
  },
  scrollViewContainer: {
    paddingTop: 20,
    backgroundColor: '#fff6ea'
  },
  card: {
    backgroundColor: '#f8e1c3',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    width: 300,
    margin: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    top: 30,
    display: 'flex',
  },
  cardum: {
    backgroundColor: '#f8e1c3',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    width: 300,
    margin: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    marginTop: 30,
    marginBottom: 200,
    display: 'flex',
  },
  cardImage: {
    width: 280,
    height: 150,
    borderRadius: 15,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#925000',
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'LilitaOne_400Regular',
  },
  starsImage: {
    width: 150,
    height: 30,
    marginBottom: 20,
  },

});
