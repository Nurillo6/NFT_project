import { SingleArtist } from '@/modules';
import { getRequestServer } from '@/service/getRequest';
import React, { FC } from 'react'

const CreatorLayout: FC<{ params: Promise<{ id: string }> }> = async ({ params }) => {
  const { id } = await params
  const singleArtist = await getRequestServer(`/user/${id}`);
  return (
    <>
      <SingleArtist id={id} singleArtist={singleArtist}/>
    </>
  )
}

export default CreatorLayout