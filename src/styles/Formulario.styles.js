import { StyleSheet } from 'react-native';
import { colors } from './theme';

export default StyleSheet.create({
  formulario: { gap: 20 },
  campo: { gap: 8 },
  label: {
    fontSize: 18,
    fontWeight: '900',
    textTransform: 'uppercase',
    color: colors.text,
    letterSpacing: 0.5,
  },
  selectContainer: {
    borderWidth: 2,
    borderColor: colors.border,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: colors.card,
  },
  select: { width: '100%', color: colors.text },
  btnCotizar: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 20,
    minHeight: 48,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  btnPressed: { backgroundColor: colors.primaryPressed },
  btnText: {
    color: colors.card,
    fontSize: 18,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});

