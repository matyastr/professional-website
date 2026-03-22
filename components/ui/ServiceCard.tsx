import { FaCode, FaUsers, FaChartLine, FaTasks, FaDrum, FaMusic, FaGraduationCap, FaBullhorn } from 'react-icons/fa';

const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  FaCode,
  FaUsers,
  FaChartLine,
  FaTasks,
  FaDrum,
  FaMusic,
  FaGraduationCap,
  FaBullhorn,
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: string;
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const Icon = icon ? iconMap[icon] : null;

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-brand-blue-200 transition-all duration-300">
      {Icon && (
        <div className="w-12 h-12 bg-brand-blue-50 rounded-lg flex items-center justify-center mb-4">
          <Icon className="text-brand-blue" size={24} />
        </div>
      )}
      <h3 className="font-heading font-bold text-lg text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
