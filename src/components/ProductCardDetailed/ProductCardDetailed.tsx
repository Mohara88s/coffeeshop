import { Image, Text, View } from 'react-native';
import { ProductCardDetailedProps } from './ProductCardDetailed.types.ts';
import { styles } from './ProductCardDetailed.styles.ts';
import { CustomButton } from '../CustomButton/CustomButton.tsx';

export const ProductCardDetailed = ({ id, title, price, imageUrl, info }: ProductCardDetailedProps) => {
  return (
    <View style={styles.container}>
        <Image
          source={{ uri: imageUrl }}
          style={styles.cardImage}
          resizeMode="cover"
        />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price.toFixed(2)}</Text>
        <Text style={styles.info}>{info}</Text>
        <CustomButton title='Add to order' onPress={() => {}}/>
      </View>
    </View>
  );
};
