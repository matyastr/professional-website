import { FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';
import { socialLinks } from '@/data/social';

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  FaLinkedin,
  FaGithub,
  FaYoutube,
};

export default function Footer() {
  return (
    <footer className="bg-brand-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-heading font-bold text-lg">Tim Matyas</h3>
            <p className="text-brand-blue-200 text-sm mt-1">
              Software Engineering Leader | Entrepreneur | Percussionist
            </p>
            <p className="text-brand-blue-200 text-sm mt-1">Pittsburgh, PA</p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-blue-200 hover:text-white transition-colors p-2"
                  aria-label={link.platform}
                >
                  {Icon && <Icon size={22} />}
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-brand-blue-800 text-center text-brand-blue-200 text-sm">
          &copy; {new Date().getFullYear()} Tim Matyas. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
