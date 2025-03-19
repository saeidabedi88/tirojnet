import React, { useState, useEffect, useRef } from 'react';

// Temporary placeholder images until videos are ready
const placeholderImages = {
    network: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
    it: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
    security: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b',
    digital: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa'
};

const VideoSlideshow = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRefs = useRef([]);

    // For now, we'll use only images until we have the proper videos
    const slides = [
        {
            id: 1,
            title: 'Network & Infrastructure',
            image: placeholderImages.network,
            description: 'Professional network solutions and infrastructure management'
        },
        {
            id: 2,
            title: 'Managed IT Services',
            image: placeholderImages.it,
            description: '24/7 IT support and managed services'
        },
        {
            id: 3,
            title: 'Cloud & Cybersecurity',
            image: placeholderImages.security,
            description: 'Secure cloud solutions and cybersecurity protection'
        },
        {
            id: 4,
            title: 'Digital Transformation',
            image: placeholderImages.digital,
            description: 'Modern digital workplace solutions'
        }
    ];

    useEffect(() => {
        // Auto-advance slides
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, []);

    // Handle manual navigation
    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    // Handle next/previous
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative w-full h-[600px] overflow-hidden bg-gray-900">
            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-all duration-700 transform ${index === currentSlide
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 translate-x-full'
                        }`}
                >
                    {/* Background Image */}
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                        <h3 className="text-3xl font-bold mb-2">{slide.title}</h3>
                        <p className="text-lg text-gray-200">{slide.description}</p>
                    </div>
                </div>
            ))}

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-all"
                aria-label="Previous slide"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-all"
                aria-label="Next slide"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Navigation dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide
                            ? 'bg-white w-8'
                            : 'bg-white/50 hover:bg-white/75'
                            }`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default VideoSlideshow; 