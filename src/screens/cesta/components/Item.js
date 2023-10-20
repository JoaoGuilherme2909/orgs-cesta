import Texto from "../../../components/Text";
import {Image, StyleSheet, View } from "react-native";

export default function Item({ item: { nome, imagem} }){
    return <View style={estilos.item} key={nome}>
        <Image source={imagem} style={estilos.imagem} />
        <Texto style={estilos.nome}>{nome}</Texto>
    </View>
}

const estilos = StyleSheet.create({
    item:{
        flexDirection: "row",
        borderBottomWidth: 1,
        marginHorizontal: 16,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        alignItems: "center",
        gap: 6
    },
    imagem: {
        width: 46,
        height: 46,
    },
    nome:{
        fontSize: 16,
        lineHeight: 26,
        color: "#464646"
    }
})