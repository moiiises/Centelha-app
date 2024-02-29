import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import MapView from 'react-native-maps';
import Actions from '../components/Actions'

export default function App() {
  return (
    <View>
        <View style={styles.container}>
            <Image
                source={require('../image/imagemPrincipal.png')}
                style={styles.image}
            />
            </View>
            <Text style={styles.textoCarregamento}>Sobre o carregamento elétrico</Text>
            <Actions/>
            <Text style={styles.textoLocalizacao}>Localização S&L</Text>
            <View style={styles.containerMap}>
            <MapView style={styles.map} 
            initialRegion={{
                latitude: -1.4342755251829935,
                longitude: -48.46235472973006,
                latitudeDelta: 0.000922,
                longitudeDelta: 0.000421,
            }}
            />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
    },
    image:{
        width: '95%',
        height: '55%',
        marginTop: '15%',
        borderRadius: 20,
        marginBottom: '8%'
    },
    textoCarregamento:{
        textAlign: 'center',
        marginTop: '-26%',
        fontSize: 20,
        fontWeight: '100',
    },
    textoLocalizacao:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '100',
        marginTop: -62,
        marginBottom: '3%'
    },
    containerMap:{
        flex: 1,
        alignItems: 'center',
    },
    map:{
        width: '100%',
        height: '500%',
    }
})