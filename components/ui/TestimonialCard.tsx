import { FaQuoteLeft } from 'react-icons/fa';
import type { Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col">
      <FaQuoteLeft className="text-brand-blue-200 mb-3" size={20} />
      <p className="text-gray-600 text-sm leading-relaxed flex-1 italic">
        "{testimonial.quote}"
      </p>
      <div className="mt-4 pt-4 border-t border-gray-100">
        <p className="font-heading font-bold text-gray-900 text-sm">{testimonial.author}</p>
        {testimonial.title && (
          <p className="text-gray-500 text-xs mt-0.5">{testimonial.title}</p>
        )}
      </div>
    </div>
  );
}
