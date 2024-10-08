import React from "react";
import { View, Image, Text, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts, LilitaOne_400Regular } from '@expo-google-fonts/lilita-one';



const styles = StyleSheet.create({  

    titu2: {
        textAlign: 'center',
        width: '70%',
        fontSize: 16,
        color: '#925000',
        fontFamily: 'LilitaOne_400Regular',
    },
   });




function ConfiraMaisUm() {

    const nav = useNavigation();

    const [fonteLoaded] = useFonts({
        LilitaOne_400Regular
    });


    if (!fonteLoaded) {
        return null;
    }


           
    <View style={{ flexDirection: 'row'}}>
    <View style={{alignItems: 'center'}}>
<div onClick={() => nav.navigate('Periscopio')}>
<Image  style={{ width: 100, height: 80, margin: 10, borderRadius: 15 }} source={require('../../img/periscopio.jpg')}  />
<Text style={styles.titu2}> Praça do Periscópio </Text>
<Image  style={{ width: '80%', height: 20, margin: 10}} source={require('../../img/star.jpg')} />
</div>
</View>
<div onClick={() => nav.navigate('Basilico')}>
<View style={{alignItems: 'center'}}>
<Image  style={{ width: 100, height: 80, margin: 10, borderRadius: 15 }} source={require('../../img/basilico.jpg')} />
<Text style={styles.titu2}> Seo Basílico </Text>
<Image  style={{ width: '80%', height: 20, margin: 10}} source={require('../../img/star.jpg')} />
</View>
</div>
</View>
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
<View style={{ flexDirection: 'row'}}>

<View style={{alignItems: 'center'}}>
<div onClick={() => nav.navigate('Maia')}>
<Image  style={{ width: 100, height: 80, margin: 10, borderRadius: 15 }} source={require('../../img/maia.jpg')}  />
<Text style={styles.titu2}> Pet Park – Bosque <br></br>Maia </Text>
<Image  style={{ width: '80%', height: 20, margin: 10}} source={require('../../img/star.jpg')} />
</div>
</View>
<div onClick={() => nav.navigate('Mooca')}>
<View style={{alignItems: 'center'}}>
<Image  style={{ width: 100, height: 80, margin: 10, borderRadius: 15 }} source={require('../../img/mooca.jpg')} />
<Text style={styles.titu2}> Mooca Plaza Shopping </Text>
<Image  style={{ width: '80%', height: 20, margin: 10}} source={require('../../img/star.jpg')} />
</View>
</div>
</View>
{/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
<View style={{ flexDirection: 'row'}}>

<View style={{alignItems: 'center'}}>
<div onClick={() => nav.navigate('Novotel')}>
<Image  style={{ width: 100, height: 80, margin: 10, borderRadius: 15 }} source={require('../../img/novotel.jpg')}  />
<Text style={styles.titu2}> Novotel Itu Terras de <br></br>São José Golf<br></br> & Resort </Text>
<Image  style={{ width: '80%', height: 20, margin: 10}} source={require('../../img/star.jpg')} />
</div>
</View>
<div onClick={() => nav.navigate('Pullman')}>
<View style={{alignItems: 'center'}}>
<Image  style={{ width: 100, height: 80, margin: 10, borderRadius: 15 }} source={require('../../img/pullman.jpg')} />
<Text style={styles.titu2}> Pullman Guarulhos </Text>
<Image  style={{ width: '80%', height: 20, margin: 10}} source={require('../../img/star.jpg')} />
</View>
</div>
</View>






export { ConfiraMaisUm };