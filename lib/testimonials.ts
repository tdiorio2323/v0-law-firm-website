export interface Testimonial {
  id: string
  name: string
  case: string
  rating: 5
  text: string
  date: string
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Michael R.",
    case: "Federal Criminal Defense",
    rating: 5,
    text: "The legal team was exceptional from start to finish. They took the time to explain every aspect of my case and fought tirelessly for the best possible outcome. Their knowledge of federal criminal law is unmatched, and their dedication to clients is evident in everything they do. I couldn't have asked for better representation.",
    date: "2024-09"
  },
  {
    id: "2",
    name: "Sarah L.",
    case: "Employment Discrimination",
    rating: 5,
    text: "After experiencing workplace discrimination, I felt powerless. The legal team listened to my story with compassion and immediately put together a strong case. They were responsive, professional, and achieved a settlement that exceeded my expectations. I highly recommend them to anyone facing employment issues.",
    date: "2024-08"
  },
  {
    id: "3",
    name: "David P.",
    case: "Civil Rights Violation",
    rating: 5,
    text: "When my civil rights were violated, the legal team stepped in and fought for justice. Their strategic approach and courtroom presence were impressive. They kept me informed throughout the entire process and secured a favorable outcome. If you need someone who will stand up for your rights, this firm delivers.",
    date: "2024-07"
  },
  {
    id: "4",
    name: "Jennifer M.",
    case: "Complex Civil Litigation",
    rating: 5,
    text: "The firm handled my complex civil case with incredible skill and attention to detail. They were always available to answer questions and provided clear guidance through a complicated legal process. Their expertise and commitment resulted in a successful resolution. I'm grateful for their representation.",
    date: "2024-06"
  },
  {
    id: "5",
    name: "Robert K.",
    case: "State Criminal Defense",
    rating: 5,
    text: "Facing criminal charges was the most stressful experience of my life. The legal team was there every step of the way, providing expert legal counsel and unwavering support. Their thorough preparation and courtroom advocacy made all the difference. I can't thank them enough for the outcome they achieved.",
    date: "2024-05"
  },
  {
    id: "6",
    name: "Amanda T.",
    case: "Wrongful Termination",
    rating: 5,
    text: "The attorneys here are brilliant and genuinely care about their clients. After being wrongfully terminated, they helped me understand my rights and pursued my case aggressively. Their negotiation skills are outstanding, and they secured a settlement that provided justice and closure. Highly recommended.",
    date: "2024-04"
  }
]
