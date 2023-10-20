import { StyleSheet, TouchableOpacity } from "react-native"
import Texto from "../../../components/Text"

export default function Botao({onPress, children, style}){
    return <>
        <TouchableOpacity style={[estilos.Botao, style]} onPress={onPress}>
            <Texto style={[estilos.textoBotao, style]}>{children}</Texto>
        </TouchableOpacity>
    </>  
}

const estilos = StyleSheet.create({
    textoBotao: {
        color: "white",
        textAlign: 'center',
        fontSize: 16,
        fontFamily: "MontserratBold",   
    }
})