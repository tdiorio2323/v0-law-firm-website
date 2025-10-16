interface Video {
  id: string
  title: string
  url: string
  platform: "youtube" | "vimeo"
}

interface VideoRailProps {
  videos: Video[]
}

export function VideoRail({ videos }: VideoRailProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {videos.map((video) => (
        <div
          key={video.id}
          className="group rounded-2xl border border-white/10 bg-white/5 p-3 shadow-sm hover:shadow-lg hover:border-gold/30 transition-all duration-300"
        >
          <div className="relative aspect-video rounded-xl overflow-hidden bg-black">
            <iframe
              src={video.url}
              title={video.title}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="mt-3 px-1 text-sm font-medium text-white/90 group-hover:text-gold transition-colors">
            {video.title}
          </p>
        </div>
      ))}
    </div>
  )
}
