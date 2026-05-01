import { FlatList, View, Text } from 'react-native';
import { styles } from './BucketCardsList.styles.ts';
import { useTheme } from '@react-navigation/native';
import { BucketCard } from '../BucketCard/BucketCard.tsx';
import type { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { CustomButton } from '../CustomButton/CustomButton.tsx';

export const BucketCardsList = () => {
  const { colors } = useTheme();

  const cart = useSelector((state: RootState) => state.cart);

  return (
    <View style={styles.container}>
      <FlatList
        data={cart.items}
        renderItem={({ item }) => <BucketCard bucketItem={item} />}
        keyExtractor={item => String(item.cartKey)}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
      <View>
        <View style={styles.totalBox}>
          <Text style={styles.total}>Total</Text>
          <Text style={[styles.totalAmount, { color: colors.text }]}>
            € {cart.totalAmount.toFixed(2)}
          </Text>
        </View>
        <CustomButton
          title="Checkout"
          onPress={() => {}}
          disabled={cart.items.length === 0}
        />
      </View>
    </View>
  );
};
