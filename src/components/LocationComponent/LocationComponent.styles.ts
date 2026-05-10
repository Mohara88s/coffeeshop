import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    marginBottom: 16,
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: 0.18,
    color: '#1f2024',
  },
  address: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
    color: '#1f2024',
    marginBottom: 16,
  },
  coordinates: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '400',
    color: '#71727a',
    letterSpacing: 0.122,
    marginBottom: 16,
  },
  error: {
    marginTop: 16,
    color: 'red',
  },
  checkoutBtn: {
    marginTop: 'auto',
  },
});
