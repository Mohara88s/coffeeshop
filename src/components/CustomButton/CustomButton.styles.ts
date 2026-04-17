import { StyleSheet, Platform } from 'react-native';
import { SIZE } from '../../constants/style.ts';

export const styles = StyleSheet.create({
  container: {
    padding: SIZE.xxl,
    borderRadius: SIZE.l,
    backgroundColor: Platform.select({ ios: 'grey', android: 'black' }),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Platform.select({ android: 'white', ios: undefined }),
  },
});
