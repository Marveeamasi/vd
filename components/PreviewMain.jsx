'use client';
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import PaymentAlert from './PaymentAlert';
import Generating from './Generating';
import Trouble from './Trouble';

const PreviewMain = () => {
  const [isLandScape, setIsLandScape] = useState(true);
  const [splitPosition, setSplitPosition] = useState(50);
  const thumbnailRef = useRef(null);
  const dragRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [showPaymentAlert, setShowPaymentAlert] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [error, setError] = useState(false);

  const handleNextStep = () => {
    console.log('Loading complete! Moving to next step...');
    setError(true);
    setGenerating(false);
  }

  const handleRetry = () => {
     setError(false);
     setGenerating(true);
  }

  const handleCancel = () => {
    setError(false);
    setGenerating(false);
  }

  const handleMove = (e) => {
    if (isDragging && thumbnailRef.current && dragRef.current) {
      const rect = thumbnailRef.current.getBoundingClientRect();
      const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
      const newX = clientX - rect.left;
      const newPosition = (newX / rect.width) * 100;
      setSplitPosition(Math.max(0, Math.min(100, newPosition)));
    }
  };

  const handleBtn = () => {
    setShowPaymentAlert(false);
    setGenerating(true);
  }

  const handleStart = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMove);
      window.addEventListener('mouseup', handleEnd);
      window.addEventListener('touchmove', handleMove, { passive: false });
      window.addEventListener('touchend', handleEnd);
    } else {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleEnd);
    }
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging]);

  return (
    <div className='flex flex-col p-5 pt-4 pb-40 gap-3 items-center'>
      <textarea
        placeholder="What's today's weather and how is it going"
        className='text-[12px] font-[400] w-full p-5 z-5 resize-none max-sm:h-[150px] outline-none placeholder:text-[#D9D9D9] rounded-[8px] h-[193px] bg-[#140926]'
      />
      <div
        className={`${isLandScape ? 'w-[100%] rounded-[66px] max-sm:h-[180px] max-sm:rounded-[20px]' : 'w-[323px] max-sm:w-[200px] rounded-[15px] max-sm:h-[320px] max-sm:rounded-[10px]'} h-[454px] transition-all duration-300 ease-in-out z-5 bg-[black]`}
      ></div>
      <div className='flex items-center justify-between z-5  w-full px-5 max-sm:flex-col max-sm:justify-center max-sm:gap-5'>
        <div className='flex items-center gap-[10px] max-sm:w-full max-sm:justify-between'>
          <div
            onClick={() => setIsLandScape(!isLandScape)}
            className='flex items-center p-1 rounded-[4px] text-[#9413E6] text-[12px] bg-[white] gap-3 cursor-pointer'
          >
            {isLandScape ? 'Landscape' : 'Portrait'}
            <Image
              className='w-[16px] h-[16px]'
              src={'/arrow-down-purple.png'}
              width={16}
              height={16}
              alt='arrow'
            />
          </div>
          <Image
            className='w-[24px] h-[24px] cursor-pointer hover:animate-pulse'
            src={'/image-add.png'}
            width={24}
            height={24}
            alt='add'
          />
        </div>
        <div className='flex items-center justify-center gap-[10px] max-sm:gap-10'>
          <Image
            className='w-[20px] h-[20px] cursor-pointer hover:animate-pulse'
            src={'/go-backward-10-sec.png'}
            width={20}
            height={20}
            alt='back 10s'
          />
          <Image
            className='w-[20px] h-[20px] cursor-pointer hover:animate-pulse'
            src={'/arrow-left-double.png'}
            width={20}
            height={20}
            alt='prev'
          />
          <Image
            className='w-[20px] h-[20px] cursor-pointer hover:animate-pulse'
            src={'/pause.png'}
            width={20}
            height={20}
            alt='pause'
          />
          <Image
            className='w-[20px] h-[20px] cursor-pointer hover:animate-pulse'
            src={'/arrow-right-double.png'}
            width={20}
            height={20}
            alt='next'
          />
          <Image
            className='w-[20px] h-[20px] cursor-pointer hover:animate-pulse'
            src={'/go-forward-10-sec.png'}
            width={20}
            height={20}
            alt='forward 10s'
          />
        </div>
        <div className='flex items-center justify-end gap-[10px] text-[#8C8C8C] text-[12px]'>
          00:50.00/5:00.00
        </div>
      </div>
      <div className='px-10 pt-5 max-sm:px-0'>
      <div
        ref={thumbnailRef}
        className='relative h-[54px] bg-[#9413E6] p-1 rounded-[4px] w-full overflow-x-hidden flex items-center touch-action-none'
      >
        <div className='grid grid-cols-15 h-full'>
          {Array(15)
            .fill()
            .map((_, index) => (
              <div
                key={index} 
                className='w-full h-full bg-gray-500 flex items-center justify-center text-white text-[10px]'
              >
                <Image src={'/person-12.png'} height={48.86} width={55.05} className='w-full h-full object-cover' alt='frame'/>
              </div>
            ))}
        </div>
        <div
          ref={dragRef}
          onMouseDown={handleStart}
          onTouchStart={handleStart}
          className='absolute w-[5px] h-full bg-[#9413E6] cursor-ew-resize z-10 flex items-center touch-action-none'
          style={{ left: `${splitPosition}%`, transform: 'translateX(-50%)' }}
        >
        </div>
      </div>
      </div>
      <button
      onClick={()=> setShowPaymentAlert(true)}
        className='bg-[#9413E6] text-white text-[16px] max-sm:max-w-full font-[500] mt-2 cursor-pointer rounded-[4px] hover:opacity-[.75] z-5 w-full max-w-[295px] h-[49px]'
      >
        Generate
      </button>
      {showPaymentAlert && <PaymentAlert handleBtn={handleBtn} setShowPaymentAlert={setShowPaymentAlert}/>}
      {generating && <Generating z={'z-20'} nextStep={handleNextStep}/>}
      {error && <Trouble z={'z-20'} handleCancel={handleCancel} handleRetry={handleRetry}/>}
    </div>
  );
};

export default PreviewMain;
