import { Platform, StatusBar, StyleSheet } from 'react-native';
import { colors } from './theme';

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: {
    backgroundColor: colors.primary,
    paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight ?? 24) + 22 : 60,
    paddingBottom: 22,
    paddingHorizontal: 20,
  },
  title: {
    color: colors.card,
    fontSize: 26,
    fontWeight: '900',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  content: { flexGrow: 1, padding: 20, paddingTop: 32, paddingBottom: 48 },
  card: {
    width: '100%',
    maxWidth: 560,
    alignSelf: 'center',
    backgroundColor: colors.card,
    padding: 24,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
});
