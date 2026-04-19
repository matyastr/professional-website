import type { WorkHistoryItem } from '@/types';

interface TimelineItemProps {
  item: WorkHistoryItem;
  isLast?: boolean;
}

export default function TimelineItem({ item, isLast }: TimelineItemProps) {
  return (
    <div className="relative pl-8 md:pl-10">
      {/* Vertical line */}
      {!isLast && (
        <div className="absolute left-[11px] md:left-[15px] top-6 bottom-0 w-0.5 bg-brand-blue-200" />
      )}
      {/* Dot */}
      <div className="absolute left-0 md:left-1 top-1.5 w-6 h-6 bg-brand-blue rounded-full border-4 border-brand-blue-100" />

      <div className="pb-10">
        <h3 className="font-heading font-bold text-xl text-gray-900">{item.company}</h3>
        <p className="text-gray-500 text-sm">{item.location}</p>

        {item.roles.map((role, idx) => (
          <div key={idx} className="mt-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <h4 className="font-heading font-semibold text-gray-800">{role.title}</h4>
              <span className="text-sm text-brand-blue font-medium whitespace-nowrap">
                {role.startDate} – {role.endDate}
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mt-2">{role.description}</p>
            {role.highlights && role.highlights.length > 0 && (
              <ul className="mt-2 space-y-1">
                {role.highlights.map((h, i) => (
                  <li key={i} className="text-gray-600 text-sm pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-brand-blue-200 before:rounded-full">
                    {h}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
