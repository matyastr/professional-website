interface YouTubeEmbedProps {
  url: string;
  title: string;
}

export default function YouTubeEmbed({ url, title }: YouTubeEmbedProps) {
  return (
    <div className="aspect-video rounded-xl overflow-hidden shadow-sm">
      <iframe
        className="w-full h-full"
        src={url}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
