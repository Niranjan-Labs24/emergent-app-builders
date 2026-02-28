import type { FC } from "react"
import { Check, Activity, Star } from "lucide-react"
import Cadlenly from "./components/cadlenly"
import Image from "next/image"
import Link from "next/link"
import { CADLENLY_URL } from "./constants"

const LandingPage: FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 md:pt-6 pb-12 md:pb-16 overflow-hidden">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-40 items-start">
          {/* Left Content */}
          <div className="space-y-8 md:space-y-12">
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-[28px] xs:text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold tracking-[-0.03em] text-black leading-tight lg:leading-[63px]">
                Describe your app.<br className="hidden sm:block" />
                <span className="text-lovable-gradient">We build it with Lovable. You ship it.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-500 max-w-xl leading-relaxed">
                We are a certified Lovable Partner agency — expert Lovable.dev builders who turn your idea into a production-ready app, faster than any traditional dev team, and without the credit-burn frustration of doing it alone.
              </p>
            </div>

            {/* Benefits List */}
            <ul className="space-y-4 md:space-y-5">
              {[
                "Expert Lovable app consultation — we scope, prompt-engineer, and architect for you",
                "Full-stack apps, MVPs, and SaaS tools shipped in days, not months",
                "Supabase backend, auth, and database — wired up correctly from the start",
                "No credit waste — we build clean, efficient Lovable prompts that get it right first time",
                "Full code ownership — GitHub handover, documented, yours forever",
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="mt-1 bg-black rounded-full p-0.5 flex-shrink-0">
                    <Check className="h-4 w-4 text-white font-bold" />
                  </div>
                  <span className="text-base md:text-xl font-bold text-black">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CTA and Trust Bar */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-6 lg:gap-8 pt-4">
              <div className="space-y-3 flex flex-col items-center sm:items-start w-full sm:w-auto">
                <Link 
                  href={CADLENLY_URL}
                  target="_blank"
                  className="inline-flex items-center justify-center bg-lovable-gradient text-white transition-all text-base text-center whitespace-nowrap border-[1px] border-black border-opacity-20 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 font-bold tracking-wide"
                  style={{
                    width: '320px',
                    height: '72px',
                    borderRadius: '12px',
                    padding: '20px 40px',
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

              {/* Rating Section */}
              <div className="flex flex-col xs:flex-row items-center gap-4 sm:gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white overflow-hidden bg-gray-200 flex-shrink-0">
                      <Image
                        src={`/Rating/Frame 214722566${i+3 > 7 ? 4 : i+3}.png`}
                        alt="User avatar"
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-1 items-center xs:items-start text-center xs:text-left">
                  <div className="flex text-yellow-400 justify-center xs:justify-start">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="h-3 w-3 sm:h-4 sm:w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base font-normal text-black leading-tight sm:whitespace-nowrap">Trusted by founders and CTOs across UK, US, EU, AU and UAE</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Booking Widget */}
          <div className="w-full flex lg:justify-end">
            <Cadlenly />
          </div>
        </div>
      </section>

      <section className="relative w-full border-t border-gray-200 py-12 md:py-16 min-h-[257px] overflow-hidden">
        {/* Background gradient overlay with low opacity */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF52B4]/5 via-[#A855F7]/5 to-[#3B82F6]/5 z-0"></div>
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-8 relative z-10">
          <div className="flex flex-col lg:grid lg:grid-cols-4 gap-y-0 lg:gap-8">
            {([] as Array<{ icon: string; title: string; desc: string; label?: string }>).concat([
              {
                icon: "/icons/Frame 2147225439 (2).png",
                title: "Idea to Live App",
                desc: "Got a startup idea or concept to validate? We build your MVP with Lovable in days — not weeks.",
              },
              {
                icon: "/icons/Frame 2147225439.png",
                title: "We Maintain What we Build",
                desc: "Post-launch support and feature additions — optional retainer",
              },
              {
                icon: "/icons/Frame 2147225439 (3).png",
                title: "SCALE UP OR PAUSE ANYTIME",
                desc: "Flexible — hourly blocks, monthly sprints, or full project",
              },
              {
                icon: "/icons/Frame 2147225439 (1).png",
                title: "NO SURPRISE COSTS",
                desc: "Transparent pricing. We handle the Lovable credits, not you.",
              },
            ]).map((feature, index) => (
              <div key={index} className="flex flex-col w-full">
                <div className="flex flex-col items-center text-center gap-4 md:gap-6 md:items-start md:text-left">
                  <div className={`p-2 md:p-3 bg-white rounded-xl w-fit shadow-sm border border-gray-100 border-b-4 ${
                      index === 0 ? 'border-b-[#FF52B4]' :
                      index === 1 ? 'border-b-[#D946EF]' :
                      index === 2 ? 'border-b-[#A855F7]' :
                      'border-b-[#3B82F6]'
                    }`}>
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={24}
                      height={24}
                      className="h-5 w-5 md:h-6 md:w-6 object-contain"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-xl font-bold text-black leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-[10px] md:text-xs text-black font-medium md:uppercase tracking-wider">
                      {feature.label || feature.desc}
                    </p>
                    {feature.label && (
                      <p className="text-xs text-gray-500 font-medium">
                        {feature.desc}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage
