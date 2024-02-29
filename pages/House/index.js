import { View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";

export default function House(){
    return(
        <View style={styles.container}>
            <View style={styles.porcent}>
                <Image
                    source={require('../image/folha.png')}
                    style={styles.ImageContainer}
                />
                <Text style={styles.textoPrincipal}>60%</Text>
            </View>
            <TouchableOpacity style={styles.containerBotao}>
                <View style={styles.button}>
                    <Image
                        source={require('../image/power.png')}
                        style={styles.ImageBotao}
                    />
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: '40%',
        alignItems: 'center'
    },
    map:{
        width: '95%',
        height: '20%'
    },
    porcent:{
        backgroundColor: "#3CD615",
        padding:'11%',
        borderRadius: 60,
        alignItems: 'center',
    },
    ImageContainer:{
        height: 70,
        width: 70
    },
    textoPrincipal:{
        fontSize: 60,
        color: "#FFFFFF"
    },
    containerBotao:{
        marginTop: '10%'
    },
    button:{
        backgroundColor:"#3CD615",
        padding: '7%',
        borderRadius: 80
    },
    ImageBotao:{
        width: 100,
        height: 100
    }
})