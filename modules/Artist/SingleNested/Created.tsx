import { ArtistType } from '@/@types/ArtistType'
import { NftType } from '@/@types/NftType'
import { NftCard } from '@/components'
import React, { FC } from 'react'

const Created:FC<{singleArtist:ArtistType}> = ({singleArtist}) => {
  return (
    <div className='flex justify-between gap-y-[30px] gap-x-[10px]'>
        {(singleArtist as ArtistType)?.createdNFTs?.map((item: NftType) => <NftCard key={item.id} item={item} name={(singleArtist as ArtistType).username} imgURL={(singleArtist as ArtistType).image} />)}
    </div>
  )
}

export default Created