import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  box: {
    width: 16,
    height: 16,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: '#71727a',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  boxSelected: {
    backgroundColor: '#006ffd',
    borderColor: '#006ffd',
  },
  text: {
    fontSize: 12,
    color: '#71727a',
    fontWeight: '400',
    letterSpacing: 0.12,
    lineHeight: 16,
  },
  textSelected: {
    color: '#006ffd',
  },
});
