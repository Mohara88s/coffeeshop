import React from 'react';
import { BucketCardsList } from '../../components/BucketCardsList';
import { View } from 'react-native';
import { styles } from './BucketScreen.styles';

export const BucketScreen = () => {
  return <View style={styles.container}>{<BucketCardsList />}</View>;
};
