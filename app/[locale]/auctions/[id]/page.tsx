import { AuctionType } from '@/@types/AuctionType'
import { AuctionsType2 } from '@/@types/AuctionType'
import { MetaType } from '@/@types/MetaType'
import SingleAuctionContent from '@/modules/Auctions/SingleAuctionContent'
import { getRequestServer } from '@/service/getRequest'
import React from 'react'

const SingleAuctionPage = async ({params}:{params:Promise<{id:string}>}) => {
    const {id} = await params
    const auctionData:AuctionType = await getRequestServer(`/auctions/${id}`)
    const artistData = await getRequestServer(`/user/${auctionData.nft.creatorId}`)
    const moreAuctions: {data: AuctionsType2[], meta: MetaType} = await getRequestServer(`/auctions`);
    let moreAuctionsData = moreAuctions.data.filter((item: AuctionsType2) => item.nft.ownerId === artistData.id && item.id !== auctionData.id);
    
  return <SingleAuctionContent auctionData={auctionData} artistData={artistData} moreAuctions={moreAuctionsData}/>
}

export default SingleAuctionPage