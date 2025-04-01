'use client'
import React, { useState } from 'react'
import SearchBar from './SearchBar'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const VoicesMain = () => {
    const router = useRouter();
    

  return (
    <div className="flex flex-col gap-5 max-sm:gap-10">
     <div className='flex sm:justify-between max-sm:flex-col max-sm:gap-5 w-full items-center px-5 pt-5'>
                     <div className='text-[24px] max-sm:text-center font-[500]'>Voices</div>
                    <div className='flex items-center max-sm:flex-col gap-5'>
                   <SearchBar/>
                     <Link href={'/avatar'} className='cursor-pointer hover:animate-pulse w-[196px] rounded-[4px] bg-[#CF36E9] font-[500] h-[44px] flex gap-2 items-center text-[20px] justify-center z-2'><Image alt='add' src='/add-icon.png' width={24} height={24} className='w-[24px] h-[24]'/>Create Avatar</Link>
                    </div>
             </div>
             <div className='flex gap-1 items-center max-sm:self-center px-5'>My Avatar <div className='text-[13.43px] bg-[#341E58] w-[26px] h-[26px] rounded-[3.35px] flex justify-center items-center'>0</div></div>
            <div className="flex gap-5 px-5 flex-col items-center justify-center p-20">
                <div className="max-w-[309px] text-center text-[#D9D9D9]">Create my own voice to make my avatar sound just like me</div>
              <div className='cursor-pointer hover:animate-pulse w-[196px] rounded-[4px] bg-[#CF36E9] font-[500] h-[44px] flex gap-2 items-center text-[20px] justify-center'><Image alt='add' src='/add-icon.png' width={24} height={24} className='w-[24px] h-[24]'/>Create Voices</div>
            </div>
            <div className='flex gap-1 items-center max-sm:self-center px-5'>Public <div className='text-[13.43px] bg-[#341E58] w-[26px] h-[26px] rounded-[3.35px] flex justify-center items-center'>43</div></div>
            <div className="flex gap-5 px-5 flex-col items-center justify-center p-20">
                <div className="max-w-[309px] text-center text-[#D9D9D9]">Connect to your Eleven Labs account to access all your voices</div>
              <div className='cursor-pointer hover:animate-pulse w-[259px] rounded-[4px] bg-[#9413E64D] font-[500] h-[44px] flex items-center text-[20px] justify-center'>Connect to eleven labs</div>
            </div>
          
             </div>
  )
}

export default VoicesMain