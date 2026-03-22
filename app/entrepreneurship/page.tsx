import type { Metadata } from 'next';
import { FaExternalLinkAlt, FaSnowflake, FaGlassCheers, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import SectionHeading from '@/components/ui/SectionHeading';
import { shivers } from '@/data/entrepreneurship';

export const metadata: Metadata = {
  title: 'Entrepreneurship',
  description:
    "Co-owner of Shivers Shaved Ice & Dirty Sodas, Pittsburgh's premier mobile shaved ice and dirty soda vendor for events, fundraisers, and parties.",
};

export default function Entrepreneurship() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-blue-900 via-brand-blue-800 to-brand-blue text-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading font-bold text-4xl md:text-5xl">Entrepreneurship</h1>
            <p className="mt-4 text-blue-100 text-lg">
              Building community through small business in the Greater Pittsburgh Area.
            </p>
          </div>
        </div>
      </section>

      {/* Shivers Overview */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionHeading title={shivers.name} subtitle={shivers.tagline} />
            <p className="text-gray-600 leading-relaxed text-lg mb-6">{shivers.description}</p>

            <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
              <FaMapMarkerAlt className="text-brand-blue" />
              <span>Greater Pittsburgh & Gibsonia, PA</span>
            </div>

            <a
              href={shivers.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue text-white font-medium rounded-lg hover:bg-brand-blue-700 transition-colors"
            >
              Visit shiverspgh.com <FaExternalLinkAlt size={12} />
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="What We Offer" />
          <div className="grid md:grid-cols-3 gap-6">
            {shivers.services.map((svc, i) => {
              const icons = [FaSnowflake, FaGlassCheers, FaCalendarAlt];
              const Icon = icons[i] || FaSnowflake;
              return (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                >
                  <div className="w-12 h-12 bg-brand-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-brand-blue" size={24} />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-gray-900 mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{svc.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Highlights" />
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
            {shivers.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <FaCheckCircle className="text-brand-blue mt-0.5 shrink-0" size={16} />
                <p className="text-gray-700 text-sm">{h}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
