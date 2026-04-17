import { Alert, Image, Text, View } from 'react-native';
import { ProductCardProps } from './ProductCard.types.ts';
import { styles } from './ProductCard.styles.ts';
import { CustomButton } from '../CustomButton';

export const ProductCard = ({ title, price, imageUrl }: ProductCardProps) => {
  const handleButtonPress = () => {
    Alert.alert(title);
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
        <CustomButton
          title={'Buy'}
          onPress={handleButtonPress}
          style={styles.button}
        />
      </View>
      <Image
        source={{ uri: imageUrl }}
        style={styles.cardImage}
        resizeMode="contain"
      />
    </View>
  );
};
