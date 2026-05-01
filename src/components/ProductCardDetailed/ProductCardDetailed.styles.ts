import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const IMG_HEIGHT = 0.8 * width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    padding: 0,
    paddingBottom:24,
    overflow: 'hidden',
  },
  scrollContent: {
    flexGrow: 1,
  },
  cardImage: {
    width: '100%',
    height: IMG_HEIGHT,
    backgroundColor: '#f8f9fe',
  },
  infoContainer: {
    padding: 24,
    gap: 8,
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    maxWidth: '90%',
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: 0.18,
    color: '#1f2024',
  },
  price: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
    color: '#1f2024',
    marginBottom: 16,
  },
  info: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '400',
    color: '#71727a',
    letterSpacing: 0.122,
    marginBottom: 40,
  },
  sizesTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: ' #1f2024',
  },
  sizes: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 28,
  },
  options: {
    marginBottom: 36,
  },
  addToOrderButton: {
    marginTop: 'auto',
  },
});
