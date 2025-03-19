import React from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Contact = () => {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-brand-blue sm:text-4xl">
                        Contact Us
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Get in touch with our team for any questions or inquiries. We're here to help you with all your IT needs.
                    </p>

                    {/* Contact Information */}
                    <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
                        <div className="flex flex-col space-y-4">
                            <div className="flex items-center space-x-4">
                                <PhoneIcon className="h-6 w-6 text-brand-green" />
                                <div>
                                    <h3 className="text-base font-semibold text-gray-900">Phone</h3>
                                    <p className="mt-1">
                                        <a href="tel:+14168903639" className="text-brand-blue hover:text-brand-green">
                                            (416) 890-3639
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <EnvelopeIcon className="h-6 w-6 text-brand-green" />
                                <div>
                                    <h3 className="text-base font-semibold text-gray-900">Email</h3>
                                    <p className="mt-1">
                                        <a href="mailto:info@tirojnet.ca" className="text-brand-blue hover:text-brand-green">
                                            info@tirojnet.ca
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <MapPinIcon className="h-6 w-6 text-brand-green" />
                                <div>
                                    <h3 className="text-base font-semibold text-gray-900">Address</h3>
                                    <p className="mt-1 text-gray-600">
                                        Unit 1, 50 Corstate Ave<br />
                                        Vaughan, ON<br />
                                        Canada
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-blue focus:ring-brand-blue sm:text-sm"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-blue focus:ring-brand-blue sm:text-sm"
                                    placeholder="you@example.com"
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
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-blue focus:ring-brand-blue sm:text-sm"
                                    placeholder="How can we help you?"
                                />
                            </div>
                            <button
                                type="submit"
                                className="inline-flex justify-center rounded-md border border-transparent bg-brand-blue px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Map */}
                    <div className="mt-16 aspect-[4/3] w-full">
                        <iframe
                            title="TirojNet Location"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            style={{ border: 0 }}
                            src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=50+Corstate+Ave,+Vaughan,+ON,+Canada"
                            allowFullScreen
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact; 