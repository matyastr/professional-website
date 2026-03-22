import type { Metadata } from 'next';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/ui/ServiceCard';
import YouTubeEmbed from '@/components/ui/YouTubeEmbed';
import { percussionIntro, percussionServices, videoShowcases, schoolDistricts, musicals } from '@/data/percussion';

export const metadata: Metadata = {
  title: 'Percussion',
  description:
    'Percussion lessons, Broadway musical pit percussion, drum line instruction, and Pittsburgh Steeline performances by Tim Matyas.',
};

export default function Percussion() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-blue-900 via-brand-blue-800 to-brand-blue text-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading font-bold text-4xl md:text-5xl">Percussion</h1>
            <p className="mt-4 text-blue-100 text-lg">
              Performing, teaching, and creating music in the Greater Pittsburgh Area.
            </p>
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionHeading title="My Musical Journey" />
            <div className="space-y-4 text-gray-600 leading-relaxed">
              {percussionIntro.background.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Services" />
          <div className="grid md:grid-cols-2 gap-6">
            {percussionServices.map((svc, i) => (
              <ServiceCard key={i} title={svc.title} description={svc.description} />
            ))}
          </div>
        </div>
      </section>

      {/* Video Showcases */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Video Showcases" />
          <div className="grid md:grid-cols-2 gap-8">
            {videoShowcases.map((video, i) => (
              <div key={i}>
                <YouTubeEmbed videoId={video.videoId} title={video.title} />
                <h3 className="font-heading font-bold text-gray-900 mt-3">{video.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{video.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School Districts & Musicals */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <SectionHeading title="Drum Line Instruction" />
              <ul className="space-y-2">
                {schoolDistricts.instruction.map((d) => (
                  <li key={d} className="text-gray-700 font-medium">{d}</li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading title="Musical Pit Performances" />
              <ul className="space-y-2">
                {schoolDistricts.musicalPit.map((d) => (
                  <li key={d} className="text-gray-700 font-medium">{d}</li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading title="Musicals" />
              <ul className="space-y-2">
                {musicals.map((m) => (
                  <li key={m} className="text-gray-700 font-medium">{m}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-brand-blue">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl text-white mb-4">
            Need a Percussionist?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Whether it&apos;s pit percussion for your next musical, private lessons, or drum line
            instruction — let&apos;s talk!
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-brand-blue font-medium rounded-lg hover:bg-blue-50 transition-colors"
          >
            Contact Me <FaArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
