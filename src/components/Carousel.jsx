import React, { useState } from 'react';

const Carousel = ({ images = [] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to go to the next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Function to go to the previous slide
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    if (!images || images.length === 0) {
        return (
            <div className="relative w-full h-[500px] bg-gray-800 flex justify-center items-center">
                <p className="text-white text-lg">No images to display</p>
            </div>
        );
    }

    return (
        <div className="relative w-full h-[500px] bg-gray-800 overflow-hidden">
            {/* Carousel Images */}
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}

            {/* Previous and Next Buttons */}
            <button
                onClick={prevSlide}
                aria-label="Previous Slide"
                className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-3 focus:outline-none"
            >
                &#10094;
            </button>
            <button
                onClick={nextSlide}
                aria-label="Next Slide"
                className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-3 focus:outline-none"
            >
                &#10095;
            </button>
        </div>
    );
};

export default Carousel;
