"use client"
import { NftType2 } from '@/@types/NftType'
import NftCard from '@/components/NftCard'
import { Context } from '@/context/Context'
import { getQueryData } from '@/lib/getQueryData'
import React, { useContext, useEffect } from 'react'

const AllNft = ({ nftList }: { nftList: NftType2[] | [] }) => {
  const {setNft} = useContext(Context)
  const { data } = getQueryData("/nft", nftList, 'nft_list')

  useEffect(() => {
    setNft(data.data)
  },[])
  return (
    <div>
      <div className='containers flex  justify-between flex-wrap gap-y-[30px] gap-x-[10px]'>
        {data.map((item: NftType2) => <NftCard key={item.id} item={item} />)}
      </div>
    </div>
  )
}

export default AllNft