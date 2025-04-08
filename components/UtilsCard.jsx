'use client'

import Image from "next/image";

export default function UtilsCard({bg, pos, setShowEdit}) {
const handleEditClick = () => {
    if (setShowEdit) {
      setShowEdit(); 
    } else {
      console.log('No setShowEdit function provided!');
    }
  };

  return (
    <div className={`w-[282px] h-[150px] rounded-[8px] bg-[#140926] transition-all duration-300 ease-in-out flex flex-col justify-center items-center p-3 gap-1 z-[11111] absolute ${pos? pos: 'bottom-[-160px]'}`}>
     <div className={`${bg? bg : 'bg-[#9413e6]'} p-2 w-[262px] hover:animate-pulse h-[40px] rounded-[4px] flex justify-between items-center cursor-pointer`}>
        <div className="font-[500] text-[12.51px]">Delete</div>
        <Image src={'/delete.png'} width={20} height={20} alt='person pics' className='w-[20px] h-[20px]'/>
     </div>
     <div onClick={handleEditClick} className={`${bg? bg : 'bg-[#9413e6]'} p-2 w-[262px] hover:animate-pulse h-[40px] rounded-[4px] flex justify-between items-center cursor-pointer`}>
        <div className="font-[500] text-[12.51px]">Edit</div>
        <Image src={'/pencil-edit.png'} width={20} height={20} alt='person pics' className='w-[20px] h-[20px]'/>
     </div>
     <div className={`${bg? bg : 'bg-[#9413e6]'} p-2 w-[262px] hover:animate-pulse h-[40px] rounded-[4px] flex justify-between items-center cursor-pointer`}>
        <div className="font-[500] text-[12.51px]">Download</div>
        <Image src={'/cloud-download.png'} width={20} height={20} alt='person pics' className='w-[20px] h-[20px]'/>
     </div>
    </div>
  );
}
