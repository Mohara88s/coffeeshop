import { FlatList, TouchableOpacity, Text, View } from 'react-native';
import { ProductCardsListProps } from './ProductCardsList.types.ts';
import { styles } from './ProductCardsList.styles.ts';
import { ProductCard } from '../ProductCard/index.ts';

export const ProductCardsList = ({ list }: ProductCardsListProps) => {
  return (
    <View>
      <View style={styles.titleBox}>
        <Text>Perfect for you</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text>На головну</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={list}
        renderItem={({ item }) => <ProductCard item={item} />}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
