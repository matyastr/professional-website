interface YouTubeEmbedProps {
  videoId: string;
  title: string;
}

export default function YouTubeEmbed({ videoId, title }: YouTubeEmbedProps) {
  if (videoId.startsWith('REPLACE_WITH')) {
    return (
      <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-sm">
        Video placeholder: {title}
      </div>
    );
  }

  return (
    <div className="aspect-video rounded-xl overflow-hidden shadow-sm">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
