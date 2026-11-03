import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './styles/App.styles';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.card}>
        <Text accessibilityRole="header" style={styles.title}>Hello World</Text>
      </View>
    </View>
  );
}
