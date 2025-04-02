'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  ChevronRight, 
  MapPin, 
  Calendar, 
  Gift, 
  ArrowRight, 
  Mail 
} from 'lucide-react';

import Navigation from '@/components/Navigation';
import NewsletterSection from '@/components/NewsletterSection';
import FooterEmailForm from '@/components/FooterEmailForm';
import ProductModal from '@/components/ProductModal';

// Product data
const products = [
  {
    id: 'jal-netri',
    name: 'Jal Netri',
    image: '/jalneti.jpg',
    description: 'Traditional water vessel crafted by skilled artisans. The Jal Netri is designed according to ancient principles for storing and purifying water. It has been a staple in Indian households for centuries, known for its ability to naturally cool water and enhance its taste and quality.'
  },
  {
    id: 'shankh',
    name: 'Shankh',
    image: '/sankh.jpg',
    description: 'Sacred conch shell used in rituals and ceremonies. The Shankh holds great significance in Hindu rituals and is used for various ceremonial purposes. Its unique sound is believed to eliminate negative energies and create an auspicious atmosphere.'
  },
  {
    id: 'mudgar',
    name: 'Mudgar',
    image: '/mudgar.jpg',
    description: 'Traditional fitness mace used in ancient Indian exercise. The Mudgar has been a part of Indian physical training for thousands of years. This weight training tool helps build strength, endurance, and joint stability through traditional exercise movements.'
  }
];

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  // Function to handle "Learn More" clicks for products
  const handleLearnMore = (productId: string) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      setSelectedProduct(product);
      setModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-y-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <div id="home" className="relative h-screen">
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1639729098994-60116f7a7c51?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Indian Heritage"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">Discover India's Rich Cultural Heritage</h1>
            <p className="text-xl mb-8">Experience traditions that have stood the test of time, reimagined for the modern world.</p>
            <button 
              onClick={() => document.getElementById('bridging')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors flex items-center"
            >
              Explore Heritage
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section id="bridging" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Bridging Past and Present</h2>
            <p className="text-lg text-gray-600 mb-8">
              Virasat seeks to reintroduce cultural elements into daily life, making Indian traditions more accessible and relevant in the modern world. We believe that our heritage is not just about preservation—it's about living, breathing culture that evolves with us.
            </p>
          </div>
        </div>
      </section>

      {/* Our Objectives Section */}
      <section id="aboutus" className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Our Core Objectives</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-white rounded-full p-6 w-20 h-20 mx-auto mb-6 shadow-lg flex items-center justify-center">
                <MapPin className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Cultural Tourism</h3>
              <p className="text-gray-600">Curated experiences that connect you with authentic Indian traditions and heritage sites.</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full p-6 w-20 h-20 mx-auto mb-6 shadow-lg flex items-center justify-center">
                <Calendar className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Regional Festivals</h3>
              <p className="text-gray-600">Immersive participation in traditional festivals and cultural practices across India.</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full p-6 w-20 h-20 mx-auto mb-6 shadow-lg flex items-center justify-center">
                <Gift className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Cultural Products</h3>
              <p className="text-gray-600">Authentic heritage products that bring traditional elements into modern lifestyle.</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-10">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Vision</h2>
          <p className="text-xl  mx-auto font-sm text-gray-600">
            To become India's premier platform for authentic cultural experiences, making heritage accessible to all while preserving its essence for future generations.
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section id="shop" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Featured Heritage Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="p-4 flex justify-center">
                <Image
                  src="/jalneti.jpg"
                  alt="Jal Netri"
                  width={150}
                  height={150}
                  className="w-1/2 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Jal Netri</h3>
                <p className="text-gray-600 mb-4">Traditional water vessel crafted by skilled artisans.</p>
                <button 
                  onClick={() => handleLearnMore('jal-netri')}
                  className="text-orange-600 font-semibold flex items-center hover:text-orange-700"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="p-4 flex justify-center">
                <Image
                  src="/sankh.jpg"
                  alt="Shankh"
                  width={150}
                  height={150}
                  className="w-1/2 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 mt-14">Shankh</h3>
                <p className="text-gray-600 mb-4">Sacred conch shell used in rituals and ceremonies.</p>
                <button 
                  onClick={() => handleLearnMore('shankh')}
                  className="text-orange-600 font-semibold flex items-center hover:text-orange-700"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="p-4 flex justify-center">
                <Image
                  src="/mudgar.jpg"
                  alt="Mudgar"
                  width={150}
                  height={150}
                  className="w-1/2 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Mudgar</h3>
                <p className="text-gray-600 mb-4">Traditional fitness mace used in ancient Indian exercise.</p>
                <button 
                  onClick={() => handleLearnMore('mudgar')}
                  className="text-orange-600 font-semibold flex items-center hover:text-orange-700"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="relative h-[250px] w-[250px] mt-4">
                <Image 
                  src="/logo1.png" 
                  alt="logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex space-x-4 mt-4">
                <a href="https://www.instagram.com/thevirasatindia/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
                </a>
                <a href="https://www.facebook.com/thevirasatindia" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
                </a>
                <a href="https://x.com/officialvirasat" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
                </a>
              </div>
            </div>
            <div>
              <FooterEmailForm />
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            © 2025 The Virasat. All Rights Reserved.
          </div>
        </div>
      </footer>

      {/* Product Modal */}
      <ProductModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        productName={selectedProduct.name}
        productDescription={selectedProduct.description}
        productImage={selectedProduct.image}
      />
    </div>
  );
}