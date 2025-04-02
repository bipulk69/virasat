'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Send, Mail } from 'lucide-react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      // Since we're removing Firebase, we'll simulate a successful subscription
      // In a real app, you'd integrate with your preferred email service here
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network request
      setSubmitted(true);
      
      setTimeout(() => {
        setEmail('');
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error('Error submitting newsletter subscription:', err);
      setError('There was an error processing your subscription. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="newsletter" className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Left Section - Image */}
            <div className="md:w-1/2 relative">
              <div className="relative w-full h-full min-h-[400px]">
                <Image 
                  src="/images/newsletter.jpg" 
                  alt="Indian Cultural Heritage" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600/60 to-transparent flex items-center p-10">
                  <div className="text-white">
                    <h2 className="text-3xl font-bold mb-4">Stay Connected to Our Heritage</h2>
                    <p className="text-lg">
                      Discover ancient wisdom, traditional practices, and cultural insights in your inbox.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Section - Form */}
            <div className="md:w-1/2 p-10">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Subscribe to Our Newsletter</h3>
                <p className="text-gray-600">
                  Join thousands of culture enthusiasts who receive our curated cultural content, event updates, and insider information.
                </p>
              </div>
              
              {submitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  <strong className="font-bold">Thank you for subscribing!</strong>
                  <span className="block sm:inline"> We'll send you our next newsletter soon.</span>
                </div>
              ) : null}
              
              {error ? (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                  {error}
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="newsletter-email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="newsletter-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 block w-full shadow-sm focus:ring-orange-500 focus:border-orange-500 border-gray-300 rounded-md py-3"
                      placeholder="your@email.com"
                      required
                      disabled={loading}
                    />
                  </div>
                </div>
                
                <div className="flex items-center">
                  <input
                    id="newsletter-consent"
                    type="checkbox"
                    className="h-4 w-4 text-orange-600 border-gray-300 rounded"
                    required
                  />
                  <label htmlFor="newsletter-consent" className="ml-2 block text-sm text-gray-600">
                    I agree to receive cultural updates and newsletter emails from Virasat
                  </label>
                </div>
                
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 flex items-center justify-center ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {loading ? (
                    <>Processing...</>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Subscribe Now
                    </>
                  )}
                </button>
              </form>
              
              <div className="mt-6">
                <p className="text-sm text-gray-500">
                  We respect your privacy. You can unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Subscribe?</h3>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-semibold text-lg mb-2">Cultural Insights</h4>
              <p className="text-gray-600">Discover stories and meanings behind traditions and customs from across India.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-semibold text-lg mb-2">Event Updates</h4>
              <p className="text-gray-600">Be the first to know about upcoming cultural events, festivals, and exhibitions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-semibold text-lg mb-2">Exclusive Content</h4>
              <p className="text-gray-600">Get access to special articles, interviews with cultural experts, and more.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;