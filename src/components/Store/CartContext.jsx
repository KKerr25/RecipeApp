import { createContext } from "react";

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeitem: (id) => {},
  clearCart: () => {},
});

export default CartContext;
