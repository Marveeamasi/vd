'use client'

import Image from "next/image";

export default function UtilsCard() {

  return (
    <div className="w-[282px] h-[150px] rounded-[8px] bg-[#140926] flex flex-col justify-center items-center p-3 gap-1 z-[11111] absolute bottom-[-160px]">
     <div className="bg-[#9413E6] p-2 w-[262px] h-[40px] rounded-[4px] flex justify-between items-center cursor-pointer">
        <div className="font-[500] text-[12.51px]">Delete</div>
        <Image src={'/delete.png'} width={20} height={20} alt='person pics' className='w-[20px] h-[20px]'/>
     </div>
     <div className="bg-[#9413E6] p-2 w-[262px] h-[40px] rounded-[4px] flex justify-between items-center cursor-pointer">
        <div className="font-[500] text-[12.51px]">Edit</div>
        <Image src={'/pencil-edit.png'} width={20} height={20} alt='person pics' className='w-[20px] h-[20px]'/>
     </div>
     <div className="bg-[#9413E6] p-2 w-[262px] h-[40px] rounded-[4px] flex justify-between items-center cursor-pointer">
        <div className="font-[500] text-[12.51px]">Download</div>
        <Image src={'/cloud-download.png'} width={20} height={20} alt='person pics' className='w-[20px] h-[20px]'/>
     </div>
    </div>
  );
}
