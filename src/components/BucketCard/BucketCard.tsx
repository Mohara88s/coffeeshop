import { Image, Text, View, TouchableOpacity } from 'react-native';
import { BucketCardProps } from './BucketCard.types.ts';
import { styles } from './BucketCard.styles.ts';
import Icon from 'react-native-vector-icons/Octicons';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../store/store';
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from '../../store/cart/cartSlice';
import { useTheme } from '@react-navigation/native';

export const BucketCard = ({ bucketItem }: BucketCardProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { colors } = useTheme();
  const {
    title,
    image,
    price,
    selectedSize,
    selectedOptions,
    quantity,
    cartKey,
  } = bucketItem;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: image }}
        style={styles.cardImage}
        resizeMode="cover"
      />
      <View style={styles.infoContainer}>
        <View style={styles.infoBox}>
          <View style={styles.titleBox}>
            <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
            <Text style={styles.optionsText}>
              {selectedSize}
              {selectedOptions.map(option => ` / ${option}`)}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              dispatch(removeFromCart(cartKey));
            }}
            style={styles.removeBtn}
          >
            <Icon name="trash" size={16} color="red" />
          </TouchableOpacity>
        </View>
        <View style={styles.priceBox}>
          <View style={styles.quantitySelectorBox}>
            <TouchableOpacity
              onPress={() => {
                dispatch(decrementQuantity(cartKey));
              }}
              style={styles.selector}
            >
              <Icon name="dash" size={10} color="#006ffd" />
            </TouchableOpacity>
            <Text style={[styles.quantity, { color: colors.text }]}>
              {quantity}
            </Text>
            <TouchableOpacity
              onPress={() => {
                dispatch(incrementQuantity(cartKey));
              }}
              style={styles.selector}
            >
              <Icon name="plus" size={10} color="#006ffd" />
            </TouchableOpacity>
          </View>
          <Text style={[styles.price, { color: colors.text }]}>
            € {price.toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
};
