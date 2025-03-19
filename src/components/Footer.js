import React from 'react';
import { Link } from 'react-router-dom';

const navigation = {
    main: [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
    ],
    services: [
        { name: 'Network & Infrastructure', href: '/services#network' },
        { name: 'Managed IT & Support', href: '/services#managed-it' },
        { name: 'Cloud & Cybersecurity', href: '/services#cloud' },
        { name: 'Digital Transformation', href: '/services#digital' },
    ],
    social: [
        {
            name: 'LinkedIn',
            href: '#',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-.88-.06-1.273-.084-1.441h-2.399v1.441h-1.5v-3h1.5v-1.5c0-1.5.75-2.25 2.25-2.25 1.5 0 2.25.75 2.25 2.25v1.5h1.5v3h-1.5v5.604z"
                    />
                </svg>
            ),
        },
        {
            name: 'Twitter',
            href: '#',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
            ),
        },
    ],
};

const Footer = () => {
    return (
        <footer className="bg-white">
            <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
                <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
                    {navigation.main.map((item) => (
                        <div key={item.name} className="pb-6">
                            <Link to={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                {item.name}
                            </Link>
                        </div>
                    ))}
                </nav>
                <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-4">
                    {navigation.services.map((item) => (
                        <Link key={item.name} to={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="mt-10 flex justify-center space-x-10">
                    {navigation.social.map((item) => (
                        <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">{item.name}</span>
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                        </a>
                    ))}
                </div>
                <div className="mt-10 text-center">
                    <div className="text-sm text-gray-500 space-y-2">
                        <div className="font-semibold text-brand-blue">Contact Us</div>
                        <p className="hover:text-brand-blue">
                            <a href="tel:+14168903639">(416) 890-3639</a>
                        </p>
                        <p>
                            <a href="mailto:info@tirojnet.ca" className="hover:text-brand-blue">
                                info@tirojnet.ca
                            </a>
                        </p>
                        <p className="mt-2">
                            Unit 1, 50 Corstate Ave<br />
                            Vaughan, ON<br />
                            Canada
                        </p>
                    </div>
                </div>
                <p className="mt-10 text-center text-xs leading-5 text-gray-500">
                    &copy; {new Date().getFullYear()} TirojNet. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer; 