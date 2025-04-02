'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Send } from 'lucide-react';
import Navigation from '@/components/Navigation';

export default function TourismPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Simulate API call since we're removing Firebase
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitted(true);

      setTimeout(() => {
        setEmail('');
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error('Error submitting to tourism waitlist:', err);
      setError('There was an error processing your request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Tourism Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1532664189809-02133fee698d?auto=format&fit=crop&q=80"
              alt="Indian Cultural Tourism"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">Tourism</h1>
            <p className="text-xl font-bold mb-2">
              We're bringing cultural and heritage based tourism to you very shortly.
            </p>
            <p className="font-bold text-xl mb-4">Stay tuned!</p>

            {/* Waitlist Section */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Join the Waitlist</h2>

              {submitted ? (
                <div className="bg-green-700/80 text-white px-4 py-3 rounded mb-4">
                  <p>
                    Thank you for joining our waitlist! We'll notify you when we launch.
                  </p>
                </div>
              ) : null}

              {error ? (
                <div className="bg-red-700/80 text-white px-4 py-3 rounded mb-4">
                  <p>{error}</p>
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <div>
                  <label
                    htmlFor="waitlist-email"
                    className="block text-m font-medium mb-2"
                  >
                    If the beauty of our culture speaks to your soul and you're
                    ready to live it firsthand..
                  </label>
                  <input
                    id="waitlist-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 rounded text-gray-800 focus:ring-2 focus:ring-orange-500"
                    placeholder="your@email.com"
                    required
                    disabled={loading}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 flex items-center justify-center"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Join Waitlist
                </button>
              </form>
            </div>
            <div className="text-xl mb-2"></div>
          </div>
        </div>
      </div>

      {/* Love for Culture Section */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Experience the Beauty of Our Culture
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              If you are someone who loves the beauty of our culture and wants
              to experience it firsthand, our upcoming cultural tourism
              experiences are designed just for you.
            </p>
            <p className="text-lg text-gray-600">
              From ancient temples to traditional art forms, from folk music to
              culinary delights — we're preparing immersive journeys that will
              connect you with the true essence of India's heritage.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            © 2025 Virasat. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>