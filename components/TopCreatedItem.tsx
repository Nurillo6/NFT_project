import { TopCreateorType } from '@/@types/ArtistType'
import { API } from '@/hooks/getEnv'
import Image from 'next/image'
import React from 'react'

const TopCreatedItem = ({item, index}:{item:TopCreateorType, index:number}) => {
    return (
        <div className='flex items-center bg-[#3B3B3B] border-[2px] text-[16px] text-[#858584] border-[#3B3B3B] rounded-[20px] py-[12px] px-[20px]'>
            <div className='w-[5%] text-center'>
                <button className='bg-[#2B2B2B] text-[#858584] w-[30px] h-[30px] rounded-full flex justify-center items-center'>{index + 1}</button>
            </div>
            <div className='w-[50%] flex items-center gap-[20px]'>
                <Image className='rounded-full w-[60px] h-[60px]' src={`${API}/file/${item.image}`} alt='Avatar img' width={60} height={60} priority />
                <strong className='text-[22px] line-clamp-1 text-[#FFFFFF]'>{item.artistName}</strong>
            </div>
            <div className='w-[15%] text-[#00AC4F] text-[16px] leading-[140%]'>{item.growth}%</div>
            <div className='w-[15%] text-white text-[16px] leading-[140%]'>{item.nftSold}</div>
            <div className='w-[15%] text-white text-[16px] leading-[140%]'>{item.totalRevenue}</div>
        </div>
    )
}

export default TopCreatedItem