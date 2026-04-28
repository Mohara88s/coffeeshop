import { ViewStyle } from 'react-native';

export interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
  onPress: () => void;
  containerStyle?: ViewStyle;
}
