import { VideoRail } from "@/components/video-rail"
import { Section } from "@/components/section"

export const metadata = {
  title: "On Video - TD STUDIOS",
  description: "Watch TD STUDIOS legal team discuss legal matters, case strategies, and provide expert commentary.",
}

const videos = [
  {
    id: "1",
    title: "Understanding Your Rights During Arrest",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    platform: "youtube" as const,
  },
  {
    id: "2",
    title: "Civil Rights and Police Misconduct",
    url: "https://player.vimeo.com/video/76979871",
    platform: "vimeo" as const,
  },
  {
    id: "3",
    title: "Employment Law: Know Your Rights",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    platform: "youtube" as const,
  },
]

export default function OnVideoPage() {
  return (
    <Section>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold mb-3">On Video</h1>
        <p className="text-white/70 text-lg mb-12 max-w-3xl">
          Watch the TD STUDIOS legal team discuss important legal topics, case strategies, and provide expert
          commentary on criminal defense, civil rights, and employment law.
        </p>
        <VideoRail videos={videos} />
      </div>
    </Section>
  )
}
