'use client'
import Image from "next/image";
import UtilsCard from "./UtilsCard";
import { useState } from "react";

export default function AiVideoCreatorCards({isGenerated, heading, image, time}) {
    const [showUtils, setShowUtils] = useState(false);

    const toggleShowUtils = () => {
        setShowUtils(!showUtils)
    }

  return (
     <div className='flex flex-col gap-2 relative'>
                {showUtils && <UtilsCard/>}
              <Image src={image} width={300} height={180} alt='person pics' className='w-full h-[180px] object-cover'/>
              <div className='cursor-pointer flex items-center justify-between text-sm font-[500] w-full'>
                {heading}
                <Image onClick={toggleShowUtils} src={'/vertical-circles.png'} width={24} height={24} alt='ai magic' className='w-[24px] h-[24px] cursor-pointer'/>
              </div>
              <div className={`flex items-center gap-5`}>
                {isGenerated && <div className='text-sm text-[#CF36E9]'>GENERATED</div>}
                <div className='text-xs font-[500] text-[#8C8C8C]'>{time}</div>
              </div>
              </div>
  );
}
