import { ScrollView, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import FormularioCotizacion from './components/picker';
import styles from './styles/App.styles';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <Text accessibilityRole="header" style={styles.title}>Crypto Mobile</Text>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.card}>
          <FormularioCotizacion />
        </View>
      </ScrollView>
    </View>
  );
}
