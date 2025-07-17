import { SingleArtist } from '@/modules';
import { getRequestServer } from '@/service/getRequest';
import React from 'react'

const CreatorCollections = async ({params}:{params:Promise<{id:string}>}) => {
  const { id } = await params
  const singleArtist = await getRequestServer(`/user/${id}`);
  return (
    <>
      <SingleArtist activeCollection={true} id={id} singleArtist={singleArtist}/>
    </>
  )
}

export default CreatorCollections