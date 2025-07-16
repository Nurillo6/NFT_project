import { SingleArtist } from '@/modules';
import { getRequestServer } from '@/service/getRequest';
import React, { FC, ReactNode } from 'react'

const CreatorLayout: FC<{ children: ReactNode, params: Promise<{ id: string }> }> = async ({ children, params }) => {
  const { id } = await params
  const singleArtist = await getRequestServer(`/user/${id}`);
  return (
    <>
      <SingleArtist id={id} singleArtist={singleArtist}/>
    </>
  )
}

export default CreatorLayout