'use client';

import { useState } from 'react';
import { Mail } from 'lucide-react';

const FooterEmailForm = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSuccess(true);
        setEmail('');
        setTimeout(() => setSuccess(false), 3000);
      }
    } catch (error) {
      console.error('Error submitting email:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h4 className="text-lg font-semibold mb-4">Stay Updated.!</h4>
      {success ? (
        <div className="text-green-400 mb-2">Thank you for subscribing!</div>
      ) : null}
      <form onSubmit={handleSubmit} className="flex bg-white rounded-md shadow-md">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded-l-md w-full text-gray-900"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading}
        />
        <button 
          type="submit" 
          className="bg-orange-600 hover:bg-orange-700 px-6 rounded-r-md flex items-center"
          disabled={loading}
        >
          <Mail className="h-5 w-5" />
        </button>
      </form>
    </div>
  );
};

export default FooterEmailForm;