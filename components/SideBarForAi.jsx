'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';

const SideBarForAi = () => {
  const [isShow, setIsShow] = useState(false);

  const toggleShow = () => {
    setIsShow(!isShow);
  }

  return (
    <aside className='max-xl:fixed bg-[#261148] max-xl:border-r-0 max-xl:border-t-4 max-xl:border-t-[#1409261a] max-xl:rounded-t-xl max-xl:top-auto max-xl:z-50 max-xl:py-[25px] max-xl:bottom-[0px] max-xl:w-screen max-xl:h-fit max-xl:left-0 max-xl:bg-[#261148] w-[380px] h-screen border-r-4 border-r-[#1409261a] flex flex-col font-[500] text-[16px] sticky left-0 top-0 z-30'>
        <div className='w-fit max-xl:hidden h-fit py-[41px] px-[24px] mb-[20px]'><Image width={214} height={44} src={`/logo.png`} alt={"logo"} className='w-[214px] h-[44px]'/></div>
        <div onClick={toggleShow} className={`${isShow && `opacity-40`} pl-[13px] flex items-center justify-between max-w-[236px]  cursor-pointer mb-[25px]`}>
              <div className='flex items-center gap-2'>
                <Image src={'/ai-magic.png'} width={20} height={20} alt='ai magic' className='w-[20px] h-[20px]'/>
                <div className='text-[14px] font-[500]'>Ai Video Creator</div>
              </div>
              <Image src={'/arrow-down.png'} width={20} height={20} alt='ai magic' className='w-[20px] h-[20px]'/>
        </div>
       {isShow && <div className="pl-[13px] cursor-pointer">
        <div className='flex flex-col gap-7 pl-7'>
          <div className='flex gap-2 items-center'>
          <Image src={'/dot3.png'} width={11} height={11} alt='ai magic' className='w-[11px] h-[11px]'/>
          <Link href={'/avatar'} className='font-[500] text-[14px]'>Avatar</Link>
          </div>
          <Link href={'/voices'} className='font-[500] text-[14px]'>Voices</Link>
        </div>
        </div>}
    </aside>
  )
}

export default SideBarForAi 