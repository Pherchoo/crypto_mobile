import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../styles/Formulario.styles';
import { colors } from '../styles/theme';

export default function FormularioCotizacion() {
  const [moneda, setMoneda] = useState('');
  const [criptomoneda, setCriptomoneda] = useState('');
  const [mensaje, setMensaje] = useState('');



  return (
    <View style={styles.formulario}>
      <View style={styles.campo}>
        <Text style={styles.label}>Moneda</Text>
        <View style={styles.selectContainer}>
          <Picker
            accessibilityLabel="Moneda"
            selectedValue={moneda}
            onValueChange={(valor) => setMoneda(valor)}
            style={styles.select}
            dropdownIconColor={colors.primary}
          >
            <Picker.Item label="Seleccione una moneda" value="" />
            <Picker.Item label="Dólar (USD)" value="USD" />
            <Picker.Item label="Peso Mexicano (MXN)" value="MXN" />
            <Picker.Item label="Euro (EUR)" value="EUR" />
            <Picker.Item label="Libra Esterlina (GBP)" value="GBP" />
          </Picker>
        </View>
      </View>
      <View style={styles.campo}>
        <Text style={styles.label}>Criptomoneda</Text>
        <View style={styles.selectContainer}>
          <Picker
            accessibilityLabel="Criptomoneda"
            selectedValue={criptomoneda}
            onValueChange={(valor) => setCriptomoneda(valor)}
            style={styles.select}
            dropdownIconColor={colors.primary}
          >
            <Picker.Item label="Seleccione una criptomoneda" value="" />
          </Picker>
        </View>
      </View>
      <Pressable
        accessibilityRole="button"
        onPress={() => setMensaje('Formulario creado')}

        style={({ pressed }) => [styles.btnCotizar, pressed && styles.btnPressed]}
      >
        <Text style={styles.btnText}>Cotizar</Text>
      </Pressable>
      {mensaje !== '' && <Text>{mensaje}</Text>}
    </View>
  );
}



