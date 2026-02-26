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
                Stop <span className="text-gray-400">guessing.<br className="hidden sm:block" />
                Start shipping</span> with AI.
              </h1>
              <p className="text-lg md:text-xl text-gray-500 max-w-xl leading-relaxed">
                We design, build, and deploy production-ready software using Cursor AI — the world&apos;s fastest code editor. For startups, SaaS teams, and enterprises who need to move faster.
              </p>
            </div>

            {/* Benefits List */}
            <ul className="space-y-4 md:space-y-5">
              {[
                "Cursor AI consultation to scope and architect the right build",
                "Production-ready code shipped 2–4× faster than traditional teams",
                "Seamless integrations across your existing SaaS and API stack",
                "Fewer bugs, cleaner code, faster iteration cycles",
                "Clear ownership — you get the repo, the docs, and the IP",
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
                  className="inline-flex items-center justify-center bg-black hover:bg-gray-800 text-white transition-all text-base text-center whitespace-nowrap border-[1px] border-black"
                  style={{
                    width: '280px',
                    height: '72px',
                    borderRadius: '12px',
                    padding: '20px 52px',
                    gap: '8px',
                    opacity: 1,
                    boxShadow: '2px 2px 0px 0px rgba(0,0,0,1)',
                  }}
                >
                  Book free Cursor dev call
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

      <section className="bg-gray-50 w-full border-t border-gray-200 py-12 md:py-16 min-h-[257px]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-8">
          <div className="flex flex-col lg:grid lg:grid-cols-4 gap-y-0 lg:gap-8">
            {[
              {
                icon: "/icons/Frame 2147225439 (2).png",
                title: "Full-Stack App Development",
                desc: "From architecture to deployment — faster and cleaner than traditional builds.",
              },
              {
                icon: "/icons/Frame 2147225439.png",
                title: "Dedicated Cursor Dev Teams",
                desc: "Embed a team of Cursor AI developers directly into your workflow from week one.",
              },
              {
                icon: "/icons/Frame 2147225439 (3).png",
                title: "MVP Builds in Days",
                desc: "Launch your idea before the market moves. We Refine MVPs at 3× the speed of a traditional dev team.",
              },
              {
                icon: "/icons/Frame 2147225439 (1).png",
                title: "Hourly blocks. Starts at $30/hr",
                desc: "NO HIDDEN FEES OR SURPRISES",
                label: "SCALE UP OR PAUSE ANYTIME"
              },
            ].map((feature, index) => (
              <div key={index} className="flex flex-col w-full">
                <div className="flex flex-col items-center text-center gap-4 md:gap-6 md:items-start md:text-left">
                  <div className="p-2 md:p-3 bg-white rounded-xl w-fit shadow-sm border border-gray-100">
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
