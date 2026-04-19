import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 16,
    paddingRight: 16,
  },
  titleBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 8,
    marginBottom: 16,
  },
  listContent: {
    gap: 12,
  },
  separator: {
    width: 12,             // Ширина розділювача (якщо gap не підтримується)
  },
  title: {
    fontSize: 14,
    color: '#000',
    fontWeight:'700',
  },
  link: {
    fontSize: 12,
    color: '#006ffd',
    fontWeight:'600',
  },
});
