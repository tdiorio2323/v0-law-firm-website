export interface Result {
  id: string
  title: string
  description: string
  outcome: string
}

export const results: Result[] = [
  {
    id: "1",
    title: "Federal Criminal Defense",
    description: "Client charged with federal conspiracy and fraud offenses carrying mandatory minimum sentence.",
    outcome: "All charges dismissed after successful motion to suppress evidence.",
  },
  {
    id: "2",
    title: "Civil Rights Violation",
    description: "Plaintiff subjected to excessive force and unlawful detention by law enforcement officers.",
    outcome: "Six-figure settlement secured prior to trial.",
  },
  {
    id: "3",
    title: "Employment Discrimination",
    description: "Executive terminated in retaliation for reporting workplace safety violations.",
    outcome: "Favorable jury verdict with full back pay, front pay, and punitive damages.",
  },
  {
    id: "4",
    title: "Complex Commercial Litigation",
    description: "Multi-party breach of contract dispute involving real estate development project.",
    outcome: "Negotiated settlement preserving client's equity interest and ongoing business relationship.",
  },
  {
    id: "5",
    title: "State Criminal Defense",
    description: "Client facing serious felony charges with potential lengthy incarceration.",
    outcome: "Reduced to misdemeanor with probation through strategic plea negotiation.",
  },
]
