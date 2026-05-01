import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const IMG__WIDTH = width * 0.25;
const IMG__HEIGHT = width * 0.27;

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
  },
  cardImage: {
    width: IMG__WIDTH,
    height: IMG__HEIGHT,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 16,
    padding: 0,
    overflow: 'hidden',
    backgroundColor: '#f8f9fe',
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingVertical: 12,
    gap: 4,
  },
  infoBox: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 9,
  },
  titleBox: {
    flex: 1,
    marginRight: 8,
  },
  title: {
    fontSize: 12,
    fontWeight: '700',
    flexWrap: 'wrap',
    color: '#1f2024',
    marginBottom: 4,
  },
  optionsText: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
    letterSpacing: 0.12,
    color: '#71727a',
    flexWrap: 'wrap',
  },
  removeBtn: {
    padding: 2,
  },
  priceBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quantitySelectorBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  selector: {
    width: 24,
    height: 24,
    backgroundColor: '#eaf2ff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 26,
  },
  quantity: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: 0.12,
    color: '#1f2024',
    paddingHorizontal: 6,
  },
  itemAmount: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1f2024',
  },
});
