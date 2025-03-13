import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">TirojNet</h3>
                        <p className="text-gray-400">
                            Your trusted partner for network solutions in Ontario, Canada.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-400 hover:text-white">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-gray-400 hover:text-white">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-white">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-white">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Our Services</h3>
                        <ul className="space-y-2">
                            <li className="text-gray-400">Network Setup & Management</li>
                            <li className="text-gray-400">Infrastructure & Cabling</li>
                            <li className="text-gray-400">Data Center Solutions</li>
                            <li className="text-gray-400">Domain & Hosting Services</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>Ontario, Canada</li>
                            <li>Phone: (555) 123-4567</li>
                            <li>Email: info@tirojnet.com</li>
                            <li>Hours: Mon-Fri 9:00 AM - 5:00 PM</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} TirojNet. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 