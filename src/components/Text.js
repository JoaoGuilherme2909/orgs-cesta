import { StyleSheet } from "react-native"
import { Text } from "react-native"

export default function Texto({ children, style }){
    let estilo = estilos.Texto

    if (style?.fontWeight === 'bold') {
        estilo = estilos.TextoNegrito 
    }

    return <Text style={[estilo, style]}> { children } </Text>
}

const estilos = StyleSheet.create({
    Texto: {
        fontFamily: "MontserratRegular"
    },
    TextoNegrito: {
        fontWeight: "normal",
        fontFamily: "MontserratBold",
    }
})