import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 12,
    backgroundColor: '#eaf2ff',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  selectedContainer: {
    backgroundColor: '#006ffd',
  },
  text: {
    paddingHorizontal: 4,
    fontWeight: '600',
    color: '#006ffd',
    fontSize: 10,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  selectedText: {
    color: '#fff',
  },
});
