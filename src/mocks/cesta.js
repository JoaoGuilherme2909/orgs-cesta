import logo from '../../assets/logo.png'
import Tomate from '../../assets/frutas/Tomate.png' 
import Abobora from '../../assets/frutas/Abóbora.png'
import Brocolis from '../../assets/frutas/Brócolis.png'
import Batata from '../../assets/frutas/Batata.png'
import Pepino from '../../assets/frutas/Pepino.png'


const cesta = {
    topo: {
        titulo: "Detalhes da cesta",
    },
    detalhes: {
        descricao: "Uma cesta com produtos selecionados cuidadozamente da fazenda direto para sua cozinha",
        nome: "Cesta de verduras",
        preco: "40,00",
        moeda: "R$",
        nomeFazenda: "Jenny Jack Farm",
        ImagemFazenda: logo,
        botao: "comprar",
    },
    itens: {
        titulo: "Itens da cesta",
        lista: [
            {
                nome: "tomate",
                imagem: Tomate,
            },
            {
                nome: "Batata",
                imagem: Batata,
            },
            {
                nome: "Brócolis",
                imagem: Brocolis,
            },
            {
                nome: "Abóbora",
                imagem: Abobora,
            },
            {
                nome: "Pepino",
                imagem: Pepino,
            },
        ]
    }
}

export default cesta