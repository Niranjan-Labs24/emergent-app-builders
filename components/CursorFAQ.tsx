'use client';

import { useState, useRef, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: "What is Cursor AI and how do you use it?",
    answer: "Cursor AI is the world's most advanced AI-native code editor. We use it to architect, write, and debug production-ready code at 2–4× the speed of traditional development workflows, ensuring faster shipping cycles without compromising quality."
  },
  {
    question: "How fast can you build an MVP?",
    answer: "Most MVPs are launched in days or weeks, rather than months. By embedding Cursor AI developers directly into your workflow, we refine and build products at 3× the speed of a traditional development team."
  },
  {
    question: "Do I own the code and the Intellectual Property?",
    answer: "Yes, 100%. You get full ownership of the repository, the documentation, and all associated Intellectual Property (IP) from day one."
  },
  {
    question: "What is your pricing model?",
    answer: "We offer flexible engagement models based on hourly blocks, starting at $30/hr. You can scale up or pause anytime with no hidden fees or surprises."
  },
  {
    question: "Which regions do you support?",
    answer: "We are trusted by founders and CTOs across the UK, US, EU, AU, and UAE, providing seamless integration across various time zones and SaaS stacks."
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
          Everything you need to know about working with Cursor Coder.
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
