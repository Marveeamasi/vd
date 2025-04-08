'use client'
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const RecordUploadFootage = () => {
    const router = useRouter();
    const handleClick = () => {
      router.push('/');
    }

    return (
        <div className='flex flex-col z-1 relative pb-40 max-sm:p-5'>
            <div className='flex justify-center items-center relative pt-10 pb-[25px]'>
                <span onClick={() => router.back()} className='absolute text-[#8C8C8C] font-[500] text-[12px] left-10 max-sm:top-5 cursor-pointer hover:text-white'>
                    Back
                </span>
                <div className='flex flex-col items-center'>
                    <h1 className='text-[32px] font-[600]'>Upload Video</h1>
                    <p className='text-[#8C8C8C] text-[14px] font-[400]'>Upload a 2min video of you speaking</p>
                </div>
            </div>
            <div className='rounded-[65.81px] mt-10 w-[485.419px] h-[300px] max-sm:w-full max-sm:h-fit max-sm:p-5 self-center flex items-center justify-center bg-[#140926ce]'>
            <div className='rounded-[44.39px] w-[432.77px] h-[253.16px] max-sm:w-full max-sm:h-[260px] flex items-center justify-center bg-[#58585817] border border-[#88888817] backdrop-blur-2xl' >
                <div className='w-[90.55px] h-[36.537px] flex items-center justify-center cursor-pointer gap-1 bg-[#ffffff0d] rounded-[62.75px]'>
                    <Image src={'/cloud-upload.png'} width={24} height={24} className='' alt='a play icon'/>
                    <div className='text-[10.46px] font-[500] text-[#FFFFFF]'>Upload</div>
                </div>
                </div>
            </div>
            <div className='flex flex-col gap-2 items-center w-full pt-10'>
                <div className='w-[503px] max-sm:w-full'>
                <label htmlFor='up' className='text-[14px] font-semibold'>Avatar’s Name</label>
                </div>
                <input id='up' type="text" placeholder='Enter Avatar’s Name' className='p-3 text-[10px] rounded-[4px] placeholder:text-[#8C8C8C] w-[503px] max-sm:w-full outline-none h-[42px] bg-[#140926]'/>
            </div>
             <div className='self-center flex items-center gap-5 text-[12px] mt-10'>
                    <button className='rounded-[4px] bg-[#1B0C34] w-[129px] h-[35px] cursor-pointer'>Back</button>
                    <button onClick={handleClick} className='rounded-[4px] bg-[#9413E6] w-[129px] h-[35px] cursor-pointer'>Create</button>
            </div>
        </div>
    );
};

export default RecordUploadFootage;
