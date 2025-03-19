import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    ShieldCheckIcon,
    CloudIcon,
    WrenchScrewdriverIcon,
    ComputerDesktopIcon,
} from '@heroicons/react/24/outline';
import VideoSlideshow from '../components/VideoSlideshow';

const services = [
    {
        name: 'Network & Infrastructure',
        description: 'Comprehensive network solutions and infrastructure management for your business.',
        icon: ComputerDesktopIcon,
        href: '/services#network',
    },
    {
        name: 'Managed IT & Support',
        description: '24/7 IT support and managed services to keep your business running smoothly.',
        icon: WrenchScrewdriverIcon,
        href: '/services#managed-it',
    },
    {
        name: 'Cloud & Cybersecurity',
        description: 'Secure cloud solutions and advanced cybersecurity protection.',
        icon: CloudIcon,
        href: '/services#cloud',
    },
    {
        name: 'Digital Transformation',
        description: 'Transform your business with cutting-edge technology solutions.',
        icon: ShieldCheckIcon,
        href: '/services#digital',
    },
];

const testimonials = [
    {
        content: "TirojNet transformed our IT infrastructure and improved our efficiency by 40%.",
        author: "John Smith",
        role: "CEO, TechCorp Inc.",
    },
    {
        content: "Their cybersecurity solutions give us peace of mind in today's digital landscape.",
        author: "Sarah Johnson",
        role: "CTO, SecureSystems Ltd.",
    },
    {
        content: "The managed IT services have significantly reduced our downtime and IT costs.",
        author: "Michael Chen",
        role: "IT Director, Global Solutions",
    },
];

const Home = () => {
    return (
        <div className="bg-white">
            {/* Hero Section with Video Slideshow */}
            <div className="relative">
                <VideoSlideshow />
                <div className="absolute inset-0 flex items-center">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="max-w-2xl">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white/90 backdrop-blur-sm p-8 rounded-lg"
                            >
                                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                    Your Trusted Partner in IT Solutions
                                </h1>
                                <p className="mt-6 text-lg leading-8 text-gray-700">
                                    TirojNet provides comprehensive IT, networking, cybersecurity, and cloud services to help your business thrive in the digital age.
                                </p>
                                <div className="mt-10 flex items-center gap-x-6">
                                    <Link
                                        to="/contact"
                                        className="rounded-md bg-brand-blue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
                                    >
                                        Book a Consultation
                                    </Link>
                                    <Link to="/services" className="text-sm font-semibold leading-6 text-gray-900">
                                        Explore Services <span aria-hidden="true">→</span>
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Comprehensive IT Solutions
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        We offer a wide range of IT services to meet your business needs
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
                        {services.map((service) => (
                            <motion.div
                                key={service.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="flex flex-col"
                            >
                                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                                    <service.icon className="h-5 w-5 flex-none text-brand-green" aria-hidden="true" />
                                    {service.name}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                    <p className="flex-auto">{service.description}</p>
                                    <p className="mt-6">
                                        <Link to={service.href} className="text-sm font-semibold leading-6 text-brand-blue">
                                            Learn more <span aria-hidden="true">→</span>
                                        </Link>
                                    </p>
                                </dd>
                            </motion.div>
                        ))}
                    </dl>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="bg-gray-50 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-xl text-center">
                        <h2 className="text-lg font-semibold leading-8 tracking-tight text-brand-blue">Testimonials</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            What Our Clients Say
                        </p>
                    </div>
                    <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex flex-col justify-between bg-white p-8 shadow-lg rounded-lg"
                                >
                                    <p className="text-lg leading-7 text-gray-600">{testimonial.content}</p>
                                    <div className="mt-6">
                                        <p className="text-base font-semibold text-gray-900">{testimonial.author}</p>
                                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home; 