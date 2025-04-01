import Image from 'next/image'
import React from 'react'

const Paused = ({setIsPaused,formatTime,handlePlay,time}) => {
  return (
    <div onClick={()=> setIsPaused(false)} className='backdrop-blur-[4px] transition-all duration-300 ease-in-out fixed top-0 left-[10%] max-xl:left-0 z-20 w-screen h-screen flex justify-center items-center'>
                    <div id='card' onClick={(e) => {e.stopPropagation()}}  className='w-[400px] max-sm:w-full flex flex-col justify-center items-center rounded-[16px] p-5 gap-3 bg-[#140926]'>
                         <div className='flex w-full flex-col justify-center items-center'>
                            <div className='flex gap-[10px] justify-center items-center font-[600]'><Image src='/mic.png' alt="picture of a record" width={20} height={20} className='w-[20px] h-auto'/>Record Audio</div>
                            <div className='text-[12px] font-extralight text-center'>Record your script (max 20 minutes)</div>
                         </div>
        
                        <div className='w-[319px] h-[59.422px] rounded-[32px] bg-[#261148] flex justify-center items-center mt-20'>
                        <Image src="/playrecord.png" alt="amplitude" width={40} height={40} className={`w-[40px] h-[40px] border border-[#00000031] rounded-full cursor-pointer`}/>
                         <Image src="/amp.png" alt="amplitude" width={255.41} height={38.572} className={`w-[255.41px] h-[38.572px]`}/>
                        </div>
                         <div className='flex items-center justify-center gap-1'>
                            <Image src="/reddot.png" alt='dot' width={15} height={15} className='w-[15px] h-auto'/>
                            <div id='count'>{formatTime(time)}</div>
                         </div>
                         <div className='flex items-center gap-2 self-center mt-5'>
                            <button onClick={handlePlay} className='rounded-[3.13px] cursor-pointer border-[1px] border-[#9413E6] text-[#9413E6] text-[9.39px] font-[700] w-[122px] h-[31px]'>Rerecord</button>
                            <button className='rounded-[3.13px] cursor-pointer bg-[#9413E6] text-[9.39px] font-[700] w-[122px] h-[31px]'>Continue</button>
                         </div>
                    </div>
                   </div>
  )
}

export default Paused