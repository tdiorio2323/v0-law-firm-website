export interface FAQ {
  id: string
  question: string
  answer: string
  category: "general" | "criminal" | "civil-rights" | "employment" | "litigation"
}

export const faqs: FAQ[] = [
  // General Questions
  {
    id: "1",
    category: "general",
    question: "How much does a consultation cost?",
    answer: "We offer free initial consultations for all potential clients. This allows us to understand your case and discuss how we can help without any financial obligation on your part."
  },
  {
    id: "2",
    category: "general",
    question: "What should I bring to my first consultation?",
    answer: "Please bring any relevant documents related to your case, including court papers, police reports, employment records, contracts, or correspondence. If you don't have all documents, don't worry—we can still begin discussing your situation and obtain necessary records as we move forward."
  },
  {
    id: "3",
    category: "general",
    question: "How do you charge for legal services?",
    answer: "Fee structures vary depending on the type of case. Criminal defense cases are typically handled on a flat-fee basis, while civil matters may be handled on an hourly rate or contingency fee arrangement. We'll discuss fees transparently during your initial consultation."
  },
  {
    id: "4",
    category: "general",
    question: "Are you available for emergencies?",
    answer: "Yes, we are available 24/7 for urgent legal matters. If you've been arrested or are facing an immediate legal crisis, call us right away at (718) 530-6548. Time-sensitive situations require immediate attention, and we're here to help."
  },
  {
    id: "5",
    category: "general",
    question: "What areas do you serve?",
    answer: "We represent clients throughout New York and New Jersey in both state and federal courts. Our practice includes all five boroughs of New York City, Long Island, Westchester County, and across New Jersey."
  },

  // Criminal Defense Questions
  {
    id: "6",
    category: "criminal",
    question: "What should I do if I'm arrested?",
    answer: "Exercise your right to remain silent and immediately request an attorney. Do not answer questions or make statements to law enforcement without legal representation present. Contact us as soon as possible—the earlier we're involved, the better we can protect your rights and build your defense."
  },
  {
    id: "7",
    category: "criminal",
    question: "What's the difference between state and federal criminal charges?",
    answer: "State charges are prosecuted in state courts for violations of state law, while federal charges involve violations of federal law and are prosecuted in federal court. Federal cases typically carry harsher penalties and more complex procedures. We have extensive experience in both state and federal criminal defense."
  },
  {
    id: "8",
    category: "criminal",
    question: "Can you help with white-collar crime cases?",
    answer: "Absolutely. We regularly handle white-collar criminal matters including fraud, embezzlement, money laundering, tax crimes, and other financial crimes. These cases require sophisticated legal strategies and thorough investigation, which we provide to all our clients."
  },
  {
    id: "9",
    category: "criminal",
    question: "What happens if I'm found guilty?",
    answer: "If convicted, we continue fighting for you through sentencing advocacy and, if appropriate, the appeals process. We work to minimize penalties, explore alternative sentencing options, and preserve all your rights throughout every stage of the criminal justice process."
  },

  // Civil Rights Questions
  {
    id: "10",
    category: "civil-rights",
    question: "What constitutes police misconduct?",
    answer: "Police misconduct includes excessive force, false arrest, illegal search and seizure, malicious prosecution, and violations of constitutional rights. If you believe law enforcement violated your civil rights, we can evaluate your case and pursue justice on your behalf."
  },
  {
    id: "11",
    category: "civil-rights",
    question: "How long do I have to file a civil rights lawsuit?",
    answer: "Statutes of limitations vary depending on the type of claim and jurisdiction. Generally, civil rights claims must be filed within 1-3 years of the incident. It's crucial to consult with an attorney as soon as possible to preserve your rights and meet all deadlines."
  },
  {
    id: "12",
    category: "civil-rights",
    question: "Can I sue the police department for civil rights violations?",
    answer: "Yes, you may have grounds to sue both individual officers and the police department or municipality under Section 1983 of the Civil Rights Act. We'll investigate your case, gather evidence, and determine the best legal strategy to hold wrongdoers accountable."
  },

  // Employment Law Questions
  {
    id: "13",
    category: "employment",
    question: "What types of workplace discrimination are illegal?",
    answer: "Federal and state laws prohibit discrimination based on race, color, religion, sex, national origin, age, disability, genetic information, pregnancy, and sexual orientation. If you've experienced adverse employment actions based on any protected characteristic, you may have a discrimination claim."
  },
  {
    id: "14",
    category: "employment",
    question: "Can I be fired for reporting illegal activity at work?",
    answer: "No. Whistleblower protection laws shield employees who report illegal conduct, safety violations, or fraud from retaliation. If you've been terminated or suffered adverse action for reporting wrongdoing, you may have a strong legal claim."
  },
  {
    id: "15",
    category: "employment",
    question: "What is wrongful termination?",
    answer: "Wrongful termination occurs when an employee is fired for illegal reasons, such as discrimination, retaliation for whistleblowing, or violation of employment contracts. While New York and New Jersey are at-will employment states, there are important exceptions that protect workers from unlawful termination."
  },
  {
    id: "16",
    category: "employment",
    question: "Do I need to file with the EEOC before suing my employer?",
    answer: "For federal discrimination claims, you generally must file a charge with the Equal Employment Opportunity Commission (EEOC) or the corresponding state agency before filing a lawsuit. We can guide you through this process and help you meet all procedural requirements."
  },

  // Complex Civil Litigation Questions
  {
    id: "17",
    category: "litigation",
    question: "What makes civil litigation 'complex'?",
    answer: "Complex civil litigation typically involves high-stakes disputes with multiple parties, extensive discovery, expert witnesses, and sophisticated legal issues. These cases require strategic planning, thorough investigation, and aggressive representation—all of which we provide."
  },
  {
    id: "18",
    category: "litigation",
    question: "How long does a civil lawsuit take?",
    answer: "The timeline varies greatly depending on the complexity of the case, court schedules, and whether the case settles or goes to trial. Simple cases may resolve in several months, while complex litigation can take years. We'll provide realistic expectations based on your specific situation."
  },
  {
    id: "19",
    category: "litigation",
    question: "Should I settle or go to trial?",
    answer: "This decision depends on many factors including the strength of your case, potential damages, costs of litigation, and your personal goals. We'll provide candid advice and help you make an informed decision. While we're always prepared to fight in court, we'll also pursue favorable settlements when appropriate."
  },
  {
    id: "20",
    category: "litigation",
    question: "What if I can't afford to pay for litigation upfront?",
    answer: "Depending on the type of case, we may be able to work on a contingency fee basis, meaning we only get paid if we win your case. For other matters, we offer flexible payment arrangements. We'll discuss all options during your consultation."
  }
]
