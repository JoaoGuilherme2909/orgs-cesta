import Topo from "./components/topo";
import Detalhes from "./components/detalhes";
import { StyleSheet, View, FlatList} from "react-native";
import Item from "./components/Item"
import Texto from "../../components/Text";

export default function Cesta({ topo, detalhes, itens }) {
    return <>
        <FlatList 
            data={itens.lista} 
            renderItem={Item} 
            keyExtractor={({ nome }) => nome }
            ListHeaderComponent={() => {
                return <>
                    <Topo {...topo} />
                    <View style={estilos.tela}>
                        <Detalhes {...detalhes} />
                        <Texto style={estilos.titulo}>{ itens.titulo }</Texto>
                    </View>
                </>
            }} 
        />
    </>
}

const estilos = StyleSheet.create({
    titulo:{
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
    },
    tela:{
        paddingVertical: 8,
        paddingHorizontal: 16
    },
})