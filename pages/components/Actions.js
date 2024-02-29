import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground} from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.caixaPrimeira}>
          <ImageBackground
            source={require('../image/arvore.png')}
            style={styles.arvoreImage}
          />
          <Text style={styles.textoPrincipalUm}>1 recarga completa equivale a</Text>
          <View style={styles.bloco}>
            <Text style={styles.numeracao}>345</Text>
            <Text style={styles.texto}> arvores</Text>
          </View>
        </View>

        <View style={styles.caixaPrimeira}>
          <ImageBackground
              source={require('../image/gas.png')}
              style={styles.arvoreImage}
            />
          <Text style={styles.textoPrincipal}>Co² emitido na atmosfera</Text>
          <View style={styles.bloco}>
            <Text style={styles.numeracao}>0%</Text>
            <Text style={styles.texto}> na atmosfera</Text>
          </View>
        </View>

        <View style={styles.caixaPrimeira}>
          <ImageBackground
              source={require('../image/Sedan.png')}
              style={styles.sedanImage}
            />
          <Text style={styles.textoPrincipalUm}>100% da carga anda em média</Text>
          <View style={styles.bloco}>
            <Text style={styles.numeracao}>400</Text>
            <Text style={styles.texto}> Km</Text>
          </View>
        </View>

        <View style={styles.caixaPrimeira}>
          <ImageBackground
              source={require('../image/bateria.png')}
              style={styles.arvoreImage}
            />
          <Text style={styles.textoPrincipalUm}>50% da carga demora em média</Text>
          <View style={styles.bloco}>
            <Text style={styles.numeracao}>40/50</Text>
            <Text style={styles.texto}> min</Text>
          </View>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerOne:{
    marginLeft: "3%",
    marginRight: "3%",
  },
  caixaPrimeira:{
    backgroundColor: '#FFFFFF',
    width: 170,
    height: 150,
    borderRadius: 35,
    marginTop: "1.5%",
    marginLeft: 15,
    marginRight: 15
  },
  arvoreImage:{
    width: 40,
    height: 40,
    marginLeft:65,
    marginTop: 17
  },
  sedanImage:{
    width: 45,
    height: 40,
    marginLeft:60,
    marginTop: 17
  },
  textoPrincipal:{
    fontSize: 10,
    textAlign: "center",
    marginTop: 12
  },
  textoPrincipalUm:{
    fontSize: 8,
    textAlign: "center",
    marginTop: 12
  },
  bloco:{
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "baseline",
    marginTop: 9
  },
  numeracao:{
    fontWeight: "bold",
    fontSize: 20
  },
  texto:{
    fontSize: 12,
  },
})