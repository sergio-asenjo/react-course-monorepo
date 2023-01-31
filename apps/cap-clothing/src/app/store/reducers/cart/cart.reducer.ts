import { ICartItem } from "../../../interfaces/ICartItem";

export const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [] as ICartItem[],

};

export const cartReducer = (state: CartState = CART_INITIAL_STATE, action: CartAction) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_CART_ITEMS':
      return {
        ...state,
        cartItems: payload.cartItems!,
      };
    case 'SET_IS_CART_OPEN':
      return {
        ...state,
        isCartOpen: payload.isCartOpen!,
      };
    default:
      return state;
  }
};

interface CartState {
  isCartOpen: boolean;
  cartItems: ICartItem[];
}

interface CartAction {
  type: 'SET_CART_ITEMS' | 'SET_IS_CART_OPEN';
  payload: {
    cartItems?: ICartItem[];
    cartCount?: number;
    cartTotal?: number;
    isCartOpen?: boolean;
  };
}