import { FlatList, View } from 'react-native';
import { CategoryProductCardsListProps } from './CategoryProductCardsList.types.ts';
import { styles } from './CategoryProductCardsList.styles.ts';
import { ProductCard } from '../ProductCard/index.ts';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../constants/routes.ts';

export const CategoryProductCardsList = ({
  list,
}: CategoryProductCardsListProps) => {
  const navigation = useNavigation<any>();

  const handleProductPress = (id: string) => {
    navigation.navigate(ROUTES.ProductDetailsScreen, { productId: id });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        renderItem={({ item }) => (
          <ProductCard
            {...item}
            onPress={() => handleProductPress(String(item.id))}
            containerStyle={styles.cardContainer}
          />
        )}
        keyExtractor={item => String(item.id)}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};
