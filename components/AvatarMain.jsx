'use client'
import React, { useState } from 'react'
import SearchBar from './SearchBar'
import Image from 'next/image'
import PublicAvatar from './PublicAvatar'
import CreateNewAvatarPrompt from './CreateNewAvatarPrompt'

const AvatarMain = () => {
    const [showCreatePrompt, setShowCreatePrompt] = useState(false);

    const toggleCreate = () => {
         setShowCreatePrompt(!showCreatePrompt)
    }

  return (
    <div className="flex flex-col gap-5 max-sm:gap-10">
     <div className='flex sm:justify-between max-sm:flex-col max-sm:gap-5 w-full items-center px-5 pt-5'>
                     <div className='text-[24px] max-sm:text-center font-[500]'>Avatar</div>
                    <div className='flex items-center max-sm:flex-col gap-5'>
                   <SearchBar/>
                     <div onClick={toggleCreate} className='cursor-pointer hover:animate-pulse w-[196px] rounded-[4px] bg-[#CF36E9] font-[500] h-[44px] flex gap-2 items-center text-[20px] justify-center z-2'><Image alt='add' src='/add-icon.png' width={24} height={24} className='w-[24px] h-[24]'/>Create Avatar</div>
                    </div>
             </div>
             <div className='flex gap-1 items-center max-sm:self-center px-5'>My Avatar <div className='text-[13.43px] bg-[#341E58] w-[26px] h-[26px] rounded-[3.35px] flex justify-center items-center'>0</div></div>
            <div className="flex gap-5 px-5 max-sm:flex-col max-sm:items-center ">
              <div className="relative w-[221.75px] h-[280px] justify-center items-center border rounded-[16.35px] border-dashed bg-[#9513e615] border-[#9413E6]">
              <Image className='w-[221.75px] h-[280px] object-cover' src='/user-card.png' alt='bg svg' width={221.75} height={280}/>
              <div className="flex absolute bottom-0 max-sm:w-full flex-col gap-3 p-5 max-sm:items-center">
                <div className="text-[24.53px] max-sm:text-center font-[500]">My Avatar</div>
                <div className="text-[14.31px] max-sm:text-center font-[500]">0 Style</div>
              </div>
              </div>
              <div className="flex flex-col gap-5 max-sm:items-center">
                <div className="max-w-[309px] max-sm:text-center text-[#D9D9D9]">Create your own avatar, adapted to your needs, with your own face.</div>
              <div onClick={toggleCreate} className='cursor-pointer hover:animate-pulse w-[196px] rounded-[4px] bg-[#CF36E9] font-[500] h-[44px] flex gap-2 items-center text-[20px] justify-center'><Image alt='add' src='/add-icon.png' width={24} height={24} className='w-[24px] h-[24]'/>Create Avatar</div>
              </div>
            </div>
            <div className='flex gap-1 items-center max-sm:self-center px-5'>Public <div className='text-[13.43px] bg-[#341E58] w-[26px] h-[26px] rounded-[3.35px] flex justify-center items-center'>43</div></div>
            <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 px-5 gap-2">
              <PublicAvatar image={'/person5.png'} title={"Jessie Ronie"} subImage={'/person5.png'} style={'1'}/>
              <PublicAvatar image={'/person6.png'} title={"Sophie Wang"} subImage={'/person6.png'} style={'2'}/>
              <PublicAvatar image={'/person7.png'} title={"Chang"} subImage={'/person7.png'} style={'1'}/>
              <PublicAvatar image={'/person4.png'} title={"Jerry"} subImage={'/person4.png'} style={'1'}/>
              <PublicAvatar image={'/person8.png'} title={"Paul"} subImage={'/person8.png'} style={'3'}/>
              <PublicAvatar image={'/person9.png'} title={"Locason"} subImage={'/person9.png'} style={'1'}/>
              <PublicAvatar image={'/person10.png'} title={"Judith"} subImage={'/person10.png'} style={'3'}/>
              <PublicAvatar image={'/person11.png'} title={"Russel"} subImage={'/person11.png'} style={'1'}/>
            </div>
           {showCreatePrompt && <CreateNewAvatarPrompt toggleCreate={toggleCreate}/>}
             </div>
  )
}

export default AvatarMain