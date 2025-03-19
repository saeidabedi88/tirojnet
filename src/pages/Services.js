import React from 'react';
import {
    ServerIcon,
    ShieldCheckIcon,
    CloudArrowUpIcon,
    CpuChipIcon,
    WrenchScrewdriverIcon,
    ArrowPathIcon,
    DevicePhoneMobileIcon,
    CommandLineIcon,
} from '@heroicons/react/24/outline';

const serviceCategories = [
    {
        title: 'Network & Infrastructure',
        description: 'Build and maintain robust network infrastructure for your business',
        icon: ServerIcon,
        services: [
            {
                name: 'Network Setup & Management',
                description: 'Professional network design, implementation, and ongoing management services',
            },
            {
                name: 'Infrastructure & Cabling',
                description: 'Structured cabling solutions and infrastructure planning',
            },
            {
                name: 'Data Center Solutions',
                description: 'Scalable and secure data center design and management',
            },
        ],
    },
    {
        title: 'Managed IT & Support',
        description: '24/7 IT support and comprehensive managed services',
        icon: WrenchScrewdriverIcon,
        services: [
            {
                name: 'Help Desk Support',
                description: 'Round-the-clock technical support for your team',
            },
            {
                name: 'System Monitoring',
                description: 'Proactive monitoring and maintenance of your IT systems',
            },
            {
                name: 'IT Consulting',
                description: 'Strategic IT planning and consulting services',
            },
        ],
    },
    {
        title: 'Cloud & Cybersecurity',
        description: 'Secure cloud solutions and comprehensive security services',
        icon: ShieldCheckIcon,
        services: [
            {
                name: 'Cloud Migration',
                description: 'Seamless transition to cloud-based infrastructure',
            },
            {
                name: 'Security Assessment',
                description: 'Comprehensive security audits and vulnerability testing',
            },
            {
                name: 'Threat Protection',
                description: '24/7 threat monitoring and incident response',
            },
        ],
    },
    {
        title: 'Digital Transformation',
        description: 'Transform your business with cutting-edge technology solutions',
        icon: CpuChipIcon,
        services: [
            {
                name: 'Process Automation',
                description: 'Streamline operations with intelligent automation',
            },
            {
                name: 'Digital Workspace',
                description: 'Modern workplace solutions for remote and hybrid teams',
            },
            {
                name: 'Business Analytics',
                description: 'Data-driven insights for better decision making',
            },
        ],
    },
];

const Services = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative isolate overflow-hidden bg-gradient-to-b from-brand-blue/10">
                <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-brand-blue sm:text-4xl">
                            Our Services
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Comprehensive IT solutions tailored to your business needs. We provide end-to-end services
                            to help your organization thrive in the digital age.
                        </p>
                    </div>
                </div>
            </div>

            {/* Service Categories */}
            <div className="mx-auto max-w-7xl px-6 pb-24 sm:pb-32 lg:px-8">
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
                    {serviceCategories.map((category) => (
                        <div
                            key={category.title}
                            className="bg-white p-8 rounded-2xl shadow-sm ring-1 ring-gray-200 hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="flex items-center">
                                <category.icon className="h-8 w-8 text-brand-green" />
                                <h3 className="ml-4 text-xl font-semibold text-gray-900">{category.title}</h3>
                            </div>
                            <p className="mt-4 text-gray-600">{category.description}</p>

                            <div className="mt-8 space-y-6">
                                {category.services.map((service) => (
                                    <div key={service.name} className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex h-2 w-2 mt-2 rounded-full bg-brand-green" />
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-base font-medium text-gray-900">{service.name}</h4>
                                            <p className="mt-1 text-sm text-gray-600">{service.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Call to Action */}
            <div className="bg-brand-blue py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Ready to transform your IT infrastructure?
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                            Get in touch with our team to discuss how we can help your business succeed
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="/contact"
                                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-brand-blue shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                Contact Us
                            </a>
                            <a href="/about" className="text-sm font-semibold leading-6 text-white">
                                Learn more <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services; 