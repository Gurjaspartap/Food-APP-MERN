import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
                    {/* Column 1 */}
                    <div>
                        <h2 className="text-lg font-bold mb-2">FoodApp</h2>
                        <p className="text-gray-400">
                            Delicious food delivered to your doorstep. Fast, fresh, and convenient.
                        </p>
                    </div>

                    {/* Column 2: Links */}
                    <div>
                        <h2 className="text-lg font-bold mb-2">Quick Links</h2>
                        <ul>
                            <li className="mb-2">
                                <Link to="/" className="text-gray-400 hover:text-gray-200">Home</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/menu" className="text-gray-400 hover:text-gray-200">Menu</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/order" className="text-gray-400 hover:text-gray-200">Order</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/contact" className="text-gray-400 hover:text-gray-200">Contact Us</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Social Media */}
                    <div>
                        <h2 className="text-lg font-bold mb-2">Follow Us</h2>
                        <ul>
                            <li className="mb-2">
                                <a href="https://facebook.com" className="text-gray-400 hover:text-gray-200" target="_blank" rel="noopener noreferrer">
                                    Facebook
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="https://instagram.com" className="text-gray-400 hover:text-gray-200" target="_blank" rel="noopener noreferrer">
                                    Instagram
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="https://twitter.com" className="text-gray-400 hover:text-gray-200" target="_blank" rel="noopener noreferrer">
                                    Twitter
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-6 border-t border-gray-600 pt-4 text-center">
                    <p className="text-gray-400">&copy; {new Date().getFullYear()} FoodApp. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
