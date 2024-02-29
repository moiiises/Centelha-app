import { View, Text, StyleSheet, Image,ScrollView, ImageBackground} from "react-native";
import MapView from "react-native-maps";

export default function Maps() {
    return(
        <View style={styles.container}>
            <MapView
                style={styles.map}
            />
            <ScrollView style={styles.containerOne} horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.caixaPrimeira}>
                <ImageBackground
                    source={require('../image/mapa.png')}
                    style={styles.arvoreImage}
                />
                <Text style={styles.textoPrincipal}>Os postos de abastecimento mais proximos de você</Text>
                </View>
                <View style={styles.caixaPrimeira}>
                <ImageBackground
                    source={require('../image/bateria.png')}
                    style={styles.arvoreImage}
                />
                <Text style={styles.textoPrincipal}>Uma carga de 20 min equivale a 11Km rodados</Text>
                </View>
                <View style={styles.caixaPrimeira}>
                <ImageBackground
                    source={require('../image/conector.png')}
                    style={styles.arvoreImage}
                />
                <Text style={styles.textoPrincipal}>Conector tipo 2</Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        marginTop: '5%',
    },
    map:{
        width: '100%',
        height: '70%',
    },
    containerOne:{
        marginLeft: "3%",
        marginRight: "3%",
      },
      caixaPrimeira:{
        backgroundColor: '#FFFFFF',
        width: 170,
        height: 150,
        borderRadius: 35,
        marginTop: '2%',
        marginLeft: 15,
        marginRight: 15,
        justifyContent: 'center',
        alignItems: 'center'
      },
      arvoreImage:{
        width: 40,
        height: 40,
      },
      textoPrincipal:{
        fontSize: 10,
        textAlign: "center",
        marginTop: 12
      }
})