import { NftType2 } from '@/@types/NftType'
import { NftCard } from '@/components'
import React from 'react'

const Nfts = ({nftList}:{nftList:NftType2[]}) => {
  return (
   <div className="flex justify-between flex-wrap gap-x-[10px] gap-y-[30px]">
      {nftList.map((item:NftType2) => <NftCard key={item.id} item={item}/>)}
    </div>
  )
}

export default Nfts