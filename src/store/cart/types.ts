import { Product } from '../../api/product';

export type CartItem = Product & {
  selectedSize: string;
  selectedOptions: string[];
  quantity: number;
  cartKey: string;
};

export interface CartState {
  items: CartItem[];
  totalAmount: number;
  totalNumber: number;
}
