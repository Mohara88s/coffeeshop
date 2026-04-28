import { ProductCardProps } from '../ProductCard/ProductCard.types';
export interface CategoryProductCardsListProps {
  list: Omit<ProductCardProps, 'onPress'>[];
}
