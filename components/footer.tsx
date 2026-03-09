import Link from "next/link"
import type { FC } from "react"
import { /*Instagram,*/ Linkedin, Twitter, Facebook } from "lucide-react"

export const Footer: FC = () => {
  return (
    <footer className="py-6 md:py-8 border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
            <p className="text-base md:text-lg text-gray-500 font-medium">© {new Date().getFullYear()} Emergent App Builders. All rights reserved.</p>
            <p className="text-sm text-gray-400 font-medium">A Labs 24 Company.</p>

       
          <div className="flex items-center gap-10 justify-center flex-1">
            {/* <Link href="/about" className="text-[18px] font-semibold leading-[20px] tracking-[-0.02em] text-gray-700 hover:text-black transition-colors">
              About us
            </Link>
            <Link href="/privacy" className="text-[18px] font-semibold leading-[20px] tracking-[-0.02em] text-gray-700 hover:text-black transition-colors">
              Privacy Policy
            </Link> */}
          </div>

          {/* Right: Social Icons */}
          <div className="flex items-center gap-6 justify-end flex-1">
            {/* <Link href="https://instagram.com" target="_blank" className="p-2 text-gray-500 hover:text-black transition-colors transform hover:scale-110">
              <Instagram className="h-5 w-5 md:h-6 md:w-6" />
            </Link> */}
            <Link href="https://linkedin.com/company/emergent-app-builders" target="_blank" className="p-2 text-gray-500 hover:text-black transition-colors transform hover:scale-110">
              <Linkedin className="h-5 w-5 md:h-6 md:w-6" />
            </Link>
            <Link href="https://x.com/emergentbuilders" target="_blank" className="p-2 text-gray-500 hover:text-black transition-colors transform hover:scale-110">
              <Twitter className="h-5 w-5 md:h-6 md:w-6" />
            </Link>
            <Link href="https://facebook.com" target="_blank" className="p-2 text-gray-500 hover:text-black transition-colors transform hover:scale-110">
              <Facebook className="h-5 w-5 md:h-6 md:w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
