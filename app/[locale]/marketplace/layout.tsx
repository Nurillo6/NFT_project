import { getRequestServer } from '@/service/getRequest'
import { ReactNode } from 'react'
import { SearchIcon } from '@/assets/icons'
import Heading from '@/components/Heading'
import Input from '@/components/Input'
import NestedRouteCaption from '@/components/NestedRouteCaption'
import Text from '@/components/Text'

export default async function MarketplaceLayout({ children }: { children: ReactNode }) {
    const nft = await getRequestServer("/nfts")
    const collections = await getRequestServer("/collections")
    
    const routeList = [
        { id: 1, title: "NFTs", href: "/marketplace", count: nft.length },
        { id: 2, title: "Collections", href: "/marketplace/collections", count: collections.length }
    ]
    return (
        <div className='pt-[80px]'>
            <div className='containers'>
                <Heading tag='h1' classList='!text-[51px] !mb-[10px]'>Browse Marketplace</Heading>
                <Text classList='!text-[22px] !mb-[30px]'>Browse through more than 50k NFTs on the NFT Marketplace.</Text>
                <label className='relative mb-[80px] block'>
                    <Input classList='!bg-transparent border-[1px] w-full border-[#858584] pr-[50px] !text-[#858584]' type='text' placeholder='Search your favourite NFTs' />
                    <button className='absolute top-0 bottom-0 my-auto right-[20px]'><SearchIcon /></button>
                </label>
                <NestedRouteCaption routeList={routeList} />
            </div>
            <div className='pt-[60px] pb-[80px] bg-[#3B3B3B]'>
                {children}
            </div>
        </div>
    )
}
