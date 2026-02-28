'use client';

import { useState, useRef, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqData = [
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
          Everything you need to know about working with Lovable App Builders.
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
