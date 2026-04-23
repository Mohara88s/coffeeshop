import { ProductCardProps } from '../ProductCard/ProductCard.types';
export interface ProductCardsListProps {
  title: string;
  list: Omit<ProductCardProps, 'onPress'>[];
}
