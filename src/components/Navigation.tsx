'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-sm fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/logo.jpg" 
                alt="logo" 
                width={250} 
                height={250} 
                className="h-[250px] [w-250px]"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-orange-600">Home</Link>
            
            <ScrollLink 
              to="bridging" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              className="text-gray-700 hover:text-orange-600 cursor-pointer"
            >
              About Us
            </ScrollLink>
            
            <Link 
              href="/tourism" 
              className="text-gray-700 hover:text-orange-600"
            >
              Tourism
            </Link>
            
            <ScrollLink 
              to="shop" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              className="text-gray-700 hover:text-orange-600 cursor-pointer"
            >
              Shop
            </ScrollLink>
            
            <ScrollLink 
              to="newsletter" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              className="text-gray-700 hover:text-orange-600 cursor-pointer"
            >
              Subscribe
            </ScrollLink>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              href="/" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            
            <ScrollLink 
              to="bridging"
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md cursor-pointer w-full text-left"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </ScrollLink>
            
            <Link 
              href="/tourism"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Tourism
            </Link>
            
            <ScrollLink 
              to="shop"
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md cursor-pointer w-full text-left"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Shop
            </ScrollLink>
            
            <ScrollLink 
              to="newsletter"
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md cursor-pointer w-full text-left"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Subscribe
            </ScrollLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;