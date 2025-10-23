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
    text: "Tom was exceptional from start to finish. He took the time to explain every aspect of my case and fought tirelessly for the best possible outcome. His knowledge of federal criminal law is unmatched, and his dedication to his clients is evident in everything he does. I couldn't have asked for better representation.",
    date: "2024-09"
  },
  {
    id: "2",
    name: "Sarah L.",
    case: "Employment Discrimination",
    rating: 5,
    text: "After experiencing workplace discrimination, I felt powerless. Thomas listened to my story with compassion and immediately put together a strong case. He was responsive, professional, and achieved a settlement that exceeded my expectations. I highly recommend him to anyone facing employment issues.",
    date: "2024-08"
  },
  {
    id: "3",
    name: "David P.",
    case: "Civil Rights Violation",
    rating: 5,
    text: "When my civil rights were violated, Tom stepped in and fought for justice. His strategic approach and courtroom presence were impressive. He kept me informed throughout the entire process and secured a favorable outcome. If you need someone who will stand up for your rights, Thomas Mirigliano is your attorney.",
    date: "2024-07"
  },
  {
    id: "4",
    name: "Jennifer M.",
    case: "Complex Civil Litigation",
    rating: 5,
    text: "Tom handled my complex civil case with incredible skill and attention to detail. He was always available to answer questions and provided clear guidance through a complicated legal process. His expertise and commitment resulted in a successful resolution. I'm grateful for his representation.",
    date: "2024-06"
  },
  {
    id: "5",
    name: "Robert K.",
    case: "State Criminal Defense",
    rating: 5,
    text: "Facing criminal charges was the most stressful experience of my life. Thomas was there every step of the way, providing expert legal counsel and unwavering support. His thorough preparation and courtroom advocacy made all the difference. I can't thank him enough for the outcome he achieved.",
    date: "2024-05"
  },
  {
    id: "6",
    name: "Amanda T.",
    case: "Wrongful Termination",
    rating: 5,
    text: "Tom is a brilliant attorney who genuinely cares about his clients. After being wrongfully terminated, he helped me understand my rights and pursued my case aggressively. His negotiation skills are outstanding, and he secured a settlement that provided justice and closure. Highly recommended.",
    date: "2024-04"
  }
]
