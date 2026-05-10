import React from 'react';
import { LocationComponent } from '../../components/LocationComponent';
import { View } from 'react-native';
import { styles } from './CheckoutScreen.styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const CheckoutScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { marginBottom: insets.bottom }]}>
      {<LocationComponent />}
    </View>
  );
};
