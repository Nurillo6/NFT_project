import Image from 'next/image'
import React from 'react'

const Loading = () => {
  return (
    <div className='flex justify-center items-center'>
        <Image className='w-[100px] h-[100px]' src={'/loading.png'} alt='Loading' width={100} height={100} priority/>
    </div>
  )
}

export default Loading