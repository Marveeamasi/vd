'use client'
import React, { useEffect, useState } from 'react'
import SelectList from './SelectList'
import Image from 'next/image'

const SelectBtn = ({ searchable, lists, setDisplaced }) => {
    const [showList, setShowList] = useState(false);
    const [selectedOption, setSelectedOption] = useState(lists[0]);

    useEffect(() => {
        console.log('showList is:', showList);
    }, [showList]);

    const handleClick = (value) => {
        setSelectedOption(value);
        setShowList(false);
        setDisplaced(true);
    }

    return (
        <button 
            onClick={(e) => {
                e.stopPropagation(); 
                setShowList(prev => !prev);
            }} 
            className="flex relative items-center py-[6px] px-[9px] rounded-[4px] bg-[#140926] justify-between w-1/2 cursor-pointer"
        >
            {selectedOption}
            <Image
                src="/arrow-left.png"
                alt="left arrow"
                width={20}
                height={20}
                className="h-[20px] w-[20px]" 
            />
            {showList && (
                <SelectList 
                    searchable={searchable} 
                    lists={lists} 
                    handleClick={handleClick} 
                    setShowList={setShowList} 
                />
            )}
        </button>
    )
}

export default SelectBtn
