import { ArtistType } from '@/@types/ArtistType'
import { CollectionType } from '@/@types/CollectionType'
import { CollectionCard } from '@/components'
import React from 'react'

const CollectionsNested = ({ singleArtist }: { singleArtist: ArtistType }) => {
  return (
    <div className='flex justify-between gap-y-[30px] gap-x-[10px]'>
      {singleArtist.collections.map((item: CollectionType) => <CollectionCard name={singleArtist.username} imgURL={singleArtist.image} key={item.id} item={item} />)}
    </div>
  )
}

export default CollectionsNested