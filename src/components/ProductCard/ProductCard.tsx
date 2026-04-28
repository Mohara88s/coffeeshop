import { Image, Text, View, TouchableOpacity } from 'react-native';
import { ProductCardProps } from './ProductCard.types.ts';
import { styles } from './ProductCard.styles.ts';

export const ProductCard = ({
  title,
  price,
  image,
  onPress,
  containerStyle,
}: ProductCardProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, containerStyle]}>
        <Image
          source={{ uri: image }}
          style={styles.cardImage}
          resizeMode="cover"
        />
        <View style={styles.infoContainer}>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
            {title}
          </Text>
          <Text style={styles.price}>€ {price.toFixed(2)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
