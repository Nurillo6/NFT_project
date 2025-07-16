"use client"
import { NftType2, NtfPageType } from '@/@types/NftType'
import { EyeIcon } from '@/assets/icons'
import { Button, Heading, NftCard, Text } from '@/components'
import React, { FC } from 'react'

const NftContent:FC<NtfPageType> = ({nftList}) => {
    // const t = useTranslations() bu yerda tarjima qilasiz
    return (
        <section className='py-[80px]'>
            <div className="containers">
                <div className='flex mb-[60px] justify-between items-end'>
                    <div>
                        <Heading classList='!mb-[10px]' tag='h2'>Discover More NFTs</Heading>
                        <Text classList='!text-white !text-[22px]'>Explore new trending NFTs</Text>
                    </div>
                    <Button extraClass='!px-[50px]' type='button' variant='outlined' icon={<EyeIcon />} iconPostion='left' title='See All' />
                </div>
                <div className='flex justify-between gap-[10px]'>
                    {nftList.data.map((item: NftType2) => <NftCard key={item.id} item={item} />)}
                </div>
            </div>
        </section>
    )
}

export default NftContent