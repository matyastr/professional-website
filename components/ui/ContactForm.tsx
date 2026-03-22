'use client';

import { useForm, ValidationError } from '@formspree/react';
import { FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

export default function ContactForm() {
  const [state, handleSubmit] = useForm('YOUR_FORMSPREE_ID');

  if (state.succeeded) {
    return (
      <div className="text-center py-12">
        <FaCheckCircle className="text-green-500 mx-auto mb-4" size={48} />
        <h3 className="font-heading font-bold text-2xl text-gray-900 mb-2">Thank you!</h3>
        <p className="text-gray-600">I'll get back to you as soon as possible.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
          placeholder="Your name"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
          placeholder="your@email.com"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
          placeholder="(555) 555-5555"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          How can I help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all resize-y"
          placeholder="Tell me about your project or question..."
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full sm:w-auto px-8 py-3 bg-brand-blue text-white font-medium rounded-lg hover:bg-brand-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
      >
        <FaPaperPlane size={14} />
        {state.submitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
