import { Image, Text, View } from 'react-native';
import { ProductCardProps } from './ProductCard.types.ts';
import { styles } from './ProductCard.styles.ts';

export const ProductCard = ({ title, price, imageUrl }: ProductCardProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: imageUrl }}
        style={styles.cardImage}
        resizeMode="cover"
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>€ {price.toFixed(2)}</Text>
      </View>
    </View>
  );
};
