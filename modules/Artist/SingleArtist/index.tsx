import { FC } from 'react'
import { ArtistType } from '@/@types/ArtistType'
import SingleArtisContent from './SingleArtisContent'
import { getRequestServer } from '@/service/getRequest'

const SingleCreator: FC<{ singleArtist: ArtistType,id:string, activeCollection?:boolean }> = async ({ singleArtist, id, activeCollection }) => {
    const ownedList = await getRequestServer(`/nfts?ownerId=${id}`)
    return <SingleArtisContent activeCollection={activeCollection} singleArtist={singleArtist} ownedList={ownedList.data}/>
}

export default SingleCreator