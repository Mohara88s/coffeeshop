import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {},
  listContent: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 16,
    paddingRight: 16,
    gap: 12,
  },
  separator: {
    height: 12, // Висота розділювача (якщо gap не підтримується)
  },
  title: {
    fontSize: 14,
    color: '#000',
    fontWeight: '700',
  },
  link: {
    fontSize: 12,
    color: '#006ffd',
    fontWeight: '600',
  },
  cardContainer: {
    width: '100%',
  },
});
