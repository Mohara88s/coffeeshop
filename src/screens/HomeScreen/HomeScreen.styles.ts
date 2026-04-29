import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  SafeAreaView: { flex: 1 },
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: 10,
  },
  error: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
    fontWeight: '600',
  },
  errorText: { color: 'red' },
});
