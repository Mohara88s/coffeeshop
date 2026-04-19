import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const IMG_HEIGHT = width;

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    padding: 0,
    overflow: 'hidden',
    backgroundColor: '#f8f9fe',
  },
  cardImage: {
    width: '100%',
    height: IMG_HEIGHT,
  },
  infoContainer: {
    padding: 24,
    gap: 8,
  },
  title: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '400',
    color: '#1f2024',
  },
  price: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1f2024',
    marginBottom: 24,
  },
  info: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '400',
    color: ' #71727a',
    letterSpacing: 0.122,
    marginBottom: 40,
  },
});
