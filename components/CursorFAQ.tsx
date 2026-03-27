'use client';

import { useState, useRef, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: "What is Emergent.sh and what is an Emergent app builder?",
    answer: "Emergent.sh is an AI-powered app development platform that builds full-stack web and mobile applications from plain language descriptions. The platform uses a multi-stage build pipeline — covering architecture, design, quality assurance, deployment, and live monitoring — to generate production-ready code. An Emergent app builder is an expert developer who knows how to use Emergent.sh professionally: how to scope projects correctly, structure build instructions to get clean results, handle backend integrations, configure authentication, and manage App Store publishing. Emergent App Builders is a specialist agency providing these expert services — we use Emergent.sh as our primary development tool."
  },
  {
    question: "Can Emergent really build mobile apps for the App Store and Play Store?",
    answer: "Yes — and this is one of Emergent's key differentiators. Emergent's Mobile Agent builds native iOS and Android apps using React Native and Expo, which can be published directly to Apple's App Store and Google's Play Store. In fact, 80–90% of Emergent builds are mobile applications, making it the most capable AI platform for mobile development. Our team handles the full submission process — from building the app to managing App Store certificates and publishing."
  },
  {
    question: "How is hiring an Emergent builder different from using Emergent myself?",
    answer: "Emergent.sh is powerful, but getting consistent production-quality results takes experience. Without knowing how to scope a project correctly inside Emergent, users burn through credits, hit dead ends, and end up with apps that look fine but break under real usage. Our developers have built dozens of apps on the platform — we know what works, what to avoid, and how to structure builds that produce clean, scalable, secure code rather than a fragile prototype."
  },
  {
    question: "Does Emergent's monitoring really auto-fix live apps?",
    answer: "Yes — Emergent.sh includes a built-in Ops stage that monitors live applications and can automatically detect and patch issues if something crashes or underperforms after deployment. This is a genuine platform capability that reduces the need for reactive human debugging. As part of our service, we configure and enable this monitoring layer on all production builds so your app keeps running smoothly without you needing to manage it manually."
  },
  {
    question: "Do I own the code that Emergent builds?",
    answer: "Yes — 100%. Emergent supports GitHub export, and all source code, database schema, and assets belong to you. We deliver the full repository with documentation on project completion. NDAs are signed before any work begins, and you retain complete intellectual property ownership with no strings attached and no platform lock-in."
  },
  {
    question: "What types of apps can you build with Emergent?",
    answer: "Using Emergent.sh as our build platform, we can deliver web apps, native mobile apps (iOS + Android), SaaS platforms, internal tools, admin dashboards, e-commerce stores, AI-powered products, CRMs, ERPs, logistics tools, booking systems, and marketplace apps. Emergent supports complex logic, third-party API integrations (Stripe, Shopify, OpenAI, and more), authentication, and enterprise-grade security."
  }
];

function FAQItem({
  faq,
  index,
  openIndex,
  onToggle,
}: {
  faq: { question: string; answer: string };
  index: number;
  openIndex: number | null;
  onToggle: (i: number) => void;
}) {
  const isOpen = openIndex === index;
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div
      className={`border border-gray-100 rounded-[2rem] transition-all duration-300 bg-white ${
        isOpen ? 'shadow-sm' : 'hover:shadow-md'
      }`}
    >
      <button
        onClick={() => onToggle(index)}
        className="w-full flex items-center justify-between px-8 py-7 text-left group"
      >
        <span className="text-base md:text-lg font-bold text-black pr-8 leading-snug group-hover:text-gray-500 transition-colors">
          {faq.question}
        </span>
        <span className="flex-shrink-0 transition-transform duration-300">
          {isOpen ? (
            <Minus className="h-6 w-6 text-black" />
          ) : (
            <Plus className="h-6 w-6 text-black" />
          )}
        </span>
      </button>

      <div
        style={{ height, overflow: 'hidden', transition: 'height 0.3s ease' }}
      >
        <div ref={contentRef} className="px-8 pb-7">
          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function CursorFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
          Frequently asked questions
        </h2>
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto">
          Everything you need to know about working with Emergent App Builders.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            faq={faq}
            index={index}
            openIndex={openIndex}
            onToggle={toggle}
          />
        ))}
      </div>
    </section>
  );
}
