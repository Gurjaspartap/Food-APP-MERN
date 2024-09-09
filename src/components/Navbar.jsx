import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        navigate("/");
    };

    const isLoggedIn = !!localStorage.getItem("authToken");

    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <h1 className="text-2xl font-bold text-gray-800">FoodApp</h1>
                    </div>
                    <div className="hidden md:flex space-x-6">
                        <Link to="/" className="text-gray-800 hover:text-gray-600">Home</Link>
                        {isLoggedIn ? (
                            <div className='flex space-x-4'>
                                <Link to="/orders" className="text-gray-800 hover:text-gray-600">Orders</Link>
                                <Link to="/cart" className="text-gray-800 hover:text-gray-600">Cart</Link>
                                <button onClick={handleLogout} className="text-gray-800 hover:text-gray-600">Logout</button>
                            </div>
                        ) : (
                            <div className='flex space-x-4'>
                                <Link to="/signup" className="text-gray-800 hover:text-gray-600 ">SignUp</Link>
                                <Link to="/login" className="text-gray-800 hover:text-gray-600">Login</Link>
                            </div>
                        )}
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
                            {/* Menu Toggle Icons */}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <Link to="/" className="block text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md">Home</Link>
                        {isLoggedIn ? (
                            <>
                                <Link to="/orders" className="block text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md">Orders</Link>
                                <button onClick={handleLogout} className="block text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md">Logout</button>
                            </>
                        ) : (
                            <>
                                <Link to="/signup" className="block text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md">SignUp</Link>
                                <Link to="/login" className="block text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md">Login</Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
