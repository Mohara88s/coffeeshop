import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, CartState } from './types';

const initialState: CartState = {
  items: [],
  totalAmount: 0,
  totalNumber: 0,
};

const generateCartKey = (
  payload: Omit<CartItem, 'quantity' | 'cartKey' | 'itemAmount'>,
) => {
  const optionsString = [...payload.selectedOptions].sort().join(',');
  return `${payload.id}-${payload.selectedSize}-${optionsString}`;
};

const updateCartTotals = (state: CartState) => {
  let totalAmount = 0;
  let totalNumber = 0;

  state.items.forEach(item => {
    item.itemAmount = item.price * item.quantity;
    totalAmount += item.itemAmount;
    totalNumber += item.quantity;
  });

  state.totalAmount = totalAmount;
  state.totalNumber = totalNumber;
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<
        Omit<CartItem, 'quantity' | 'cartKey' | 'itemAmount'>
      >,
    ) => {
      const cartKey = generateCartKey(action.payload);

      const existingItem = state.items.find(item => item.cartKey === cartKey);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
          cartKey,
          itemAmount: action.payload.price,
        });
      }

      updateCartTotals(state);
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.cartKey !== action.payload);
      updateCartTotals(state);
    },

    incrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find(i => i.cartKey === action.payload);
      if (item) {
        item.quantity += 1;
      }
      updateCartTotals(state);
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find(i => i.cartKey === action.payload);
      if (item) {
        item.quantity -= 1;
        if (item.quantity <= 0) {
          state.items = state.items.filter(i => i.cartKey !== action.payload);
        }
      }
      updateCartTotals(state);
    },

    clearCart: () => initialState,
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
