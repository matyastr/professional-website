import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/ui/ServiceCard';
import TimelineItem from '@/components/ui/TimelineItem';
import SkillBadge from '@/components/ui/SkillBadge';
import ProjectCard from '@/components/ui/ProjectCard';
import { education } from '@/data/education';
import { engineeringServices } from '@/data/services';
import { workHistory } from '@/data/workHistory';
import { skills } from '@/data/skills';
import { projects } from '@/data/projects';
import type { Skill } from '@/types';

export const metadata: Metadata = {
  title: 'Engineering',
  description:
    'Software engineering leadership, project management, process improvement, and Lean Six Sigma consulting by Tim Matyas in Pittsburgh, PA.',
};

const categoryLabels: Record<string, string> = {
  language: 'Programming Languages',
  scripting: 'Scripting',
  data: 'Data, Styling & Transformation',
  tool: 'Tools & IDEs',
  platform: 'Platforms & CI/CD',
  methodology: 'Methodologies',
};

function groupSkills(skillList: Skill[]) {
  return skillList.reduce<Record<string, Skill[]>>((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});
}

export default function Engineering() {
  const grouped = groupSkills(skills);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-blue-900 via-brand-blue-800 to-brand-blue text-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading font-bold text-4xl md:text-5xl">Engineering</h1>
            <p className="mt-4 text-blue-100 text-lg">
              What I find most fascinating about engineering is the process and problem solving.
              Every new feature, bug, or improvement is a new problem to be solved!
            </p>
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Background" />
          <div className="flex flex-col-reverse md:flex-row md:gap-12 lg:gap-16">
            <div className="flex-1">
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  I graduated in 2012 from Westminster College with my Bachelor of Science in Computer
                  Science and was lucky to find a Software Engineering position at ChemADVISOR. I
                  learned so much at ChemADVISOR and made lifelong friendships. I had the opportunity
                  of having a great mentor there who pushed me into leadership. I found I loved it!
                </p>
                <p>
                  In 2015, I decided to further my education and enrolled in the Master of Science in
                  Software Engineering program at West Virginia University. I graduated in December
                  2017, and in February 2018, I received my Lean Six Sigma Green Belt certification
                  from the University of Michigan.
                </p>
                <p>My career and educational paths have led me toward the following two passions:</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    Creating the best team cultures: ones of trust, understanding, companionship,
                    accountability, and continuous learning.
                  </li>
                  <li>
                    Process improvement: delivering high-quality products and services to customers fast
                    while reducing non-value-added time.
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex-shrink-0 mb-8 md:mb-0">
              <div className="w-72 h-52 md:w-80 md:h-56 lg:w-96 lg:h-64 rounded-2xl overflow-hidden shadow-lg mx-auto">
                <Image
                  src="/images/engineering.jpg"
                  alt="Tim Matyas - Engineering"
                  width={384}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Education" />
          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div className="w-10 h-10 bg-brand-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-brand-blue font-bold text-sm">{edu.year}</span>
                </div>
                <h3 className="font-heading font-bold text-gray-900">
                  {edu.degree} {edu.field}
                </h3>
                <p className="text-brand-blue text-sm font-medium mt-1">{edu.school}</p>
                {edu.details && <p className="text-gray-500 text-sm mt-1">{edu.details}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Services" />
          <div className="grid md:grid-cols-2 gap-6">
            {engineeringServices.map((svc, i) => (
              <ServiceCard key={i} title={svc.title} description={svc.description} icon={svc.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* Work History */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Experience" />
          <div className="max-w-3xl">
            {workHistory.map((item, i) => (
              <TimelineItem key={i} item={item} isLast={i === workHistory.length - 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Skills & Tools" />
          <div className="space-y-8">
            {Object.entries(grouped).map(([category, categorySkills]) => (
              <div key={category}>
                <h3 className="font-heading font-semibold text-gray-700 mb-3 text-sm uppercase tracking-wider">
                  {categoryLabels[category] || category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill) => (
                    <SkillBadge key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Projects" subtitle="A selection of notable projects throughout my career." />
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-brand-blue">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl text-white mb-4">
            Interested in Working Together?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Whether you need engineering leadership, project management, or process improvement
            consulting — let&apos;s connect.
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
