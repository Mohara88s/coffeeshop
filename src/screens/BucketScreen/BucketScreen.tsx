import React from 'react';
import { BucketCardsList } from '../../components/BucketCardsList';
import { View } from 'react-native';
import { styles } from './BucketScreen.styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const BucketScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { marginBottom: insets.bottom }]}>
      {<BucketCardsList />}
    </View>
  );
};
