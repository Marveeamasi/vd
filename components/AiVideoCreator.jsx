'use client'
import React, { useState } from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import AiVideoCreatorCards from './AiVideoCreatorCards'
import SearchBar from './SearchBar'

const AiVideoCreator
 = () => {
    const [isDrop, setIsDrop] = useState(false)
  
    const toggleDrop = () => {
      setIsDrop(!isDrop);
    }
    
  
  return (
    <div className='w-full min-h-screen relative'>
        <Image className='absolute right-0 top-0 z-0' src='/bgtop.png' alt='bg svg' width={400} height={400}/>
        <Image className='absolute left-0 bottom-0 z-0' src='/bgbottom.png' alt='bg svg two' width={600} height={600}/>
        <Navbar toggleDrop={toggleDrop} isDrop={isDrop}/>
        <div className='flex flex-col p-5 pt-10 pb-40'>
        <div className='flex sm:justify-between max-sm:flex-col max-sm:gap-5 w-full items-center'>
            <div className='flex items-center gap-2'>
                <Image src={'/ai-magic.png'} width={24.35} height={24.35} alt='ai magic' className='w-[24.35px] h-[24.35px]'/>
                <div className='text-[24px]  font-[500]'>Ai Video Creator</div>
               </div>
               <div className='flex items-center max-sm:flex-col gap-5'>
              <SearchBar/>
                <div className='cursor-pointer hover:animate-pulse w-[92px] h-[24px] flex gap-2 items-center text-[14px] justify-center'>Upload <Image alt='drop down' src='/chevron-down.png' width={12} height={6} className='w-[12px] h-[6]'/></div>
               </div>
        </div>
        <div className='py-[10px] px-[20px] rounded-[8px] border max-sm:gap-2 max-sm:flex-col bg-[#BB5ACC5E] border-[#CF36E9] flex justify-between items-center mt-10'>
            <div className='text-[23.37px] font-[500] max-sm:text-center max-sm:text-sm'>Get more and take your content to the next level</div>
            <div className='flex items-center gap-2'>
                <Image src={'/ai-magic.png'} width={24} height={24} alt='ai magic' className='w-[24px] h-[24px]'/>
                <div className='text-[16px] font-[500]'>UPGRADE</div>
               </div>
        </div>
        <div className='flex gap-1 items-center py-2 max-sm:self-center'>Video <div className='text-[13.43px] bg-[#341E58] w-[26px] h-[26px] rounded-[3.35px] flex justify-center items-center'>3</div></div>
        <div className='grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5'>
        <AiVideoCreatorCards heading={'Web developer Alex Story'} image={'/person3.png'} time={'Edited 1 Day Ago'} isGenerated={false}/>
        <AiVideoCreatorCards heading={'Web developer Alex Story'} image={'/person1.png'} time={'Edited 1 Day Ago'} isGenerated={true}/>
        <AiVideoCreatorCards heading={'Web developer Alex Story'} image={'/person2.png'} time={'Edited 1 Day Ago'} isGenerated={true}/>
        </div>
        </div>
    </div>
  )
}

export default AiVideoCreator
