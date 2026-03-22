interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionHeading({ title, subtitle, light }: SectionHeadingProps) {
  return (
    <div className="mb-10">
      <h2
        className={`font-heading font-bold text-3xl md:text-4xl uppercase tracking-wide ${
          light ? 'text-white' : 'text-gray-900'
        }`}
      >
        {title}
      </h2>
      <div className="mt-3 w-16 h-1 bg-brand-blue rounded-full mx-auto md:mx-0" />
      {subtitle && (
        <p className={`mt-4 text-lg ${light ? 'text-brand-blue-200' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
