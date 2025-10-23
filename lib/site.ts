export const siteConfig = {
  name: "Law Office of Thomas S. Mirigliano",
  phone: "(718) 530-6548",
  phoneHref: "tel:+17185306548",
  address: "40 Wall St, 32nd Fl, New York, NY 10005",
  hours: "Open 24 Hours",
  email: "contact@mirigliano-law.com", // placeholder

  hero: {
    headline: "Vigilant Litigation. Results-Driven Representation.",
    tagline: "State and Federal Criminal Defense • Civil Rights • Employment Law • Complex Civil Litigation",
  },

  practiceAreas: [
    {
      title: "Criminal Defense",
      slug: "criminal-defense",
      description:
        "Aggressive defense in state and federal criminal matters. From arraignment through trial and appeal.",
    },
    {
      title: "Civil Rights",
      slug: "civil-rights",
      description:
        "Protecting constitutional rights. Police misconduct, wrongful arrest, and civil liberties violations.",
    },
    {
      title: "Employment Law",
      slug: "employment-law",
      description: "Advocating for employees. Discrimination, retaliation, wage disputes, and wrongful termination.",
    },
    {
      title: "Complex Civil Litigation",
      slug: "complex-civil-litigation",
      description: "Strategic representation in high-stakes civil disputes across state and federal courts.",
    },
  ],

  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Practice Areas", href: "/practice-areas" },
    { label: "Results", href: "/results" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
} as const
