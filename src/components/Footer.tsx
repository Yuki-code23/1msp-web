import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-white border-t-4 border-brand-green">
            <div className="max-w-[1240px] mx-auto px-6 md:px-12 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-2xl font-bold tracking-tight">
                        <span className="text-brand-green">1</span>MSP
                    </div>
                    <nav>
                        <ul className="flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-400">
                            <li><Link href="#service" className="hover:text-white transition-colors">Our Service</Link></li>
                            <li><Link href="#news" className="hover:text-white transition-colors">News</Link></li>
                            <li><Link href="#company" className="hover:text-white transition-colors">Company</Link></li>
                            <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="border-t border-gray-700 mt-10 pt-8 text-center text-gray-500 text-xs">
                    &copy; {currentYear} 1MSP Inc. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
