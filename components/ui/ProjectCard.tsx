import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-brand-blue-200 transition-all duration-300">
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="font-heading font-bold text-gray-900">{project.title}</h3>
      </div>
      <p className="text-brand-blue text-sm font-medium mb-3">{project.company}</p>
      <p className="text-gray-600 text-sm leading-relaxed mb-3">{project.description}</p>

      {project.highlights.length > 0 && (
        <ul className="space-y-1 mb-4">
          {project.highlights.map((h, i) => (
            <li key={i} className="text-gray-500 text-xs pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-brand-blue-200 before:rounded-full">
              {h}
            </li>
          ))}
        </ul>
      )}

      {project.tags && (
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-brand-blue-50 text-brand-blue text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
