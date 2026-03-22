import type { Metadata } from 'next';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Tim Matyas - software engineer, entrepreneur, and percussionist passionate about team building, music, and community in Pittsburgh, PA.',
};

export default function About() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-blue-900 via-brand-blue-800 to-brand-blue text-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="font-heading font-bold text-4xl md:text-5xl">About Me</h1>
            <p className="mt-4 text-blue-100 text-lg">
              Software Engineering Leader | Entrepreneur | Percussionist
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionHeading title="My Story" />

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Throughout my life, I&apos;ve had 2 passions. One for music and one for engineering. Both
                are more similar than you might think! It&apos;s all about providing the best experiences
                for your audiences and stakeholders!
              </p>
              <p>
                I studied computer science and software engineering at Westminster College, West
                Virginia University, the University of Michigan, and from some of the best mentors in
                the industry. Likewise, I studied music and percussion at my father&apos;s music store
                Guitar Gallery, throughout high school, and at Westminster College. My professors and
                instructors in all fields taught me patience, commitment, passion, and determination in
                the face of challenges.
              </p>
              <p>
                I now share my talents with the Greater Pittsburgh Area and beyond! Do you need help
                with percussion lessons (in-person or virtual), group instruction, arrangements, pit
                percussion for musicals, general performing needs, software engineering, project
                management, team building, or leadership consulting? Please feel free to reach out to
                me!
              </p>
              <p className="text-xl font-heading font-bold text-gray-900">
                Let&apos;s make something awesome happen!
              </p>
            </div>

            <div className="mt-12 grid sm:grid-cols-3 gap-6">
              <Link
                href="/engineering"
                className="group p-6 bg-gray-50 rounded-xl hover:bg-brand-blue-50 transition-colors text-center"
              >
                <h3 className="font-heading font-bold text-gray-900 group-hover:text-brand-blue mb-1">
                  Engineering
                </h3>
                <p className="text-gray-500 text-sm">View my work experience</p>
                <FaArrowRight className="mx-auto mt-3 text-gray-400 group-hover:text-brand-blue" size={14} />
              </Link>
              <Link
                href="/entrepreneurship"
                className="group p-6 bg-gray-50 rounded-xl hover:bg-brand-blue-50 transition-colors text-center"
              >
                <h3 className="font-heading font-bold text-gray-900 group-hover:text-brand-blue mb-1">
                  Entrepreneurship
                </h3>
                <p className="text-gray-500 text-sm">Shivers Shaved Ice</p>
                <FaArrowRight className="mx-auto mt-3 text-gray-400 group-hover:text-brand-blue" size={14} />
              </Link>
              <Link
                href="/percussion"
                className="group p-6 bg-gray-50 rounded-xl hover:bg-brand-blue-50 transition-colors text-center"
              >
                <h3 className="font-heading font-bold text-gray-900 group-hover:text-brand-blue mb-1">
                  Percussion
                </h3>
                <p className="text-gray-500 text-sm">Music services & performances</p>
                <FaArrowRight className="mx-auto mt-3 text-gray-400 group-hover:text-brand-blue" size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
