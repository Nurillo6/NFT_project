"use client"
import { CollectionPageType, CollectionType } from '@/@types/CollectionType'
import { CollectionCard, Heading, Text } from '@/components'
import React, { FC } from 'react'

const CollectionContent:FC<CollectionPageType> = ({collections}) => {
    // const t = useTranslations("") Bu Yerda tarjima qilasiz
    return (
        <div className={`py-[80px]`}>
            <div className="containers">
                <Heading classList='!mb-[10px]' tag='h2'>Trending Collection</Heading>
                <Text classList='!text-[22px] !mb-[60px]'>Checkout our weekly updated trending collection.</Text>
                <div className='flex justify-between flex-wrap'>
                    {collections.data.map((item: CollectionType) => <CollectionCard key={item.id} item={item} />)}
                </div>
            </div>
        </div>
    )
}

export default CollectionContent