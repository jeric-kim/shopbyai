'use client';

import React, { createContext, useContext, useMemo, useReducer } from 'react';

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  option?: string;
};

type CartState = {
  items: CartItem[];
};

const initialState: CartState = { items: [] };

type CartAction =
  | { type: 'ADD'; item: CartItem }
  | { type: 'REMOVE'; id: string }
  | { type: 'UPDATE'; id: string; quantity: number }
  | { type: 'CLEAR' };

function reducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD': {
      const existing = state.items.find((i) => i.id === action.item.id && i.option === action.item.option);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === action.item.id && i.option === action.item.option
              ? { ...i, quantity: i.quantity + action.item.quantity }
              : i
          )
        };
      }
      return { items: [...state.items, action.item] };
    }
    case 'REMOVE':
      return { items: state.items.filter((i) => i.id !== action.id) };
    case 'UPDATE':
      return {
        items: state.items.map((i) => (i.id === action.id ? { ...i, quantity: action.quantity } : i))
      };
    case 'CLEAR':
      return initialState;
    default:
      return state;
  }
}

const CartContext = createContext<{
  state: CartState;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clear: () => void;
} | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(
    () => ({
      state,
      addItem: (item: CartItem) => dispatch({ type: 'ADD', item }),
      removeItem: (id: string) => dispatch({ type: 'REMOVE', id }),
      updateQuantity: (id: string, quantity: number) => dispatch({ type: 'UPDATE', id, quantity }),
      clear: () => dispatch({ type: 'CLEAR' })
    }),
    [state]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('Cart context not available');
  const total = ctx.state.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return { ...ctx, total };
}
