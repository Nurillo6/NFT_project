import { SingleAuctionContent } from '@/modules'
import React from 'react'

const SingleAuctionPage = async ({params}:{params:Promise<{id:string}>}) => {
    const {id} = await params
    // API Request id auction uchun
  return <SingleAuctionContent />
}

export default SingleAuctionPage