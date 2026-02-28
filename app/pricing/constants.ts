export interface BenefitItem {
  package: string;
  labels: string[];
  bestFor?: string;
}

export const benefitItems: BenefitItem[] = [
  {
    package: 'STARTER',
    labels: ['Direct access to Cursor AI experts', 'Basic app creation and logic modification', 'Clean codebase documentation', 'Email support (48-hour response time)', 'Up to 2 revision rounds per feature']
  },
  {
    package: 'PLUS',
    labels: ['Multiple project features and complex UI',
      'Advanced API integrations',
      'System architecture planning',
      'Dedicated project manager assignment',
      'Comprehensive documentation package',
      'Priority email + Slack support (24-hour response)',
      'Performance and security review'],
    bestFor: 'Best Suited for Growing companies, established businesses, agencies with multiple automation needs'
  },
  {
    package: 'PRO',
    labels: [
      'Monthly strategy and roadmap calls',
      'Dedicated development team (2-3 Cursor experts)',
      'Priority support (10-hour response, 3-hour for urgent)',
      'Production monitoring and cloud setup',
      'Weekly progress reporting',
      'Enterprise-grade security implementations',
      'Full-stack database expertise',
      'Scalable backend systems',
      'Advanced error handling and recovery',
      '15% discount on additional blocks',
      'Dedicated Project Slack Channel'
    ],
    bestFor: 'Best suited for Enterprises, SaaS startups, and teams requiring ongoing high-speed development support'
  }
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const pricingFAQs: FAQItem[] = [
  {
    question: "What kinds of apps can you build with Lovable?",
    answer: "We build SaaS platforms, MVPs, web apps, customer portals, internal tools, e-commerce stores, AI-powered products, dashboards, booking systems, marketplace apps, and landing pages — all using Lovable.dev as the primary build tool. If it can be described in plain English and runs in a browser, we can build it with Lovable."
  },
  {
    question: "Do I own the code you build?",
    answer: "Yes — 100%. All code, database schema, and assets are yours from day one. We deliver the project via a clean GitHub repository with full documentation. We sign NDAs before starting any work, and you retain complete intellectual property ownership with no strings attached."
  },
  {
    question: "Can you rescue or fix my existing Lovable project?",
    answer: "Yes — this is one of our most popular services. Whether your Lovable app is stuck in a loop, has broken Supabase connections, security vulnerabilities, or simply isn't doing what you need, we diagnose and fix the issue efficiently."
  },
  {
    question: "How much does it cost to build a Lovable app?",
    answer: "Our pricing is flexible and transparent. You can choose from hourly blocks for small tasks, or volume packages for larger projects. We handle all Lovable platform credits and subscriptions, so you never have to worry about surprise costs."
  }
];

export default benefitItems;