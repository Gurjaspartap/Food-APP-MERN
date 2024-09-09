import React from 'react';
import { useCart, useDispatchCart } from '../context/cartContext'; // Ensure correct import from cartContext
import { REMOVE_ITEM, CLEAR_CART } from '../context/actionTypes'; // Correct actionTypes import

const Cart = () => {
    const cartItems = useCart(); // Get cart items from context
    const dispatch = useDispatchCart(); // Get dispatch function from context

    // Handle item removal
    const handleRemove = (item) => {
        dispatch({
            type: REMOVE_ITEM,
            payload: item,
        });
    };

    // Handle clearing the cart
    const handleClearCart = () => {
        dispatch({ type: CLEAR_CART });
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Cart</h2>

            {/* Clear Cart Button */}
            <button
                onClick={handleClearCart}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300 mb-4">
                Clear Cart
            </button>

            <ul className="space-y-4">
                {/* Check if cart is empty */}
                {cartItems.length === 0 ? (
                    <li className="text-gray-500">No items in the cart</li>
                ) : (
                    cartItems.map((item, index) => (
                        <li
                            key={index}
                            className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-4 rounded-md shadow-sm">
                            <div className="flex flex-col md:flex-row items-center">
                                {/* Display food image */}
                                <img
                                    src={item.image || 'https://via.placeholder.com/150'} // Ensure valid default image
                                    alt={item.name}
                                    className="w-16 h-16 object-cover rounded-md mr-4 mb-2 md:mb-0"
                                />
                                <div className="flex flex-col">
                                    <span className="text-lg font-medium">{item.name}</span>
                                    <span className="text-gray-700">Quantity: {item.quantity || 0}</span>
                                    <span className="text-gray-700">Plate Size: {item.plateSize === 'half' ? 'Half' : 'Full'}</span>
                                    <span className="text-gray-800 font-semibold">
                                        Total Price: ${item.price ? item.price.toFixed(2) : '0.00'} {/* Ensure total price is displayed */}
                                    </span>
                                </div>
                            </div>
                            {/* Remove item button */}
                            <button
                                onClick={() => handleRemove(item)}
                                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-300 mt-4 md:mt-0">
                                Remove
                            </button>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default Cart;
