"use client"
import { Heading, NestedRouteCaption, Text } from '@/components'
import React, { useState } from 'react'

const TopCreatorContent = () => {
    const [active, setActive] = useState<"all time" | "today" | "this week" | "this month">("all time")
      const routeList = [
        {id:1,title:"All Time", count:-1},
        {id:2,title:"Today",count:-1},
        {id:3,title:"This Week",count:-1},
        {id:4,title:"This Month",count:-1}
    ]
    return (
        <div className='pt-[80px]'>
            <div className='containers'>
                <Heading tag='h1' classList='!text-[51px] !mb-[10px]'>Top Creators</Heading>
                <Text classList='!text-[22px] !mb-[80px]'>Check out top ranking NFT artists on the NFT Marketplace.</Text>
                <NestedRouteCaption setPeriod={setActive} period={active} routeList={routeList} />
            </div>
            ascasc
        </div>
    )
}

export default TopCreatorContent