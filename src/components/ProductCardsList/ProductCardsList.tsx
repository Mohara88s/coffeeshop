import { FlatList, TouchableOpacity, Text, View } from 'react-native';
import { ProductCardsListProps } from './ProductCardsList.types.ts';
import { styles } from './ProductCardsList.styles.ts';
import { ProductCard } from '../ProductCard/index.ts';

export const ProductCardsList = ({ title, list }: ProductCardsListProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleBox}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.link}>see more</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={list}
        renderItem={({ item }) => <ProductCard {...item} />}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};
