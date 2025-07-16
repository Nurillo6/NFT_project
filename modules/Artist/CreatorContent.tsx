"use client"
import { ArtistPageType, ArtistType } from '@/@types/ArtistType'
import { RocketIcon } from '@/assets/icons'
import { ArtistsCard, Button, Heading, Text } from '@/components'
import { Link } from '@/i18n/navigation'
import React, { FC } from 'react'

const ArtistContent:FC<ArtistPageType> = ({artistsList}) => {
    // const t = useTranslations("") bu yerda tarjima qilasiz
    return (
        <section className='py-[80px]'>
            <div className="containers">
                <div className='flex mb-[60px] justify-between items-end'>
                    <div>
                        <Heading classList='!mb-[10px]' tag='h2'>Top creators</Heading>
                        <Text classList='!text-white !text-[22px]'>Checkout Top Rated Creators on the NFT Marketplace</Text>
                    </div>
                    <Link href={'/top-creator'}>
                        <Button type='button' variant='outlined' icon={<RocketIcon />} iconPostion='left' title='View Rankings' />
                    </Link>
                </div>
                <div className='flex flex-wrap justify-between gap-[30px]'>
                    {artistsList.data.map((item: ArtistType, index: number) => <ArtistsCard key={item.id} item={item} index={index} />)}
                </div>
            </div>
        </section>
    )
}

export default ArtistContent