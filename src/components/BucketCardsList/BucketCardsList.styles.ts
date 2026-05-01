import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 16,
    paddingRight: 16,
  },
  listContent: {
    gap: 12,
  },
  separator: {
    height: 12, // Висота розділювача (якщо gap не підтримується)
  },
  totalBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 16,
    paddingHorizontal: 12,
  },
  total: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    color: '#71727a',
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 0.16,
    color: '#1f2024',
  },
});
