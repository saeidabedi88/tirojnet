import React from 'react';
import Layout from '@/components/layout/Layout';

const team = [
    {
        name: 'John Doe',
        role: 'CEO & Founder',
        bio: 'With over 15 years of experience in network solutions, John leads TirojNet with a vision to provide exceptional service to businesses in Ontario.',
        image: '/images/team/john-doe.jpg',
    },
    {
        name: 'Jane Smith',
        role: 'Technical Director',
        bio: 'Jane brings expertise in network infrastructure and data center solutions, ensuring our clients receive the best technical solutions.',
        image: '/images/team/jane-smith.jpg',
    },
    {
        name: 'Mike Johnson',
        role: 'Service Manager',
        bio: 'Mike oversees our service delivery team, ensuring prompt and professional support for all our clients.',
        image: '/images/team/mike-johnson.jpg',
    },
];

export default function About() {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-center mb-6">About TirojNet</h1>
                    <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
                        Your trusted partner for network solutions in Ontario, Canada.
                    </p>
                </div>
            </section>

            {/* Company Story Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
                        <div className="prose prose-lg mx-auto">
                            <p className="mb-6">
                                Founded in 2015, TirojNet has grown from a small network solutions provider to a trusted partner
                                for businesses across Ontario. Our journey began with a simple mission: to provide reliable and
                                professional network solutions to small and medium-sized businesses.
                            </p>
                            <p className="mb-6">
                                Today, we serve hundreds of clients across the Greater Toronto Area and beyond, offering
                                comprehensive network infrastructure, cabling, data center solutions, and hosting services.
                                Our commitment to quality, innovation, and customer satisfaction has made us a leader in
                                the industry.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                            <p className="text-gray-600">
                                To provide reliable, innovative, and professional network solutions that empower businesses
                                to thrive in the digital age.
                            </p>
                        </div>
                        <div className="text-center">
                            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                            <p className="text-gray-600">
                                To be the leading network solutions provider in Ontario, known for our expertise,
                                reliability, and commitment to customer success.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                            >
                                <div className="aspect-w-1 aspect-h-1">
                                    <div className="w-full h-64 bg-gray-200">
                                        {/* Placeholder for team member image */}
                                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                                            Image Placeholder
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                                    <p className="text-blue-600 mb-4">{member.role}</p>
                                    <p className="text-gray-600">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="bg-blue-600 text-white py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <h3 className="text-xl font-bold mb-4">Excellence</h3>
                            <p>We strive for excellence in everything we do, from service delivery to customer support.</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-bold mb-4">Innovation</h3>
                            <p>We embrace new technologies and solutions to provide the best service to our clients.</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-bold mb-4">Integrity</h3>
                            <p>We maintain the highest standards of integrity and transparency in our business practices.</p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
} 