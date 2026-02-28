import Image from 'next/image';
import Link from 'next/link';
import { CADLENLY_URL } from '@/app/constants';
import { Activity } from 'lucide-react';

export default function PromotionBanner() {
  return (
    <section className="relative w-full border-t border-gray-200 py-4 md:py-6 overflow-hidden">
      {/* Background gradient overlay with low opacity */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF52B4]/10 via-[#A855F7]/10 to-[#3B82F6]/10 z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          {/* Left Content */}
          <div className="flex-1 space-y-4 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black leading-tight">
              You know what&apos;s the <br />
              <span className="text-black">smartest move?</span>
            </h3>
            <p className="text-base text-gray-600 max-w-md">
              Hire expert developers at Lovable App Builders to build, manage and scale your software pipeline.
            </p>
            
            <div className="space-y-4 flex flex-col items-center md:items-start">
              <Link 
                href={CADLENLY_URL}
                target="_blank"
                className="inline-flex items-center justify-center bg-lovable-gradient text-white transition-all text-base text-center whitespace-nowrap border-[1px] border-black border-opacity-20 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 font-bold tracking-wide"
                style={{
                  width: '280px',
                  height: '60px',
                  borderRadius: '12px',
                  padding: '12px 20px',
                  gap: '8px',
                  opacity: 1,
                  boxShadow: '2px 2px 0px 0px rgba(0,0,0,1)',
                }}
              >
                Book free app-build call →
              </Link>
              <div className="w-full max-w-[280px] flex justify-center">
                <p className="text-sm text-gray-500 font-bold flex items-center gap-2">
                  <Image
                    src="/icons/15 min.png"
                    alt="15 min"
                    width={16}
                    height={16}
                    className="h-4 w-4 object-contain"
                  />
                  15-min discovery call
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full aspect-video md:aspect-none md:h-[280px] md:flex-1 relative mb-8 md:mb-0">
            <Image
              src="/team-photo.webp"
              alt="Lovable App Builders Team"
              fill
              className="object-contain"
              style={{
                maskImage: 'radial-gradient(circle at center, black 60%, transparent 95%)',
                WebkitMaskImage: 'radial-gradient(circle at center, black 60%, transparent 95%)',
              }}
              priority
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
