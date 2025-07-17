"use client"
import { TopCreateorType } from '@/@types/ArtistType'
import { MetaType } from '@/@types/MetaType'
import { Heading, NestedRouteCaption, Text, TopCreatedItem } from '@/components'
import React, { FC, useState } from 'react'

interface PageType {data:TopCreateorType[], meta:MetaType}

const TopCreatorContent: FC<{topCeatorData:PageType, topCreatorToday:PageType, topCreatorWeek:PageType , topCreatorMonth:PageType}> = ({ topCeatorData, topCreatorToday ,topCreatorWeek , topCreatorMonth }) => {
    
    const [active, setActive] = useState<"all" | "today" | "week" | "month">("all")
    const routeList = [
        { id: 1, title: "All Time", count: -1, path: "all" },
        { id: 2, title: "Today", count: -1, path: "today" },
        { id: 3, title: "This Week", count: -1, path: "week" },
        { id: 4, title: "This Month", count: -1, path: "month" }
    ]
    return (
        <div className='pt-[80px]'>
            <div className='containers'>
                <Heading tag='h1' classList='!text-[51px] !mb-[10px]'>Top Creators</Heading>
                <Text classList='!text-[22px] !mb-[80px]'>Check out top ranking NFT artists on the NFT Marketplace.</Text>
                <NestedRouteCaption setPeriod={setActive} period={active} routeList={routeList} />
            </div>
            <div className='containers !py-[40px]'>
                <div className='flex border-[2px] text-[16px] text-[#858584] border-[#3B3B3B] rounded-[20px] py-[12px] px-[20px]'>
                    <div className='w-[5%]'>#</div>
                    <div className='w-[50%]'>Artist</div>
                    <div className='w-[15%]'>Change</div>
                    <div className='w-[15%]'>NFTs Sold</div>
                    <div className='w-[15%]'>NFTs Sold</div>
                </div>
                <div className='flex flex-col gap-[20px] pt-[20px]'>
                    {active == "all" ? topCeatorData.data.map((item: TopCreateorType, index:number) => <TopCreatedItem key={index} item={item} index={index}/>) : ""}
                    {active == "today" ? topCreatorToday.data.map((item: TopCreateorType, index:number) => <TopCreatedItem key={index} item={item} index={index}/>) : ""}
                    {active == "week" ? topCreatorWeek.data.map((item: TopCreateorType, index:number) => <TopCreatedItem key={index} item={item} index={index}/>) : ""}
                    {active == "month" ? topCreatorMonth.data.map((item: TopCreateorType, index:number) => <TopCreatedItem key={index} item={item} index={index}/>) : ""}
                </div>
            </div>
        </div>
    )
}

export default TopCreatorContent