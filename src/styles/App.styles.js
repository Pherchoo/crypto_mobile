import { StyleSheet } from 'react-native';

// Colores y tarjeta adaptados de css (2) a estilos nativos.
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  card: {
    width: '100%',
    maxWidth: 420,
    padding: 30,
    borderRadius: 16,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    alignItems: 'center',
  },
  title: {
    color: '#5E49E2',
    fontSize: 26,
    fontWeight: '900',
    textAlign: 'center',
  },
});
