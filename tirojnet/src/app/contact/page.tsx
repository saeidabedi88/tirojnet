import React from 'react';
import Layout from '@/components/layout/Layout';

export default function Contact() {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
                    <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
                        Get in touch with us to discuss your network solutions needs.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Address</h3>
                                    <p className="text-gray-600">
                                        123 Business Street<br />
                                        Toronto, ON M5V 2L7<br />
                                        Canada
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Phone</h3>
                                    <p className="text-gray-600">(555) 123-4567</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Email</h3>
                                    <p className="text-gray-600">info@tirojnet.com</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
                                    <p className="text-gray-600">
                                        Monday - Friday: 9:00 AM - 5:00 PM<br />
                                        Saturday - Sunday: Closed
                                    </p>
                                </div>
                            </div>

                            {/* Google Maps */}
                            <div className="mt-8 h-64 rounded-lg overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.269250541131!2d-79.38924548499999!3d43.642566179999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63bd5%3A0xae0b6d9b51a0a8d1!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1641234567890!5m2!1sen!2sca"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
} 