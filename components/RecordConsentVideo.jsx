'use client'
import { useRouter } from 'next/navigation';
import ConsentAlert from './ConsentAlert';
import Image from 'next/image';

const RecordConsentVideo = () => {
    const router = useRouter();

    return (
        <div className='flex flex-col z-1 relative pb-40'>
            <div className='flex justify-center items-center relative pt-10 pb-[25px]'>
                <span onClick={() => router.back()} className='absolute text-[#8C8C8C] font-[500] text-[12px] left-10 max-sm:top-5 cursor-pointer hover:text-white'>
                    Back
                </span>
                <div className='flex flex-col items-center'>
                    <h1 className='text-[32px] font-[600]'>Record consent video</h1>
                    <p className='text-[#8C8C8C] text-[14px] font-[400]'>Your clone needs to be you</p>
                </div>
            </div>

            <div className='flex self-center pt-[25px]'>
               <ConsentAlert/>
            </div>
            <div className='rounded-[65.81px] mt-10 w-[485.419px] h-[300px] max-sm:w-full max-sm:h-fit max-sm:p-5 self-center flex items-center justify-center bg-[#140926ce]'>
            <div className='rounded-[44.39px] w-[432.77px] h-[253.16px] max-sm:w-full max-sm:h-[260px] flex items-center justify-center bg-[#58585817] border border-[#88888817] backdrop-blur-2xl' >
                <div className='w-[90.55px] h-[36.537px] flex items-center justify-center cursor-pointer gap-1 bg-[#ffffff0d] rounded-[62.75px]'>
                    <Image src={'/play.png'} width={8.2} height={11.9} className='' alt='a play icon'/>
                    <div className='text-[10.46px] font-[500] text-[#FFFFFF87]'>Upload</div>
                </div>
                </div>
            </div>
             <div className='self-center flex items-center gap-5 text-[12px] mt-10'>
                    <button className='rounded-[4px] bg-[#1B0C34] w-[129px] h-[35px] cursor-pointer'>Back</button>
                    <button className='rounded-[4px] bg-[#9413E6] w-[129px] h-[35px] cursor-pointer'>Continue</button>
            </div>
        </div>
    );
};

export default RecordConsentVideo;
