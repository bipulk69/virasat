'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleNavigation = (id: string) => {
    if (isHomePage) {
      // If on home page, scroll to the section
      scrollToSection(id);
    } else {
      // If on another page, navigate to home page with hash
      window.location.href = `/#${id}`;
    }
  };

  // Close mobile menu when path changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="bg-white/90 backdrop-blur-sm fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative h-22 w-40">
              <Image 
                src="/virasat-logo.svg"
                alt="logo" 
                width={220} 
                height={200} 
                className="h-[100px] [w-120px]"
              />
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-orange-600">Home</Link>
            
            <button 
              onClick={() => handleNavigation('bridging')} 
              className="text-gray-700 hover:text-orange-600"
            >
              About Us
            </button>
            
            <Link 
              href="/tourism" 
              className="text-gray-700 hover:text-orange-600"
            >
              Tourism
            </Link>
            
            <button 
              onClick={() => handleNavigation('shop')} 
              className="text-gray-700 hover:text-orange-600"
            >
              Shop
            </button>
            
            <button 
              onClick={() => handleNavigation('newsletter')} 
              className="text-gray-700 hover:text-orange-600"
            >
              Subscribe
            </button>
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
            >
              Home
            </Link>
            
            <button 
              onClick={() => handleNavigation('bridging')}
              className="w-full text-left block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md"
            >
              About Us
            </button>
            
            <Link 
              href="/tourism"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md"
            >
              Tourism
            </Link>
            
            <button 
              onClick={() => handleNavigation('shop')}
              className="w-full text-left block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md"
            >
              Shop
            </button>
            
            <button 
              onClick={() => handleNavigation('newsletter')}
              className="w-full text-left block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md"
            >
              Subscribe
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;