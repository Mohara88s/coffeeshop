import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: '#006ffd',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  disabledContainer: {
    backgroundColor: '#71727a',
  },
  text: {
    fontWeight: '600',
    color: '#fff',
    fontSize: Platform.select({ android: 12, ios: 14 }),
  },
  disabledText: {
    color: '#1f2024',
  },
});
