export interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  onPress: () => void;
}
