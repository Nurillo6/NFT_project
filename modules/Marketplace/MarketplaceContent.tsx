"use client"
import { CollectionType } from '@/@types/CollectionType'
import { NftType2 } from '@/@types/NftType'
import { SearchIcon } from '@/assets/icons'
import { Heading, Input, NestedRouteCaption, Text } from '@/components'
import React, { FC, useState } from 'react'
import Nfts from './Nested/Nfts'
import MarketCollection from './Nested/MarketCollection'

const MarketplaceContent: FC<{ nftList: NftType2[], collectionsList: CollectionType[] }> = ({ collectionsList, nftList }) => {
    const [active, setActive] = useState<"nfts" | "collections">("nfts")
    const routeList = [
        { id: 1, title: "NFTs", count: nftList.length },
        { id: 2, title: "Collections", count: collectionsList.length }
    ]
    return (
        <>
            <div className='containers !pt-[80px]'>
                <Heading tag='h1' classList='!text-[51px] !mb-[10px]'>Browse Marketplace</Heading>
                <Text classList='!text-[22px] !mb-[30px]'>Browse through more than 50k NFTs on the NFT Marketplace.</Text>
                <label className='relative mb-[80px] block'>
                    <Input classList='!bg-transparent border-[1px] w-full border-[#858584] pr-[50px] !text-[#858584]' type='text' placeholder='Search your favourite NFTs' />
                    <button className='absolute top-0 bottom-0 my-auto right-[20px]'><SearchIcon /></button>
                </label>
                <NestedRouteCaption period={active} setPeriod={setActive} routeList={routeList} />
            </div>
            <div className='py-[80px] bg-[#3B3B3B]'>
                <div className="containers">
                    {active == "nfts" ? <Nfts nftList={nftList}/> : ""}
                    {active == "collections" ? <MarketCollection collectionsList={collectionsList} /> : ""}
                </div>
            </div>
        </>
    )
}

export default MarketplaceContent