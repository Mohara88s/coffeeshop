import { FlatList, TouchableOpacity, Text, View } from 'react-native';
import { ProductCardsListProps } from './ProductCardsList.types.ts';
import { styles } from './ProductCardsList.styles.ts';
import { ProductCard } from '../ProductCard/index.ts';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../constants/routes';

export const ProductCardsList = ({ title, list }: ProductCardsListProps) => {
  const navigation = useNavigation<any>();

  const handleProductPress = (id: string) => {
    navigation.navigate(ROUTES.ProductDetailsScreen, { productId: id });
  };

  const handleCategoryPress = (category: string) => {
    navigation.navigate(ROUTES.CategoryScreen, { category: category });
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleBox}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={() => handleCategoryPress(title)}>
          <Text style={styles.link}>see more</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={list}
        renderItem={({ item }) => (
          <ProductCard {...item} onPress={() => handleProductPress(String(item.id))} />
        )}
        keyExtractor={item => String(item.id)}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};
