import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaCode, FaDrum, FaStore } from 'react-icons/fa';
import SectionHeading from '@/components/ui/SectionHeading';
import TestimonialCard from '@/components/ui/TestimonialCard';
import { testimonials } from '@/data/testimonials';

export const metadata: Metadata = {
  title: 'Tim Matyas | Software Engineering Leader, Entrepreneur, Percussionist',
  description:
    'Tim Matyas - Software engineering leader, entrepreneur, and percussionist in the Greater Pittsburgh Area. Leadership consulting, percussion lessons, and more.',
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-blue-900 via-brand-blue-800 to-brand-blue text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="flex flex-col-reverse md:flex-row md:items-center md:gap-12 lg:gap-16">
            <div className="max-w-3xl flex-1">
              <p className="text-brand-blue-200 font-medium mb-3 uppercase tracking-wider text-sm">
                Welcome
              </p>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
                Hi there! I&apos;m{' '}
                <span className="text-brand-blue-200">Tim Matyas</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-blue-100 leading-relaxed max-w-2xl">
                Software engineering leader, entrepreneur, and percussionist living in the Greater
                Pittsburgh Area. My mission is to help as many individuals and teams realize their
                potential, deliver amazing results while building great cultures, and create life-long
                relationships.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-blue font-medium rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Get in Touch <FaArrowRight size={14} />
                </Link>
                <Link
                  href="/engineering"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
                >
                  View My Work
                </Link>
              </div>
            </div>
            <div className="flex-shrink-0 mb-8 md:mb-0">
              <div className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-white/20 shadow-xl mx-auto">
                <Image
                  src="/images/profile.jpg"
                  alt="Tim Matyas"
                  width={288}
                  height={288}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionHeading title="What I Do" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Link
              href="/engineering"
              className="group bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:border-brand-blue-200 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 bg-brand-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                <FaCode className="text-brand-blue group-hover:text-white" size={24} />
              </div>
              <h3 className="font-heading font-bold text-lg text-gray-900 mb-2">Engineering</h3>
              <p className="text-gray-600 text-sm">
                Software engineering, leadership development, process improvement, and project
                management.
              </p>
            </Link>

            <Link
              href="/entrepreneurship"
              className="group bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:border-brand-blue-200 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 bg-brand-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                <FaStore className="text-brand-blue group-hover:text-white" size={24} />
              </div>
              <h3 className="font-heading font-bold text-lg text-gray-900 mb-2">Entrepreneurship</h3>
              <p className="text-gray-600 text-sm">
                Co-owner of Shivers Shaved Ice & Dirty Soda, Pittsburgh&apos;s premier mobile dessert vendor.
              </p>
            </Link>

            <Link
              href="/percussion"
              className="group bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:border-brand-blue-200 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 bg-brand-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                <FaDrum className="text-brand-blue group-hover:text-white" size={24} />
              </div>
              <h3 className="font-heading font-bold text-lg text-gray-900 mb-2">Percussion</h3>
              <p className="text-gray-600 text-sm">
                Percussion lessons, Broadway musical percussion, drum line instruction, and Pittsburgh
                Steeline.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionHeading title="What People Say" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-brand-blue">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Have a project in mind or want to connect? I&apos;d love to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-brand-blue font-medium rounded-lg hover:bg-blue-50 transition-colors"
          >
            Contact Me Today <FaArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
