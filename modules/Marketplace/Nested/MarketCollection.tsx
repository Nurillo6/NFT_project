import { CollectionType } from '@/@types/CollectionType'
import { CollectionCard } from '@/components'
import React from 'react'

const MarketCollection = ({ collectionsList }: { collectionsList: CollectionType[] }) => {
  return (
    <div className="containers flex justify-between flex-wrap gap-x-[10px] gap-y-[30px]">
      {collectionsList.map((item: CollectionType) => <CollectionCard key={item.id} item={item} />)}
    </div>
  )
}

export default MarketCollection