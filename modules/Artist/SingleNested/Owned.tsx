import { NftType2 } from '@/@types/NftType'
import { NftCard } from '@/components'
import React from 'react'

const Owned = ({ownedList}:{ownedList:NftType2[]}) => {
  return (
    <div className='flex justify-between gap-y-[30px] gap-x-[10px]'>
        {ownedList.map((item: NftType2) => <NftCard key={item.id} item={item}/>)}
      </div>
  )
}

export default Owned