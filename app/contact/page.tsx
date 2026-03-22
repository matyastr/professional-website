import type { Metadata } from 'next';
import { FaLinkedin, FaGithub, FaYoutube, FaMapMarkerAlt } from 'react-icons/fa';
import SectionHeading from '@/components/ui/SectionHeading';
import ContactForm from '@/components/ui/ContactForm';
import { socialLinks } from '@/data/social';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Tim Matyas for software engineering consulting, percussion lessons, event bookings, or general inquiries in the Greater Pittsburgh Area.',
};

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  FaLinkedin,
  FaGithub,
  FaYoutube,
};

export default function Contact() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-blue-900 via-brand-blue-800 to-brand-blue text-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="font-heading font-bold text-4xl md:text-5xl">Contact Me</h1>
            <p className="mt-4 text-blue-100 text-lg">
              Contact me today with any questions, bookings, or inquiries. I&apos;d be happy to help!
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <SectionHeading title="Send a Message" />
              <ContactForm />
            </div>

            <div className="lg:col-span-2">
              <SectionHeading title="Connect With Me" />

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-brand-blue mt-1" size={18} />
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-gray-600 text-sm">Pittsburgh, PA</p>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-6">
                  <p className="font-medium text-gray-900 mb-4">Social</p>
                  <div className="flex gap-3">
                    {socialLinks.map((link) => {
                      const Icon = iconMap[link.icon];
                      return (
                        <a
                          key={link.platform}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-brand-blue-50 rounded-lg flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-colors"
                          aria-label={link.platform}
                        >
                          {Icon && <Icon size={18} />}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
