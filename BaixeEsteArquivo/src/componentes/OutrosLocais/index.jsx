import React from 'react';
import { StyleSheet, Text, View , FlatList, Image} from 'react-native';


const styles = StyleSheet.create({
    Container:{
      flex: 1
    },
   
    areaDados: {
      backgroundColor: '#eed0a8',
      margin: 10,
      flexDirection: 'column',
      alignItems: 'center'
   
    },
   
    textoDados: {
      color:'#fff',
      fontSize: 20,
    
    },
  });

function OutrosLocais() {


    const listaLocais = [
        {id: '1', nome: 'xxxxxx', idade:21, email: 'xxxxxx@etec.sp.gov.br', image: require('../../img/basilico.jpg')},
        {id: '2', nome: 'xxxxxx', idade:12, email: 'xxxxxx@etec.sp.gov.br', image: require('../../img/basilico.jpg')},
        {id: '3', nome: 'xxxxxx', idade:23, email: 'xxxxxx@etec.sp.gov.br', image: require('../../img/basilico.jpg')},
        {id: '4', nome: 'xxxxxx', idade:78, email: 'xxxxxx@etec.sp.gov.br', image: require('../../img/basilico.jpg')},
    ];


    function Dados({ data }) {
        const { id, nome, idade, email, image } = data;
        return(
            <View style={styles.areaDados} >
                <Image source={image} style={{ borderRadius: 20, width: 200, height: 100, margin: 15 }} />


                <Text style={styles.textoDados}> ID:{id} </Text>
                <Text style={styles.textoDados} > Nome:{nome}</Text>
                <Text style={styles.textoDados} > Idade:{idade}</Text>
                <Text style={styles.textoDados} > E-mail:{email} </Text>
            </View>
        );
    }

    return <FlatList 
    
        //os dois abaxo são obrigatórios :
        data={listaLocais}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Dados data={item}/> }
        style={{ height:500 }}
    />   
}

export { OutrosLocais };

