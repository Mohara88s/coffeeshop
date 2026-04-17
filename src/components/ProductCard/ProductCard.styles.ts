import { Dimensions, StyleSheet } from 'react-native';
import { SIZE } from '../../constants/style.ts';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.8;

export const styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH,
    flexDirection: 'row',
    padding: SIZE.xxl,
    borderRadius: SIZE.l,
    borderWidth: 1,
    borderColor: 'grey',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardImage: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 12,
    color: 'red',
    fontStyle: 'italic',
  },
  button: {
    width: 120,
  },
});
