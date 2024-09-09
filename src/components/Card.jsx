import React, { useState } from 'react';
import { useDispatchCart } from '../context/cartContext'; // Ensure this is correctly imported from your context

const FoodCard = ({ foodName, foodImage, priceHalf, priceFull }) => {
    const [quantity, setQuantity] = useState(1);
    const [plateSize, setPlateSize] = useState('half');

    // Initialize dispatch from context
    const dispatch = useDispatchCart();

    // Handle quantity change
    const handleQuantityChange = (e) => {
        setQuantity(parseInt(e.target.value));
    };

    // Handle plate size change
    const handlePlateSizeChange = (e) => {
        setPlateSize(e.target.value);
    };

    // Calculate total price based on plate size and quantity
    const totalPrice = plateSize === 'half' ? priceHalf * quantity : priceFull * quantity;

    // Function to add item to cart
    const handleAddToCart = () => {
        dispatch({
            type: 'ADD_ITEM',
            payload: {
                name: foodName,
                image: foodImage,
                price: totalPrice,
                quantity,
                plateSize
            }
        });
    };

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
            <img className="w-full h-48 object-cover" src={foodImage} alt={foodName} />
            <div className="px-4 py-4">
                <div className="font-bold text-xl mb-2">{foodName}</div>

                {/* Quantity Selector */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Quantity</label>
                    <input
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={handleQuantityChange}
                        className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
                    />
                </div>

                {/* Plate Size Selector */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Plate Size</label>
                    <div className="flex space-x-4">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="plateSize"
                                value="half"
                                checked={plateSize === 'half'}
                                onChange={handlePlateSizeChange}
                                className="mr-2"
                            />
                            Half
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="plateSize"
                                value="full"
                                checked={plateSize === 'full'}
                                onChange={handlePlateSizeChange}
                                className="mr-2"
                            />
                            Full
                        </label>
                    </div>
                </div>

                {/* Total Price */}
                <div className="text-xl font-semibold text-gray-800">
                    Total Price: ${totalPrice.toFixed(2)}
                </div>
            </div>
            <div className="px-4 pb-4">
                <button
                    onClick={handleAddToCart}  // Corrected: Call the correct function
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 w-full"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default FoodCard;
