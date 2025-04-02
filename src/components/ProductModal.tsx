'use client';

import { useState } from 'react';
import { X, Send } from 'lucide-react';
import Image from 'next/image';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  productDescription: string;
  productImage: string;
}

const ProductModal = ({
  isOpen,
  onClose,
  productName,
  productDescription,
  productImage
}: ProductModalProps) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/product-enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          message,
          productName
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setSubmitted(true);
      setEmail('');
      setMessage('');
      
      // Auto close after success
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 5000);
      
    } catch (err) {
      console.error('Error submitting enquiry:', err);
      setError('There was an error sending your enquiry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Close modal when clicking outside or pressing escape
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-2xl font-bold text-gray-900">{productName}</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 p-6">
          <div>
            <div className="relative h-64 w-full mb-4">
              <Image
                src={productImage}
                alt={productName}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Description</h3>
            <p className="text-gray-600 mb-4">{productDescription}</p>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-4">
              <p className="text-sm text-gray-700">
                This product is part of our cultural heritage collection, designed to bring traditional elements into modern lifestyles.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Enquire About This Product</h3>
            
            {submitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                <strong className="font-bold">Thank you for your enquiry!</strong>
                <p>We'll get back to you shortly with more information about {productName}.</p>
              </div>
            ) : null}
            
            {error ? (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                <p>{error}</p>
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="your@email.com"
                  required
                  disabled={loading || submitted}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md h-32 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder={`I'm interested in learning more about the ${productName}...`}
                  required
                  disabled={loading || submitted}
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={loading || submitted}
                className={`w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-md transition-all duration-300 flex items-center justify-center ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {loading ? (
                  <>Processing...</>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Send Enquiry
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;