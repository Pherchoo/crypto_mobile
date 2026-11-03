import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../styles/Formulario.styles';
import { colors } from '../styles/theme';

export default function FormularioCotizacion() {
  const [moneda, setMoneda] = useState('');
  const [criptomoneda, setCriptomoneda] = useState('');



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
            <Picker.Item label="Bitcoin (BTC)" value="BTC" />
            <Picker.Item label="Ethereum (ETH)" value="ETH" />
            <Picker.Item label="Litecoin (LTC)" value="LTC" />
            <Picker.Item label="Solana (SOL)" value="SOL" />
            <Picker.Item label="Dogecoin (DOGE)" value="DOGE" />
          </Picker>
        </View>
      </View>
      <Pressable
        accessibilityRole="button"

        style={({ pressed }) => [styles.btnCotizar, pressed && styles.btnPressed]}
      >
        <Text style={styles.btnText}>Cotizar</Text>
      </Pressable>
    </View>
  );
}


