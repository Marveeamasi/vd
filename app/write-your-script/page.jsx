'use client'
import AudioScriptFirst from "@/components/AudioScriptFirst";
import Navbar from "@/components/Navbar";
import Paused from "@/components/Paused";
import Played from "@/components/Played";
import Record from "@/components/Record";
import SideBarForAi from "@/components/SideBarForAi";
import TextScriptFirst from "@/components/TextScriptFirst";
import TextScriptSecond from "@/components/TextScriptSecond";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function AiPage() {
    const router = useRouter();
    const [isDrop, setIsDrop] = useState(false);
    const [isAudio, setIsAudio] = useState(false);
    const [isLong, setIsLong] = useState(false);
    const [barWidth, setBarWidth] = useState(0);
    const [isRecord, setIsRecord] = useState(false);
    const [isPlayed, setIsPlayed] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [isSecondTextWidget, setIsSecondTextWidget] = useState(false);
    const [time, setTime] = useState(0);

    const handlePlay = () => {
      setIsPlayed(true);
      setIsPaused(false);
      setIsRecord(false);
    };
    
    const handlePause = () => {
      setIsPaused(true);
      setIsPlayed(false);
      setIsRecord(false);
    };
    
    const handleRecord = () => {
      setIsRecord(true);
      setIsPlayed(false);
      setIsPaused(false);
    };
    
        useEffect(() => {
            let timer;
            if (isPlayed) {
                timer = setInterval(() => {
                    setTime((prevTime) => prevTime + 1);
                }, 1000);
            } else {
                setTime(0);
            }
            return () => clearInterval(timer);
        }, [isPlayed]);
    
        const formatTime = (seconds) => {
            const minutes = Math.floor(seconds / 60);
            const secs = seconds % 60;
            return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
        }
    
    const barRef = useRef(null);
    const progress = 40;
  
    useEffect(() => {
      setBarWidth(progress);
    }, [progress]);
            const toggleDrop = () => {
              setIsDrop(!isDrop);
            }
  
  return (
  <div className="flex w-full h-full transition-all duration-300 ease-in-out">
    <SideBarForAi/>
    <div className='w-full min-h-screen relative'>
        <Image className='absolute right-0 top-0 z-0' src='/bgtop.png' alt='bg svg' width={400} height={400}/>
        <Image className='absolute left-0 bottom-0 z-0' src='/bgbottom.png' alt='bg svg two' width={600} height={600}/>
        <Navbar toggleDrop={toggleDrop} isDrop={isDrop}/>
        <div className='flex flex-col z-1 relative pb-40 gap-2'>
               <div className='flex justify-center items-center relative pt-10'>
                   <span onClick={()=> router.back()} className='absolute text-[#8C8C8C] font-[500] text-[12px] left-10 max-sm:top-5 cursor-pointer hover:text-white'>Back</span>
                   <div className={`flex flex-col items-center ${isSecondTextWidget && 'hidden'}`}>
                   <h1 className='text-[24px] font-[600]'>Write your script</h1>
                   <p className='text-[#CF36E9] text-[10.95px] font-[400] flex items-center gap-2'>Don’t Know what to write?
                    <button className="w-[74px] h-[24px] bg-[#CF36E9] text-[#fff] rounded-[4px]">Generate</button>
                   </p>
                   </div>
{isSecondTextWidget &&  <span className='absolute text-[#CF36E9] font-[500] text-[12px] right-10 max-sm:top-5 cursor-pointer hover:text-white'>Skip to editor</span>}
               </div>
               <div className={`flex gap-3 self-center max-sm:flex-col max-sm:items-center ${isSecondTextWidget && `mt-10`}`}>
                    <Image src='/person-12.png' alt="picture of a person" width={400} height={354} className='w-[400px] max-sm:max-w-[400px] max-sm:w-full h-[354px] object-cover rounded-[8px]'/>
                    <div className="w-[302px] max-sm:w-full h-[355px] flex flex-col rounded-[8px] p-5 bg-[#140926] gap-1">
                    <div className="w-[188px] h-[45px] rounded-[60px] bg-[#261148] p-1 flex items-center gap-2">
                    <div onClick={()=> setIsAudio(false)} className={`${isAudio ? 'transparent opacity-[.5]' : 'bg-[#140926] opacity-[1]'} w-[90px] h-[36px] rounded-[60px] p-[10px] gap-[10px] flex items-center transition-all duration-300 ease-in-out cursor-pointer`}>
                    <Image src='/text-circle.png' alt="text icon" width={16} height={16} className='w-[16px] h-[16px]'/>
                    <div className="text-[12.51px]">Text</div>
                    </div>
                    <div  onClick={()=> setIsAudio(true)} className={`${isAudio ? 'bg-[#140926] opacity-[1]' : 'transparent opacity-[.5]'} w-[90px] h-[36px] rounded-[60px] p-[10px] gap-[10px] flex items-center transition-all duration-300 ease-in-out cursor-pointer`}>
                    <Image src='/mic.png' alt="text icon" width={16} height={16} className='w-[16px] h-[16px]'/>
                    <div className="text-[12.51px]">Audio</div>
                    </div>
                    </div>   
                    <>
                     {isAudio? 
                    <>
                   <AudioScriptFirst handleRecord={handleRecord}/>
                    </> 
                    :
                    <>
                    {isSecondTextWidget ?
                    <TextScriptSecond/>:
                    <TextScriptFirst setIsLong={setIsLong} isLong={isLong}/>
                    }
                    </>
                    }
                    </> 
                    </div> 
                   </div>
                   <div className="flex w-full justify-center items-center pt-5">
                   <div className="w-[686px] h-[7px] rounded-[8px] bg-[#140926] relative">
      <div
        ref={barRef}
        className="h-full rounded-[8px] bg-[#CF36E9]"
        style={{ width: `${barWidth}%` }}
      >
        <div
          className="absolute top-[-2.5px] w-[12px] h-[12px] rounded-full border border-[#00000025]"
          style={{ 
            left: `calc(${barWidth}% - 6px)`,
            backgroundColor: '#CF36E9', 
          }}
        />
      </div>
    </div>
    </div>
    <div className="text-[#8C8C8C] text-[10px] font-[300] flex self-center mt-5">Complete the step by</div>
<Link href={'/create-with-ai'} className="bg-[#9413E6] cursor-pointer rounded-[3.13px] w-[199.43] h-[31px] mt-5 flex self-center justify-center items-center text-[9.39px] font-[700]">Continue</Link>
               </div>
    </div>
     {isRecord && 
               <Record setIsRecord={setIsRecord} handlePlay={handlePlay}/>
          }
     {isPlayed && 
               <Played setIsPlayed={setIsPlayed} formatTime={formatTime} handlePause={handlePause} time={time}/>
          }
     {isPaused && 
               <Paused setIsPaused={setIsPaused} formatTime={formatTime} handlePlay={handlePlay} time={time}/>
     }
  </div>
  );
}