import { ArtistType } from '@/@types/ArtistType'
import { AuctionType } from '@/@types/AuctionType'
import { AuctionsType2 } from '@/@types/AuctionType'
import { MetaType } from '@/@types/MetaType'
import { ArrowRight, GlobalIcon } from '@/assets/icons'
import { Button, Heading, NftCard, Text, Timer } from '@/components'
import { API } from '@/hooks/getEnv'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SingleAuctionContent = ({ auctionData, artistData, moreAuctions }: { auctionData: AuctionType, artistData: ArtistType, moreAuctions:AuctionsType2[]}) => {
  const endTime: any = new Date(auctionData.endsAt);
  const nowUtcISOString = new Date().toISOString();
  const now: any = new Date(nowUtcISOString);
  const diffMs = endTime - now;
  const totalSeconds = Math.floor(diffMs / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return (
    <div className='flex flex-col'>
      <div>
        <div style={{ backgroundImage: `url(${API}/file/${auctionData.nft.image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", }} className='h-[700px] flex justify-end pb-[60px] overflow-hidden md:bg-scroll'></div>
        <div className='flex !py-[40px] !px-[115px]'>
          <div className='containers space-y-[30px]'>
            <div className='space-y-[10px]'>
              <Heading tag='h1'>{auctionData.nft.title}</Heading>
              <Text classList='!text-[#858584] !text-[22px]'>Minted on {auctionData.createdAt}</Text>
            </div>
            <div className='space-y-[10px]'>
              <Text classList='font-monoSpace !text-[#858584] !text-[22px]'>Created By</Text>
              <div className='flex gap-[10px]'>
                <Image className='rounded-full' src={`${API}/file/${artistData.image}`} alt='avatar' width={30} height={30} />
                <Text classList='!text-[22px] !text-white !font-semibold'>{artistData.username}</Text>
              </div>
            </div>
            <div className='space-y-[10px]'>
              <Text classList='font-monoSpace !text-[#858584] !text-[22px]'>Description</Text>
              <Text classList='!text-white !text-[22px]'>{auctionData.description}</Text>
            </div>
            <div className='space-y-[10px]'>
              <Text classList='font-monoSpace  !text-[#858584] !text-[22px]'>Details</Text>
              {auctionData.details.map((detail, index) => (<div key={index} className='flex gap-[20px]'><GlobalIcon /> <Text classList='!text-white !text-[22px]'>{detail}</Text></div>))}
            </div>
            <div className='space-y-[10px] w-[600px]'>
              <Text classList='!font-semibold !text-[#858584] !text-[22px]'>Tags</Text>
              <div className='flex flex-wrap gap-[20px]'>
                {auctionData.tags.map((tag, index) => (
                  <div key={index} className='flex bg-[#3B3B3B] rounded-[25px] items-center justify-center px-[30px] py-[12px]'>
                    <Text classList='!text-white !font-semibold'>{tag.toUpperCase()}</Text>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <Timer hours={hours} minutes={minutes} seconds={seconds} />
          </div>
        </div>
      </div>
      {moreAuctions.length ? (
        <div className='containers !py-[80px]'>
          <div className='w-[1050px] flex justify-between items-center'>
            <Heading tag='h2'>More From This Artist</Heading>
            <Link href={`/creator/${artistData.id}`}>
              <Button type='button' variant='outlined' icon={<ArrowRight />} iconPostion='left' title='Go To Aritst Page' />
            </Link>
          </div>
          <div className='flex flex-wrap gap-[30px] mt-[60px]'>
            {moreAuctions.map((item: AuctionsType2) => (
              <Link key={item.id} href={`/auctions/${item.id}`}>
                <NftCard key={item.id} item={item.nft} imgURL={item.nft.creator.image} />
              </Link>
            ))}
          </div>
        </div>
      ) : ""}
    </div>
  )
}

export default SingleAuctionContent