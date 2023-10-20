import Topo from "./components/topo";
import Detalhes from "./components/detalhes";
import { StyleSheet, View } from "react-native";

export default function Cesta({ topo, detalhes }) {
    return <>
        <Topo {...topo} />
        <View style={estilos.tela}>
            <Detalhes {...detalhes} />
        </View>
    </>
}

const estilos = StyleSheet.create({
    tela:{
        paddingVertical: 8,
        paddingHorizontal: 16
    },
})