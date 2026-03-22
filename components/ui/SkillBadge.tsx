import type { Skill } from '@/types';

const categoryColors: Record<string, string> = {
  language: 'bg-blue-50 text-blue-700 border-blue-200',
  scripting: 'bg-green-50 text-green-700 border-green-200',
  data: 'bg-purple-50 text-purple-700 border-purple-200',
  tool: 'bg-amber-50 text-amber-700 border-amber-200',
  platform: 'bg-rose-50 text-rose-700 border-rose-200',
  methodology: 'bg-teal-50 text-teal-700 border-teal-200',
};

interface SkillBadgeProps {
  skill: Skill;
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  const colors = categoryColors[skill.category] || 'bg-gray-50 text-gray-700 border-gray-200';

  return (
    <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full border ${colors}`}>
      {skill.name}
    </span>
  );
}
