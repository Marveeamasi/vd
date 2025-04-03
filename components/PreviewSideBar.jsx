'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import ToggleSwitch from './ToggleSwitch'
import PreviewSideBarSelect from './PreviewSideBarSelect'

const PreviewSideBar = ({showSlide}) => {
  const [blurbg, setBlurbg] = useState(false);
  const [selectName, setSelectName] = useState('');

const handleSelectClick = (name) => {
  setBlurbg(!blurbg);
  setSelectName(name);
}

  return (
    <aside className={`bg-[#261148] w-fit h-screen pt-10 pl-5 max-xl:pl-0 pb-5 pr-0 flex flex-col gap-5 font-[500] transition-all duration-300 ease-in-out text-[16px] sticky left-0 top-0 z-30 max-xl:fixed max-xl:left-0 max-xl:top-0 max-xl:bg-transparent max-xl:backdrop-blur-sm`}>
     <Image src={'/logo.png'} width={214} height={44} className='w-[214px] h-[44px] max-xl:hidden' alt='logo'/>
     <div className='overflow-y-scroll max-xl:pt-[70px] overflow-x-hidden'>
     <div className='bg-[#140926] max-xl:bg-[#140926c0] relative max-xl:backdrop-blur-sm max-xl:border max-xl:border-[#ffffff17] rounded-[8px] p-5 flex gap-5 flex-col w-[295px]'>
     <PreviewSideBarSelect setBlurbg={setBlurbg} selectName={selectName} setSelectName={setSelectName} handleSelectClick={handleSelectClick} pos={'top-[110%]'} type={''} name={'Avatar'} options={['John Doe','Simon Phil', 'Ruda Mark', 'Jane Path']} image={'/user-circle.png'}/>
      <PreviewSideBarSelect setBlurbg={setBlurbg} selectName={selectName} setSelectName={setSelectName} handleSelectClick={handleSelectClick} pos={'top-[110%]'} type={''} name={'Camera'} options={['Face','Side Profile']} image={'/face-id.png'}/>
      <div className={`flex relative ${selectName==='Body Language'? 'z-50':'z-10'} items-center justify-between text-[12.51px] font-[700]`}>
        Zoom
        <ToggleSwitch/>
      </div>
      <PreviewSideBarSelect setBlurbg={setBlurbg} selectName={selectName} setSelectName={setSelectName} handleSelectClick={handleSelectClick} pos={'top-[110%]'} type={''} name={'Body Language'} options={['Gesture 1','Gesture 2']} image={'/video-camera-ai.png'}/>
      <div className={`flex relative  ${selectName==='Ai Caption'? 'z-50':'z-10'} items-center justify-between text-[12.51px] font-[700]`}>
        Caption
        <ToggleSwitch/>
      </div>
      <PreviewSideBarSelect setBlurbg={setBlurbg} selectName={selectName} setSelectName={setSelectName} handleSelectClick={handleSelectClick} pos={'top-[110%]'} type={'caption'} name={'Ai Caption'} options={['DYNAMIC', 'PROFESSIONAL', 'DOCUMENTARY']} image={'/closed-caption.png'}/>
      <PreviewSideBarSelect setBlurbg={setBlurbg} selectName={selectName} setSelectName={setSelectName} handleSelectClick={handleSelectClick} pos={'bottom-[110%]'} type={'background'} name={'Background'} options={['None','Upload', 'Mist','Mist','Mist','Mist']} image={''}/>
      <PreviewSideBarSelect setBlurbg={setBlurbg} selectName={selectName} setSelectName={setSelectName} handleSelectClick={handleSelectClick} pos={'bottom-[110%]'} type={''} name={'Music'} options={['Cyberpunk Electro','Cyberpunk Electro','Dramatic tension 2']} image={'/music-note-square.png'}/>
      <PreviewSideBarSelect setBlurbg={setBlurbg} selectName={selectName} setSelectName={setSelectName} handleSelectClick={handleSelectClick} pos={'bottom-[110%]'} type={''} name={'Voice'} options={['John Doe', 'John Doe', 'John Doe', 'John Doe', 'John Doe']} image={'/voice.png'}/>
     {blurbg && <div className='bg-[#0000001A] backdrop-blur-[2px] absolute top-0 w-full h-full z-20'></div>}
     </div>
     </div>
    </aside>
  )
}

export default PreviewSideBar
