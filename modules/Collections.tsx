"use client"
import { CollectionType } from '@/@types/CollectionType'
import { MetaType } from '@/@types/MetaType'
import CollectionCard from '@/components/CollectionCard'
import Heading from '@/components/Heading'
import Text from '@/components/Text'
import { getQueryData } from '@/lib/getQueryData'
import React, { FC } from 'react'
interface CollectionPageType {
    collection: { data: CollectionType[], meta: MetaType } | CollectionType[] | [],
    limit?: number,
    queryKey:string,
}
const Collections: FC<CollectionPageType> = ({ collection, limit, queryKey }) => {
    const { data: collections } = getQueryData(`/collections?limit=3`, collection, "collections_limit")

    return (
        <div className={`${limit && "py-[80px]"}`}>
            <div className="containers">
                {limit && <>
                    <Heading classList='!mb-[10px]' tag='h2'>Trending Collection</Heading>
                    <Text classList='!text-[22px] !mb-[60px]'>Checkout our weekly updated trending collection.</Text>
                </>}

                <div className='flex justify-between flex-wrap'>
                    {collections?.data?.map((item: CollectionType) => <CollectionCard key={item.id} item={item} />)}
                </div>
            </div>
        </div>
    )
}

export default Collections