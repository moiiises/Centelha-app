import { View, Text, StyleSheet, Image } from "react-native";

export default function House() {
    return(
        <View style={styles.container}>
            <Text style={styles.textoNome}>Nome do usuário</Text>
            <Text>--.--</Text>
            <Text style={styles.textoSecundario}>Modelo do veiculo</Text>
            <View style={styles.caixaCarro}>
                <Text>marca X</Text>
                <Text>modelo Y</Text>
                <Text>2020</Text>
            </View>
            <Text style={styles.textoSecundario}>Conector</Text>
            <Text>Tipo 2</Text>
            <Text style={styles.textoHistorico}>Histórico de recarga</Text>
            <View style={styles.caixaHistorico}>
                <Text style={styles.textoNomeEstação}>Nome da estação</Text>
                <View style={styles.caixaInfo}>
                    <Text style={styles.textoParagrafo}>Conector tipo 2</Text>
                    <Text style={styles.textoParagrafo}>00/00/0000 ás 00h00</Text>
                </View>
            </View>
            <Text style={styles.textoHistorico}>Estatísticas de uso</Text>
            <View style={styles.caixaUso}>
                <View style={styles.caixas}>
                    <Image
                        source={require('../image/folhaVerde.png')}
                        style={styles.ImageCaixa}
                    />
                    <Text>Você poupou</Text>
                    <Text style={styles.textoNumero}>--.--</Text>
                    <Text style={styles.textoTexto}>kg de carbono ao utilizar{'\n'} veículos elétricos</Text>
                </View>
                <View style={styles.caixas}>
                    <Image
                        source={require('../image/tomada.png')}
                        style={styles.ImageCaixa}
                    />
                    <Text>Você realizou</Text>
                    <Text style={styles.textoNumero}>98</Text>
                    <Text style={styles.textoTexto}>Recargas até agora</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop: '15%',
        marginLeft: 15
    },
    textoNome:{
        fontSize: 30,
        fontWeight: 'bold',
        color: "#3CD615"
    },
    textoSecundario:{
        fontSize: 25,
        fontWeight: '300',
        color: "#3CD615"
    },
    caixaCarro:{
        flexDirection: 'row',
        gap: 10
    },
    textoHistorico:{
        fontSize: 25,
        fontWeight: '300',
        color: "#3CD615",
        marginTop: '5%'
    },
    caixaHistorico:{
        marginTop: '2%',
        backgroundColor: "#FFFFFF",
        marginRight: '4%',
        paddingTop: 30,
        paddingBottom: 40,
        borderRadius: 25,
        gap: 15
    },
    textoNomeEstação:{
        fontSize: 17,
        fontWeight: 'bold',
        color: "#3CD615",
        marginLeft: 20
    },
    caixaInfo:{
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    ImageCaixa:{
        width: 60,
        height: 60
    },
    caixas:{
        alignItems: 'center',
        backgroundColor: "#FFFFFF",
        padding: 20,
        borderRadius: 20,
        width: '45%'
    },
    caixaUso:{
        flexDirection: 'row',
        marginTop: '5%',
        gap: 10
    },
    textoTexto:{
        textAlign: 'center'
    },
    textoNumero:{
        fontSize: 30,
        fontWeight: '200',
        color: "#3CD615"
    }
})