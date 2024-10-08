import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useFonts, LilitaOne_400Regular } from '@expo-google-fonts/lilita-one';
import { Button } from '../../src/Elements/Buttom';


const imageOptions = [
    'https://i.pinimg.com/564x/25/ee/de/25eedef494e9b4ce02b14990c9b5db2d.jpg',//user vazio
    'https://i.pinimg.com/564x/23/fe/a0/23fea0fa5fe841ca246e22034d3dff0e.jpg',//pug
    'https://i.pinimg.com/564x/63/eb/d6/63ebd6aaf968e4445d37d5b7439d1c69.jpg',//gato vai fle
    'https://i.pinimg.com/564x/31/93/83/31938305b24fa831e67eb3369e14cbc8.jpg',//husk
    'https://i.pinimg.com/564x/6b/53/fa/6b53fad3d158acf7745fa2067f823820.jpg',// coelho
    'https://i.pinimg.com/564x/e3/db/00/e3db00210cfd85cf935a04831af3a1bc.jpg',// Lhasa apso
    'https://i.pinimg.com/736x/33/cd/10/33cd103f4bf670524c9203e4223af44d.jpg',//gato cinza claro
    'https://i.pinimg.com/564x/2d/15/80/2d1580f4c473efbdfa68fb6134ae60c4.jpg',//gato preto
    'https://i.pinimg.com/564x/74/e0/c0/74e0c0f163c1227ade246497020b9414.jpg',//gato laranja
    'https://i.pinimg.com/564x/7e/b4/ea/7eb4ea85cb8320a978edc38488cdf4e3.jpg',//hamster
    'https://i.pinimg.com/564x/ba/38/a3/ba38a302f078b32c312b7348bdb76fa8.jpg', //cachorro lindo
    'https://i.pinimg.com/564x/06/a7/33/06a733476026dff5316cdf9d0442258b.jpg',//labrador
];

export default function App() {
    const [fonteLoaded] = useFonts({
        LilitaOne_400Regular,
    });

    const [editing, setEditing] = useState(false);
    const [selectedImage, setSelectedImage] = useState(imageOptions[0]);
    const [tempImage, setTempImage] = useState(null);

    if (!fonteLoaded) {
        return null;
    }

    const toggleEditing = () => {
        setEditing(!editing);
    };

    const handleImageSelect = (imageUri) => {
        setTempImage(imageUri);

    };

    const handleSave = () => {
        if (tempImage) {
            setSelectedImage(tempImage);
        }
        toggleEditing();
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Feather
                    style={styles.icon}
                    name="chevron-left"
                    size={50}
                    color="rgb(134 74 35)"
                />

                {editing ? (
                    // Alterações de informações
                    <View style={styles.editContainer}>
                        <Text style={styles.tituloforms}>ALTERAR INFORMAÇÕES</Text>
                        <Text style={styles.text4}>ESCOLHA UMA IMAGEM</Text>

                        <View style={styles.imageContainer}>
                            {imageOptions.map((uri, index) => (
                                <TouchableOpacity key={index} onPress={() => handleImageSelect(uri)}>
                                    <Image
                                        source={{ uri }}
                                        style={[
                                            styles.optionImage,
                                            uri === tempImage && styles.selectedOptionImage
                                        ]}
                                    />
                                </TouchableOpacity>
                            ))}
                        </View>

                        <TextInput
                            style={styles.input}
                            placeholder="Nome"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                        />
                        <Text style={styles.line}>_______________ </Text>
                        <Button title="Salvar" onPress={handleSave} />
                        <Button style={styles.btnforms} title="Cancelar" onPress={toggleEditing} />
                    </View>
                ) : (
                    // Conteúdo visível para todos
                    <View style={styles.container2}>
                        <Image source={{ uri: selectedImage }} style={styles.img} />
                        <Text style={styles.text}>Nome Usuário</Text>
                        <Text style={styles.text2}>emailuser@gmail.com</Text>
                        <Text style={styles.line}>_______________ </Text>
                        <Button title="Alterar Informações" onPress={toggleEditing} />
                        <Text style={styles.text3}>Seus Comentários:</Text>
                        <View style={styles.card}>
                            <View style={styles.cardimg}>
                                <Image source={{ uri: selectedImage }} style={styles.imgcom} />
                            </View>
                            <View style={styles.cardnomeusuecom}>
                                <Text style={styles.nome}>Nome Usuário</Text>
                                <Text style={styles.comentario}>A comida é excelente, o quarto, a limpeza e o fato de ser pet friendly torna tudo melhor.</Text>
                            </View>
                        </View>
                        <Text style={styles.line2}>_______________ </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        flexDirection: 'column',
        backgroundColor: '#fff6ea',
        paddingTop: 30,
    },

    container2: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },

    icon: {
        marginLeft: 2,
        marginTop: 10,
    },

    img: {
        marginTop: 40,
        height: 150,
        width: 200,
        borderRadius: 5,
        borderWidth: 3,
        borderColor: 'rgb(134 74 35)',
        padding: 5,
    },

    text: {
        fontSize: 20,
        marginTop: 10,
        marginLeft: 10,
        color: '#864a23',
        fontFamily: 'LilitaOne_400Regular',
    },

    text3: {
        fontSize: 20,
        marginTop: -18,
        marginLeft: 10,
        color: '#864a23',
        fontFamily: 'LilitaOne_400Regular',
    },

    nome: {
        fontSize: 20,
        marginLeft: 10,
        color: '#864a23',
        fontFamily: 'LilitaOne_400Regular',
    },

    text2: {
        fontSize: 10,
        marginTop: 5,
        color: '#edb99f',
    },

    line: {
        fontSize: 40,
        color: '#edb99f',
        marginBottom: 20,
        marginTop: -24,
    },

    line2: {
        fontSize: 40,
        color: '#edb99f',
        marginBottom: 200,
        marginTop: -24,
    },

    card: {
        backgroundColor: 'rgb(238 208 168)',
        width: 290,
        height: 'auto',
        marginBottom: 20,
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
    },

    cardimg: {
        maxWidth: 80,
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
    },

    imgcom: {
        height: 80,
        width: 80,
        borderRadius: 16,
        borderWidth: 3,
        borderColor: 'rgb(134 74 35)',
        padding: 5,
    },

    comentario: {
        maxWidth: 180,
        marginLeft: 10,
    },

    // Style Forms

    editContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

    input: {
        height: 40,
        backgroundColor: '#eed0a8',
        borderRadius: 10,
        color: '#925000',
        marginBottom: 20,
        width: '100%',
        paddingHorizontal: 10,

    },

    tituloforms: {
        fontSize: 25,
        marginTop: 5,
        marginBottom: 20,
        color: '#925000',
        fontWeight: 'bold',
        fontFamily: 'LilitaOne_400Regular',
    },

    imageContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: 20,
    },

    optionImage: {
        width: 60,
        height: 60,
        margin: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#ddd',
    },

    selectedOptionImage: {
        borderColor: 'rgb(134 74 35)',
        borderWidth: 3,
    },

    text4: {
        fontSize: 20,
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 20,
        color: '#864a23',
        fontFamily: 'LilitaOne_400Regular',
    },
});
