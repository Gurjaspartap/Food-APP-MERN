import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import FoodCard from '../components/Card';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';

const images = [
    "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1670601440146-3b33dfcd7e17?q=80&w=1876&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const Home = () => {
    const [foodCategory, setFoodCategory] = useState([]);
    const [foodItem, setFoodItem] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const loadData = async () => {
        let response = await fetch("http://localhost:3000/api/fooddata", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        });
        response = await response.json();
        setFoodItem(response[0]);
        setFoodCategory(response[1]);
    };

    useEffect(() => {
        loadData();
    }, []);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
    };

    const filteredFoodItems = foodItem.filter(item =>
        item.name.toLowerCase().includes(searchQuery)
    );

    return (
        <div className='h-screen'>
            <Navbar />

            <div className="relative">
                {/* Carousel with Search Bar on Top */}
                <Carousel images={images} />

                {/* Search Bar */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md px-4">
                    <div className="relative bg-white rounded-full shadow-lg">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className="w-full py-3 px-4 rounded-full text-gray-700 focus:outline-none"
                        />
                        <button className="absolute right-3 top-2 bottom-2 bg-blue-600 text-white rounded-full px-4">
                            Search
                        </button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto p-4 mt-4">
                {foodCategory.length > 0
                    ? foodCategory.map((data) => (
                        <div key={data._id} className="mb-8">
                            <h2 className="text-xl font-bold mb-4">{data.CategoryName}</h2>
                            <hr className="mb-4 border-gray-300" />

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {filteredFoodItems.length > 0
                                    ? filteredFoodItems.filter(item => item.CategoryName === data.CategoryName)
                                        .map(filterItems => (
                                            <div key={filterItems._id} className="bg-white p-4 rounded-lg shadow-lg">
                                                <FoodCard
                                                    foodName={filterItems.name}
                                                    foodImage={filterItems.img}
                                                    priceHalf={filterItems.options[0].half}
                                                    priceFull={filterItems.options[0].full}
                                                />
                                            </div>
                                        ))
                                    : <div className="text-gray-500 col-span-full">No data available for this category</div>}
                            </div>
                        </div>
                    ))
                    : <div className="text-center text-gray-500">No categories available</div>
                }
            </div>

            <Footer />
        </div>
    );
};

export default Home;
