import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="fixed w-full z-50 bg-white border-b border-gray-100">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12 h-20 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800 tracking-tight flex items-center gap-1">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <img src="/logo.png" alt="1msp" className="h-10 md:h-12 w-auto" />
          </Link>
        </div>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-10 text-[15px] font-bold text-gray-700 tracking-wide">
            <li><Link href="#service" className="hover:text-brand-green transition-colors">Our Service</Link></li>
            <li><Link href="#news" className="hover:text-brand-green transition-colors">News</Link></li>
            <li><Link href="#company" className="hover:text-brand-green transition-colors">Company</Link></li>
            <li>
              <a href="https://hp-recruit.net/1msp/" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 border-2 border-brand-green text-brand-green rounded-full font-bold hover:bg-brand-green hover:text-white transition-all">
                採用情報
              </a>
            </li>
            <li>
              <Link href="#contact" className="inline-block px-8 py-3 bg-brand-orange text-white rounded-full font-bold shadow-sm hover:bg-orange-500 transition-all hover:shadow-md">
                お問い合わせ
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
