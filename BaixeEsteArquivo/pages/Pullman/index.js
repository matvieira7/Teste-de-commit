import React, { Component } from 'react';
import { StyleSheet, Text, View, Image,FlatList, ScrollView, Linking , TouchableOpacity} from 'react-native';
import { useFonts, LilitaOne_400Regular } from '@expo-google-fonts/lilita-one';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { useNavigation } from '@react-navigation/native';



export default function App() {
  const nav = useNavigation();

  const handlePress = () => {
    Linking.openURL('https://maps.app.goo.gl/LG47xpfjQcQeafL87');
  };


  const [fonteLoaded] = useFonts({
    LilitaOne_400Regular
  });


  if (!fonteLoaded) {
    return null;
  }



  return (
    <View style={styles.container}>
      <ScrollView  contentContainerStyle={styles.scrollViewContainer} showsVerticalScrollIndicator={false} >
        <br></br>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
       

        <TouchableOpacity onPress={() => nav.goBack()}>
            <MaterialIcons name='arrow-back-ios' size={20} color='#925000' />
          </TouchableOpacity>


          <Text style={styles.titu} >Pullman Guarulhos </Text>
        </View>
        <Image
          style={styles.imgdecapa} source={require('../../src/img/pullman.jpg')} />

        <Text style={styles.corpo}>
        Aceita gatos, Acesso às áreas sociais, Área para tomar café da manhã, Petisco de boas-vindas, Gramado, Cachorródromo fechado, Kit pet, diplomado pela Universidade Pet Friendly.
        </Text>

        <Text style={styles.bold}></Text>
        <br></br>
        <View style={styles.linha}></View>


        <View style={{ flexDirection: 'row', justifyContent: 'center', width: '80%', }}>

          <Text style={styles.filt}> Hotel </Text>
          <Text style={styles.filt}> Espaço ao Ar Livre </Text>
   
        </View>

        <View style={styles.linha}></View>
                <br></br>
                <Text style={styles.titu} >Onde encontrá-lo?</Text>

        <TouchableOpacity onPress={handlePress}>
        <Image  style={{ width: 300, height: 200, borderRadius: 20, margin: 20, }}
          source={require('../../src/img/map.png')}
         
        />
      </TouchableOpacity>




        <View style={styles.linha}></View>
        {/* ------------------------------- COMENTARIOS --------------------------------------------------------------------------------------------     */}
        <Text style={styles.titu} >O que outras pessoas acham desse lugar</Text>
        <br></br>



        <View style={{ flexDirection: 'row', backgroundColor: '#eed0a8', alignItems: 'center', width: '94%', borderRadius: 15 }}>

          <Image
            style={{ width: 60, height: 60, margin: 10, borderRadius: 15 }} source={require('../../src/img/novotel.jpg')} />

          <View style={{ flexDirection: 'column' }}>
            <br></br>
            <Text style={{ fontSize: 16, color: '#925000', fontFamily: 'LilitaOne_400Regular', marginBottom: 2 }}> Silvia Cruz </Text>

            <Text style={{ maxWidth: '50%' }}> A comida é excelente, o quarto, a limpeza e o fato de ser pet friendly </Text>
            <br></br>
          </View>

        </View>

        <br></br>

        <View style={{ flexDirection: 'row', backgroundColor: '#eed0a8', alignItems: 'center', width: '94%', borderRadius: 15 }}>

          <Image
            style={{ width: 60, height: 60, margin: 10, borderRadius: 15 }} source={require('../../src/img/novotel.jpg')} />

          <View style={{ flexDirection: 'column' }}>
            <br></br>
            <Text style={{ fontSize: 16, color: '#925000', fontFamily: 'LilitaOne_400Regular', marginBottom: 2 }}> Carlos Tomaz </Text>

            <Text style={{ maxWidth: 200, }}>  O espaço pet é excelente. Meu pet adorou a varanda com a vista que tínhamos do quarto </Text>
            <br></br>
          </View>

        </View>



        <Text style={{ margin: 15, borderRadius: 15, padding: 15, backgroundColor: '#dfc29b', maxWidth: '100%', alignItems: 'center', textAlign: 'center', color: '#925000', fontFamily: 'LilitaOne_400Regular' }}> Adicionar um Comentário </Text>
        {/* --------------------------------------------------------------------------------------------------------------------------------------------     */}


        <View style={styles.linha}></View>
        <br></br>

        <Text style={styles.titu}> Não era o que procurava? </Text>
        <Text style={styles.titu2}> Confira outros locais </Text>
        <br></br>
 
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>

<View style={{alignItems: 'center',  justifyContent: 'center', textAlign: 'center'}}>
<div onClick={() => nav.navigate('Periscopio')}>
<Image  style={{ width: 100, height: 80, margin: 10, borderRadius: 15 }} source={require('../../src/img/periscopio.jpg')}  />
<Text style={styles.titu2}> Praça Periscópio </Text>
<Image  style={{ width: '80%', height: 20, margin: 10}} source={require('../../src/img/star.jpg')} />
</div>
</View>
<div onClick={() => nav.navigate('Basilico')}>

<View style={{alignItems: 'center',justifyContent: 'center', textAlign: 'center'}}>
<Image  style={{ width: 100, height: 80, margin: 10, borderRadius: 15 }} source={require('../../src/img/basilico.jpg')} />
<Text style={styles.titu2}> Seo Basílico </Text>
<Image  style={{ width: '80%', height: 20, margin: 10}} source={require('../../src/img/star.jpg')} />
</View>
</div>
</View>
<View style={{ flexDirection: 'row'}}>

<View style={{alignItems: 'center',justifyContent: 'center', textAlign: 'center'}}>
<div onClick={() => nav.navigate('Maia')}>
<Image  style={{ width: 100, height: 80, margin: 10, borderRadius: 15 }} source={require('../../src/img/maia.jpg')}  />
<Text style={styles.titu2}> Pet Park</Text>
<Image  style={{ width: '80%', height: 20, margin: 10}} source={require('../../src/img/star.jpg')} />
</div>
</View>
<div onClick={() => nav.navigate('Mooca')}>
<View style={{alignItems: 'center',justifyContent: 'center', textAlign: 'center'}}>
<Image  style={{ width: 100, height: 80, margin: 10, borderRadius: 15 }} source={require('../../src/img/mooca.jpg')} />
<Text style={styles.titu2}> Mooca </Text>
<Image  style={{ width: '80%', height: 20, margin: 10}} source={require('../../src/img/star.jpg')} />
</View>
</div>
</View>

<View style={{ flexDirection: 'row'}}>

<View style={{alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
<div onClick={() => nav.navigate('Novotel')}>
<Image  style={{ width: 100, height: 80, margin: 10, borderRadius: 15 }} source={require('../../src/img/novotel.jpg')}  />
<Text style={styles.titu2}> Novotel Itu </Text>
<Image  style={{ width: '80%', height: 20, margin: 10}} source={require('../../src/img/star.jpg')} />
</div>
</View>
<div onClick={() => nav.navigate('Pullman')}>
<View style={{alignItems: 'center',justifyContent: 'center', textAlign: 'center'}}>
<Image  style={{ width: 100, height: 80, margin: 10, borderRadius: 15 }} source={require('../../src/img/pullman.jpg')} />
<Text style={styles.titu2}> Pullman </Text>
<Image  style={{ width: '80%', height: 20, margin: 10}} source={require('../../src/img/star.jpg')} />
</View>
</div>
</View>





        </ScrollView>



    </View>
  );
}

const styles = StyleSheet.create({

  card:{
    padding: 10,
    backgroundColor: '#dfc29b',
    borderRadius: 15,
    margin: 10,
  
  },

  container: {
    backgroundColor: '#fff6ea',
   flex: 1


  },

  scrollViewContainer: {
    alignItems: 'center',
    padding: 20,
  },

  titu: {
    textAlign: 'center',
    width: '70%',
    fontSize: 20,
    color: '#925000',
    fontFamily: 'LilitaOne_400Regular',
  },
  titu2: {
    textAlign: 'center',
    width: '70%',
    fontSize: 16,
    color: '#925000',
    fontFamily: 'LilitaOne_400Regular',
  },

  corpo: {
    fontSize: 12,
    maxWidth: '70%',
    textAlign: 'center',
    justifyContent: 'center',

  },

  filt: {
    backgroundColor: '#eed0a8',
    borderRadius: 15,
    padding: 6,
    fontSize: 12,
    color: '#000000',


  },

  imgdecapa: {
    maxWidth: '80%',

    height: 200,
    borderRadius: 20,
    margin: 30,
  },

  linha: {
    width: '60%',
    height: 2,
    backgroundColor: '#925000',
    margin: 10,
  },

  coment: {
    width: '80%',
    backgroundColor: '#eed0a8',

  },


});
