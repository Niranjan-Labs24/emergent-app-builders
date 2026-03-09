import { Clock } from "lucide-react"
import { CADLENLY_URL } from "@/app/constants"

const Cadlenly = () => {
  return (
    <div className="xl:col-span-1 w-full flex justify-center lg:justify-end">
      <div className="relative w-full max-w-[480px]" style={{ 
        height: '750px',
        opacity: 1,
      }}>
        {/* Shadow/Offset Effect */}
        <div className="absolute top-2 left-2 w-full h-full bg-emergent-gradient opacity-30 rounded-[24px]"></div>

        {/* Main Widget */}
        <div className="relative h-full bg-white border-[0.5px] border-black rounded-[24px] overflow-hidden shadow-sm">
          <div className="w-full h-full">
            <iframe
              src={CADLENLY_URL}
              className="w-full h-full"
              title="Schedule a meeting with Emergent App Builder"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cadlenly
