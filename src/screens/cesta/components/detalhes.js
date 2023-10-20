import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Texto from '../../../components/Text'
import Botao from './botao'

export default function Detalhes({ descricao, preco, moeda, ImagemFazenda, nomeFazenda, nome, botao }){
    return <>
        <Texto style={estilos.nome}>
            {nome}
        </Texto>
        <View style={estilos.fazenda}>
            <Image source={ImagemFazenda} style={estilos.logoFazenda}/>
            <Text style={estilos.nomeFazenda}>
                {nomeFazenda}
            </Text>
        </View>
        <Texto style={estilos.descricao}>
            {descricao}
        </Texto>
        <Texto style={estilos.preco}>
            {moeda} {preco}
        </Texto>

        <Botao style={estilos.botao} onPress={()=>{
            console.log("Deu")    
        }}>{botao}</Botao>    
    </>
}

const estilos = StyleSheet.create({
    nome: {
        color: "#464646",
        fontSize: 32,
        lineHeight: 42,
        fontWeight: "bold",
    },
    fazenda:{
        flexDirection: "row",
        paddingTop: 8,
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,     
        color: "#636363",
        marginLeft: "2%",
        fontFamily: "MontserratRegular"
    },
    descricao: {
        marginTop: "5%",
        fontSize: 20,
        lineHeight: 26,
        color: "#919191",
    },
    preco: {
        marginTop: 8,
        color: "#4F987B",
        fontSize: 32,
        lineHeight: 42,
        fontWeight: "700",
    },
    logoFazenda: {
        width: 32,
        height: 32
    },
    botao: {
        marginTop: 16,
        backgroundColor: "#4F987B",
        paddingVertical: 8,
        borderRadius: 6
    },
    textoBotao: {
        color: "white",
        textAlign: "center",
        fontSize: 16,
        fontFamily: "MontserratBold",
        lineHeight: 26   
    }
})
