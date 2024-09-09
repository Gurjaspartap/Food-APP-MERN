import { createContext, useContext, useReducer } from "react";
import { ADD_ITEM, REMOVE_ITEM, CLEAR_CART } from "./actionTypes";

// Initial state for the cart
const initialState = [];

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case REMOVE_ITEM:
      return state.filter((item) => item.id !== action.payload.id);
    case CLEAR_CART:
      return [];
    default:
      return state;
  }
};

const cartStateContext = createContext();
const cartDispatchContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <cartDispatchContext.Provider value={dispatch}>
      <cartStateContext.Provider value={state}>
        {children}
      </cartStateContext.Provider>
    </cartDispatchContext.Provider>
  );
};

export const useCart = () => useContext(cartStateContext);
export const useDispatchCart = () => useContext(cartDispatchContext);
