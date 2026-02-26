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
    question: "Why is Cursor AI faster than traditional development?",
    answer: "Cursor AI allows us to architect, write, and debug code at 2–4× the speed of traditional IDEs. By leveraging AI-native workflows, our experts spend less time on boilerplate and more time on your core business logic."
  },
  {
    question: "How do your hourly blocks work?",
    answer: "You purchase blocks of development time that can be used for any task—from building new features to fixing bugs. This flexible model ensures you only pay for the high-impact work we deliver."
  },
  {
    question: "Can I scale my team or change models?",
    answer: "Absolutely. You can scale up to a dedicated team or pause your blocks anytime. We are built for agility, allowing you to move fast when you need to and save costs when you don't."
  },
  {
    question: "What technology stacks do you support?",
    answer: "Our experts specialize in modern full-stack development, including React, Next.js, Node.js, and various cloud infrastructures, all optimized using Cursor AI's advanced capabilities."
  }
];

export default benefitItems;