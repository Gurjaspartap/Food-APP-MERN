import React, { createContext, useContext, useReducer } from 'react';
import { ADD_ITEM, REMOVE_ITEM, CLEAR_CART } from './actionTypes';

const CartStateContext = createContext();
const CartDispatchContext = createContext();

// function cartReducer(state, action) {
//     switch (action.type) {
//         case ADD_ITEM:
//             return [...state, action.payload];
//         case REMOVE_ITEM:
//             return state.filter(item => item.name !== action.payload.name);
//         case CLEAR_CART:
//             return [];
//         default:
//             throw new Error(`Unknown action: ${action.type}`);
//     }
// }
// cart reducer 
function cartReducer(state, action) {
    switch (action.type) {
        case ADD_ITEM:
            // Check if item already exists; if so, update quantity, otherwise add a new item
            const itemExists = state.find(item => item.name === action.payload.name);
            if (itemExists) {
                return state.map(item =>
                    item.name === action.payload.name
                        ? { ...item, quantity: item.quantity + action.payload.quantity }
                        : item
                );
            }
            return [...state, action.payload];

        case REMOVE_ITEM:
            // Filter out the item to be removed
            return state.filter(item => item.name !== action.payload.name);

        case CLEAR_CART:
            return [];

        default:
            throw new Error(`Unknown action: ${action.type}`);
    }
}

// car reducer ends

export function CartProvider({ children }) {
    const [state, dispatch] = useReducer(cartReducer, []);

    return (
        <CartStateContext.Provider value={state}>
            <CartDispatchContext.Provider value={dispatch}>
                {children}
            </CartDispatchContext.Provider>
        </CartStateContext.Provider>
    );
}

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
