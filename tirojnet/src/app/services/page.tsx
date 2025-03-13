import React from 'react';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';

const services = [
    {
        title: 'Network Setup & Management',
        description: 'Our comprehensive network setup and management services ensure your business has a reliable and secure network infrastructure.',
        features: [
            'Network design and implementation',
            'Security configuration and monitoring',
            '24/7 network monitoring and support',
            'Regular maintenance and updates',
            'Performance optimization',
        ],
        icon: (
            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
        ),
    },
    {
        title: 'Infrastructure & Cabling',
        description: 'Professional cabling and infrastructure solutions designed to meet your specific business needs.',
        features: [
            'Structured cabling installation',
            'Network infrastructure setup',
            'Cable management and organization',
            'Testing and certification',
            'Documentation and labeling',
        ],
        icon: (
            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
        ),
    },
    {
        title: 'Data Center Solutions',
        description: 'Secure and reliable data center services to protect your critical business data and applications.',
        features: [
            'Data center design and setup',
            'Server management and maintenance',
            'Backup and disaster recovery',
            'Security and monitoring',
            'Scalability planning',
        ],
        icon: (
            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
    },
    {
        title: 'Domain & Hosting Services',
        description: 'Complete domain registration and hosting solutions to establish and maintain your online presence.',
        features: [
            'Domain registration and management',
            'Web hosting services',
            'Email hosting',
            'SSL certificates',
            'Technical support',
        ],
        icon: (
            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
        ),
    },
];

export default function Services() {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-center mb-6">Our Services</h1>
                    <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
                        Comprehensive network solutions designed to meet the unique needs of your business.
                    </p>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                            >
                                <div className="p-8">
                                    <div className="text-blue-600 mb-6">{service.icon}</div>
                                    <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                                    <p className="text-gray-600 mb-6">{service.description}</p>
                                    <ul className="space-y-3 mb-8">
                                        {service.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center">
                                                <svg
                                                    className="w-5 h-5 text-green-500 mr-2"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        href="/contact"
                                        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                                    >
                                        Request a Quote
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-blue-600 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Need More Information?</h2>
                    <p className="text-xl mb-8">
                        Contact us today to discuss your specific needs and get a customized solution.
                    </p>
                    <Link
                        href="/contact"
                        className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>
        </Layout>
    );
} 