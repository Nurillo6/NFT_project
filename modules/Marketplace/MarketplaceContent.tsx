"use client"
import { CollectionType } from '@/@types/CollectionType'
import { NftType2 } from '@/@types/NftType'
import { SearchIcon } from '@/assets/icons'
import { Heading, Input, Loading, NestedRouteCaption, Text } from '@/components'
import React, { FC, useEffect, useState } from 'react'
import Nfts from './Nested/Nfts'
import MarketCollection from './Nested/MarketCollection'
import { debounce } from '@/hooks'
import { API } from '@/hooks/getEnv'



const MarketplaceContent: FC<{ nftList: NftType2[], collectionsList: CollectionType[] }> = ({ collectionsList, nftList }) => {
    // Loading
    const [loading, setLoading] = useState<boolean>(false)

    // Search part
    const [value, setValue] = useState<string>("")
    const [searchDataNft, setSearchDataNft] = useState<NftType2[] | null>(null)
    const [searchDataCollection, setSearchDataCollections] = useState<CollectionType[] | null>(null)
    function handleSearchNft(searchValue: string) {
        setLoading(true)
        setValue(searchValue)
        if (!searchValue) {
            setSearchDataNft(null)
            setSearchDataCollections(null)
            setLoading(false)
        }
    }
    const searchResult = debounce(value, 1000)

    // Active bar
    const [active, setActive] = useState<"nfts" | "collections">("nfts")
    const routeList = [
        { id: 1, title: "NFTs", count: searchDataNft ? searchDataNft.length : nftList.length, path: "nfts" },
        { id: 2, title: "Collections", count: searchDataCollection ? searchDataCollection.length : collectionsList.length, path: "collections" }
    ]
    useEffect(() => {
        if (searchResult) {
            async function searchNft() {
                const res = await fetch(`${API}/${active}?search=${searchResult}`)
                const data = await res.json()
                setLoading(false)
                if (active == "nfts") {
                    setSearchDataNft(data.data)
                }
                else {
                    setSearchDataCollections(data.data)
                }
            }
            searchNft()
        }
    }, [searchResult])

    useEffect(() => {
        setSearchDataCollections(null)
        setSearchDataNft(null)
        setValue("")
    }, [active])
    return (
        <>
            <div className='containers !pt-[80px]'>
                <Heading tag='h1' classList='!text-[51px] !mb-[10px]'>Browse Marketplace</Heading>
                <Text classList='!text-[22px] !mb-[30px]'>Browse through more than 50k NFTs on the NFT Marketplace.</Text>
                <label className='relative mb-[80px] block'>
                    <Input value={value} onChange={(e) => handleSearchNft(e.target.value)} classList='!bg-transparent border-[1px] w-full border-[#858584] pr-[50px] !text-[#858584]' type='text' placeholder='Search your favourite NFTs' />
                    <button className='absolute top-0 bottom-0 my-auto right-[20px]'><SearchIcon /></button>
                </label>
                <NestedRouteCaption period={active} setPeriod={setActive} routeList={routeList} />
            </div>
            <div className='py-[80px] bg-[#3B3B3B]'>
                <div className="containers">
                    {active == "nfts" ?(loading ? <Loading/> : <Nfts nftList={searchDataNft ? searchDataNft : nftList} />) : ""}
                    {active == "collections" ? (loading ? <Loading/> : <MarketCollection collectionsList={searchDataCollection ? searchDataCollection : collectionsList} />) : ""}
                </div>
            </div>
        </>
    )
}

export default MarketplaceContent