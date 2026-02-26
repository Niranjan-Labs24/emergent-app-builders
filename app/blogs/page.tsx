import { Metadata } from 'next';
import PromotionBanner from '@/components/blog/PromotionBanner';

export const metadata: Metadata = {
  title: 'Blog | Cursor Coder',
  description: 'Latest insights, tutorials, and news from Cursor Coder',
};

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-[80vh]">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center py-20 md:py-32 flex-grow flex flex-col justify-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-black leading-tight mb-6">
          Blog <span className="text-gray-400">Coming Soon</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
          We&apos;re crafting deep dives on AI-native development, Cursor AI workflows, and the future of shipping software.
        </p>
        <div className="mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-black text-white rounded-full font-bold text-sm uppercase tracking-widest">
            Stay Tuned
          </div>
        </div>
      </div>

      {/* Bottom CTA Banner */}
      <PromotionBanner />
    </div>
  );
}