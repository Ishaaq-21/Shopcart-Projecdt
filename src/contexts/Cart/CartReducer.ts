import { CartItem, CartState } from "@/types/types";
import { Product } from "../../../sanity.types";

export type CartAction = { type: "ADD_ITEM"; payload: Product };

export const initialCartState: CartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
  getItemCountById: (state: CartState, productId: string) => {
    return (
      state.items.find((item) => item.product._id === productId)?.quantity || 0
    );
  },
};
const calculateTotal = (items: CartItem[]) => {
  const totalQuantity = items.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + (item.product.price || 0) * item.quantity,
    0
  );

  return { totalQuantity, totalPrice };
};

// ----------- A D D   P R O D U C T  --------------------

const addProductItem = (state: CartState, product: Product): CartState => {
  const existingIndex = state.items.findIndex(
    (items) => items.product._id === product._id
  );
  let updatedItems: CartItem[] = [];

  if (existingIndex !== -1) {
    const existingItem = state.items[existingIndex];
    const newQuantity =
      product.stock && existingItem.quantity < product.stock
        ? existingItem.quantity + 1
        : existingItem.quantity;

    updatedItems = [
      ...state.items.slice(0, existingIndex),
      { ...existingItem, quantity: newQuantity },
      ...state.items.slice(existingIndex + 1),
    ];
  } else {
    updatedItems = [...state.items, { product, quantity: 1 }];
  }

  const { totalQuantity, totalPrice } = calculateTotal(updatedItems);
  return {
    ...state,
    items: updatedItems,
    totalItems: totalQuantity,
    totalPrice: totalPrice,
  };
};

// ---------------------------------------------------------------------

export function cartReducer(state: CartState, action: CartAction) {
  switch (action.type) {
    case "ADD_ITEM":
      return addProductItem(state, action.payload);
    default:
      return state;
  }
}
