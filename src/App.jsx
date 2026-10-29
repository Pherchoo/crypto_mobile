/*
    Instalar @react-native-community/picker
    View padre
    Text Moneda style label
    Picker
    Picker.Item:
        - Seleccione
        - Dolar USD
        - Peso Mexicano MXN
        - Euro EUR
        - Libra Esterlina GBP
    Text Criptomoneda style label
    Picker
    Picker.Item:
        - Seleccione
    Touchable Cotizar style btnCotizar
    Funcionalidad: Al dar clic al btn mostrar un "Text" que diga "Formulario creado"
*/


import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

