import { View, Text, StyleSheet, Image } from "react-native";

export default function Time() {
    return(
        <View style={styles.container}>
            <View style={styles.caixas}>
                <Image
                    source={require('../image/bateria.png')}
                    style={styles.ImageCaixa}
                />
                <Text style={styles.textoCaixa}>20% de carga equivale a{'\n'} 80km</Text>
            </View>
            <View style={styles.caixas}>
                <Image
                    source={require('../image/bateria.png')}
                    style={styles.ImageCaixa}
                />
                <Text style={styles.textoCaixa}>40% de carga equivale a{'\n'} 160km</Text>
            </View>
            <View style={styles.caixas}>
                <Image
                    source={require('../image/bateria.png')}
                    style={styles.ImageCaixa}
                />
                <Text style={styles.textoCaixa}>60% de carga equivale a{'\n'} 240km</Text>
            </View>
            <View style={styles.caixaMenor}>
                <View style={styles.caixasUm}>
                    <Image
                        source={require('../image/bateria.png')}
                        style={styles.ImageCaixa}
                    />
                    <Text style={styles.textoCaixa}>80% {'\n'} 320km</Text>
                </View>
                <View style={styles.caixasDois}>
                    <Image
                        source={require('../image/bateria.png')}
                        style={styles.ImageCaixa}
                    />
                    <Text style={styles.textoCaixa}>100% {'\n'} 400km</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop: '10%',
        alignItems: 'center'
    },
    caixas:{
        marginTop: '5%',
        alignItems: 'center',
        backgroundColor: "#FFFFFF",
        paddingTop: 20,
        paddingBottom: 20,
        width: '90%',
        borderRadius: 25
    },
    caixasUm:{
        marginTop: '5%',
        alignItems: 'center',
        backgroundColor: "#FFFFFF",
        paddingTop: 40,
        paddingBottom: 40,
        width: '40%',
        borderRadius: 25,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    caixasDois:{
        marginTop: '5%',
        alignItems: 'center',
        backgroundColor: "#FFFFFF",
        paddingTop: 20,
        paddingBottom: 20,
        width: '40%',
        borderRadius: 25,
        flexDirection: 'row-reverse',
        justifyContent: 'center'
    },
    caixaMenor:{
        flexDirection: 'row',
        gap: 40
    },
    ImageCaixa:{
        width: 45,
        height: 55
    },
    textoCaixa:{
        fontSize: 20,
        textAlign: 'center'
    }
})